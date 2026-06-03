import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const role = (session as any)?.user?.role ?? "collaboratore";
  const userId = (session as any)?.user?.id;

  if (!["admin", "owner"].includes(role)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
  }

  let where: Record<string, unknown> = {
    collaboratorId: { not: null },
    feeAmount: { gt: 0 },
    status: { not: "cancellato" },
  };

  // Owner: filter to own properties
  if (role === "owner") {
    const links = await prisma.propertyCollaborator.findMany({
      where: { userId },
      select: { propertyId: true },
    });
    where = { ...where, propertyId: { in: links.map((l) => l.propertyId) } };
  }

  const bookings = await prisma.booking.findMany({
    where,
    orderBy: { checkIn: "desc" },
    select: {
      id: true,
      clientFirstName: true,
      clientLastName: true,
      checkIn: true,
      checkOut: true,
      nights: true,
      feeAmount: true,
      status: true,
      collaboratorPaid: true,
      collaboratorPaidAt: true,
      property: { select: { id: true, name: true } },
      room: { select: { id: true, name: true } },
      collaborator: { select: { id: true, nickname: true } },
    },
  });

  return NextResponse.json(
    bookings.map((b) => ({
      ...b,
      checkIn: b.checkIn.toISOString().slice(0, 10),
      checkOut: b.checkOut.toISOString().slice(0, 10),
      collaboratorPaidAt: b.collaboratorPaidAt
        ? b.collaboratorPaidAt.toISOString().slice(0, 10)
        : null,
    }))
  );
}
