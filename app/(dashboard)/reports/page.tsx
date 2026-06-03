import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { formatEuro } from "@/lib/utils";
import { AccontiClient } from "@/components/AccontiClient";
import type { Prisma } from "@/app/generated/prisma";

export default async function ReportsPage() {
  const session = await auth();
  const role = session?.user?.role ?? "collaboratore";
  const userId = session?.user?.id ?? "";

  if (!["admin", "owner"].includes(role)) redirect("/bookings");

  // Ottieni gli ID delle proprietà visibili a questo utente
  let allowedPropertyIds: string[] | null = null; // null = tutte (admin)
  if (role === "owner") {
    const links = await prisma.propertyCollaborator.findMany({
      where: { userId },
      select: { propertyId: true },
    });
    allowedPropertyIds = links.map((l) => l.propertyId);
  }

  const bookingWhere: Prisma.BookingWhereInput =
    allowedPropertyIds !== null
      ? { propertyId: { in: allowedPropertyIds } }
      : {};

  const [bookings, accontiLogs, propertiesAll] = await Promise.all([
    prisma.booking.findMany({
      where: bookingWhere,
      include: { property: true, room: true, collaborator: true, paymentMethod: true },
    }),
    prisma.accontoLog.findMany({
      where:
        allowedPropertyIds !== null
          ? { booking: { propertyId: { in: allowedPropertyIds } } }
          : {},
      include: {
        paymentMethod: true,
        booking: { include: { property: true, room: true } },
      },
      orderBy: { savedAt: "desc" },
    }),
    prisma.property.findMany({
      where: allowedPropertyIds !== null ? { id: { in: allowedPropertyIds } } : {},
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    }),
  ]);

  const finalizzati = bookings.filter((b) => b.status === "finalizzato");

  const fatturatoLordo = finalizzati.reduce((s, b) => s + b.totalAmount, 0);
  const nettoAtteso = finalizzati.reduce((s, b) => s + b.ownerAmount, 0);
  const incassatoReale = finalizzati.reduce((s, b) => s + b.collectedAmount, 0);
  const commissioniPagate = finalizzati.reduce((s, b) => s + b.feeAmount, 0);

  const logsForClient = accontiLogs.map((l) => ({
    id: l.id,
    amount: l.amount,
    type: l.type,
    savedAt: l.savedAt.toISOString(),
    paymentMethod: l.paymentMethod ? { id: l.paymentMethod.id, name: l.paymentMethod.name } : null,
    booking: {
      id: l.booking.id,
      clientFirstName: l.booking.clientFirstName,
      clientLastName: l.booking.clientLastName,
      checkIn: l.booking.checkIn.toISOString(),
      checkOut: l.booking.checkOut.toISOString(),
      nights: l.booking.nights,
      totalAmount: l.booking.totalAmount,
      status: l.booking.status,
      property: { id: l.booking.property.id, name: l.booking.property.name },
      room: { id: l.booking.room.id, name: l.booking.room.name },
    },
  }));

  const kpis = [
    { label: "Fatturato Lordo", value: formatEuro(fatturatoLordo), color: "text-[#C9A75F]" },
    { label: "Netto Atteso", value: formatEuro(nettoAtteso), color: "text-[#4A90E2]" },
    { label: "Incassato Reale", value: formatEuro(incassatoReale), color: "text-[#3BB273]" },
    { label: "Commissioni Pagate", value: formatEuro(commissioniPagate), color: "text-[#A6A29A]" },
    { label: "Prenotazioni Finalizzate", value: String(finalizzati.length), color: "text-white/85" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white/90">Report</h1>
        <p className="text-white/40 text-sm mt-1">Analisi economica e performance</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="glass-card p-5">
            <p className="text-white/35 text-xs uppercase tracking-wider mb-2">{kpi.label}</p>
            <p className={`text-xl font-bold ${kpi.color}`}>{kpi.value}</p>
          </div>
        ))}
      </div>

      {finalizzati.length === 0 && (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-white/80 font-semibold mb-2">Nessun dato disponibile</h3>
          <p className="text-white/40 text-sm max-w-xs">
            I report si popolano con le prenotazioni finalizzate.
          </p>
        </div>
      )}

      <AccontiClient logs={logsForClient} properties={propertiesAll} />
    </div>
  );
}
