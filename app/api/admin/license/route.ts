import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if ((session as any)?.user?.role !== "admin") {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
  }

  const { userId, type, months } = await req.json();

  if (!userId || !type || !months) {
    return NextResponse.json({ error: "Dati mancanti" }, { status: 400 });
  }

  const validTypes = ["base", "premium", "enterprise"];
  if (!validTypes.includes(type)) {
    return NextResponse.json({ error: "Tipo licenza non valido" }, { status: 400 });
  }

  const monthsNum = parseInt(months, 10);
  if (isNaN(monthsNum) || monthsNum < 1) {
    return NextResponse.json({ error: "Durata non valida" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return NextResponse.json({ error: "Utente non trovato" }, { status: 404 });

  // Extend from current expiry if still active, otherwise from today
  const existing = await prisma.license.findUnique({ where: { userId } });
  const now = new Date();
  const baseDate =
    existing?.currentPeriodEnd && existing.currentPeriodEnd > now
      ? new Date(existing.currentPeriodEnd)
      : new Date(now);

  baseDate.setMonth(baseDate.getMonth() + monthsNum);

  const license = await prisma.license.upsert({
    where: { userId },
    create: {
      userId,
      type,
      status: "active",
      currentPeriodEnd: baseDate,
      cancelAtPeriodEnd: false,
    },
    update: {
      type,
      status: "active",
      currentPeriodEnd: baseDate,
      cancelAtPeriodEnd: false,
    },
  });

  return NextResponse.json({
    ...license,
    currentPeriodEnd: license.currentPeriodEnd?.toISOString() ?? null,
    createdAt: license.createdAt.toISOString(),
    updatedAt: license.updatedAt.toISOString(),
  });
}

export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if ((session as any)?.user?.role !== "admin") {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
  }

  const { userId } = await req.json();
  if (!userId) return NextResponse.json({ error: "userId mancante" }, { status: 400 });

  const updated = await prisma.license.updateMany({
    where: { userId },
    data: { status: "cancelled" },
  });

  if (updated.count === 0) {
    return NextResponse.json({ error: "Licenza non trovata" }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
