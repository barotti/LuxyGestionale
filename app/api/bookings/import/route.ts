import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

interface ImportRow {
  nome: string;
  cognome?: string;
  proprieta: string;
  stanza: string;
  checkIn: string; // DD/MM/YYYY
  checkOut: string;
  soggiorno: number;
  pulizie?: number;
  fee?: number;
  incassato?: number;
  ospiti?: number;
  stato?: string;
  metodoPagamento?: string;
  telefono?: string;
  email?: string;
  fonte?: string;
  note?: string;
  collaboratore?: string;
}

function parseItalianDate(s: string): Date | null {
  const parts = s.trim().split("/");
  if (parts.length !== 3) return null;
  const [d, m, y] = parts.map(Number);
  if (!d || !m || !y) return null;
  const date = new Date(y, m - 1, d);
  if (isNaN(date.getTime())) return null;
  return date;
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const rows: ImportRow[] = body.rows;

  if (!rows || !Array.isArray(rows)) {
    return NextResponse.json({ error: "Dati non validi" }, { status: 400 });
  }

  const [properties, paymentMethods, users] = await Promise.all([
    prisma.property.findMany({ include: { rooms: true } }),
    prisma.paymentMethod.findMany(),
    prisma.user.findMany(),
  ]);

  const results: { row: number; success: boolean; error?: string }[] = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowNum = i + 1;

    try {
      // Find property (case-insensitive)
      const property = properties.find(
        (p) => p.name.toLowerCase().trim() === (row.proprieta ?? "").toLowerCase().trim()
      );
      if (!property) {
        results.push({ row: rowNum, success: false, error: `Proprietà "${row.proprieta}" non trovata` });
        continue;
      }

      // Find room within property
      const room = property.rooms.find(
        (r) => r.name.toLowerCase().trim() === (row.stanza ?? "").toLowerCase().trim()
      );
      if (!room) {
        results.push({ row: rowNum, success: false, error: `Stanza "${row.stanza}" non trovata in "${property.name}"` });
        continue;
      }

      // Parse dates
      const checkIn = parseItalianDate(row.checkIn ?? "");
      const checkOut = parseItalianDate(row.checkOut ?? "");
      if (!checkIn) { results.push({ row: rowNum, success: false, error: "Check-in non valido (usa DD/MM/YYYY)" }); continue; }
      if (!checkOut) { results.push({ row: rowNum, success: false, error: "Check-out non valido (usa DD/MM/YYYY)" }); continue; }
      if (checkOut <= checkIn) { results.push({ row: rowNum, success: false, error: "Check-out deve essere dopo il check-in" }); continue; }

      const nights = Math.round((checkOut.getTime() - checkIn.getTime()) / 86400000);

      // Check overlaps with non-cancelled bookings
      const overlap = await prisma.booking.findFirst({
        where: {
          roomId: room.id,
          status: { notIn: ["cancellato"] },
          checkIn: { lt: checkOut },
          checkOut: { gt: checkIn },
        },
      });
      if (overlap) {
        results.push({ row: rowNum, success: false, error: "Sovrapposizione con prenotazione esistente" });
        continue;
      }

      // Financials
      const stayAmount = Number(row.soggiorno) || 0;
      const cleaningAmount = Number(row.pulizie) || 0;
      const feeAmount = Number(row.fee) || 0;
      const collectedAmount = Number(row.incassato) || 0;
      const ownerAmount = stayAmount + cleaningAmount;
      const totalAmount = ownerAmount + feeAmount;

      // Status validation
      const validStatuses = ["in_trattativa", "bloccato", "prenotato", "acconto", "finalizzato", "cancellato"];
      const status = row.stato && validStatuses.includes(row.stato.toLowerCase().trim())
        ? row.stato.toLowerCase().trim()
        : "in_trattativa";

      // Payment method lookup
      let paymentMethodId: string | null = null;
      if (row.metodoPagamento?.trim()) {
        const pm = paymentMethods.find(
          (p) => p.name.toLowerCase().trim() === row.metodoPagamento!.toLowerCase().trim()
        );
        if (pm) paymentMethodId = pm.id;
      }

      // Collaborator lookup
      let collaboratorId: string | null = null;
      if (row.collaboratore?.trim()) {
        const u = users.find(
          (u) => u.nickname.toLowerCase().trim() === row.collaboratore!.toLowerCase().trim()
        );
        if (u) collaboratorId = u.id;
      }

      await prisma.booking.create({
        data: {
          propertyId: property.id,
          roomId: room.id,
          clientFirstName: row.nome,
          clientLastName: row.cognome || null,
          clientPhone: row.telefono || null,
          clientEmail: row.email || null,
          guests: Number(row.ospiti) || 1,
          checkIn,
          checkOut,
          nights,
          stayAmount,
          cleaningAmount,
          ownerAmount,
          feeAmount,
          totalAmount,
          collectedAmount,
          paymentMethodId,
          bookingSource: row.fonte || null,
          status: status as "in_trattativa" | "bloccato" | "prenotato" | "acconto" | "finalizzato" | "cancellato",
          notes: row.note || null,
          collaboratorId,
        },
      });

      results.push({ row: rowNum, success: true });
    } catch {
      results.push({ row: rowNum, success: false, error: "Errore interno durante il salvataggio" });
    }
  }

  return NextResponse.json({ results });
}
