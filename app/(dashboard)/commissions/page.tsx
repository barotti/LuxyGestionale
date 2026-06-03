import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { CommissionsClient } from "@/components/CommissionsClient";

export default async function CommissionsPage() {
  const session = await auth();
  const role = (session as any)?.user?.role ?? "collaboratore";
  const userId = (session as any)?.user?.id;

  if (!["admin", "owner", "concierge"].includes(role)) redirect("/commissions");

  let where: Record<string, unknown> = {
    collaboratorId: { not: null },
    feeAmount: { gt: 0 },
    status: { not: "cancellato" },
  };

  if (role === "owner") {
    const links = await prisma.propertyCollaborator.findMany({
      where: { userId },
      select: { propertyId: true },
    });
    where = { ...where, propertyId: { in: links.map((l) => l.propertyId) } };
  }

  // Concierge sees only their own commissions
  if (role === "concierge") {
    where = { ...where, collaboratorId: userId };
  }

  const [bookings, paymentMethods] = await Promise.all([
    prisma.booking.findMany({
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
        collaboratorPaymentMethod: { select: { id: true, name: true } },
        property: { select: { id: true, name: true } },
        room: { select: { id: true, name: true } },
        collaborator: { select: { id: true, nickname: true } },
      },
    }),
    prisma.paymentMethod.findMany({ where: { active: true }, orderBy: { name: "asc" } }),
  ]);

  const serialized = bookings.map((b) => ({
    ...b,
    checkIn: b.checkIn.toISOString().slice(0, 10),
    checkOut: b.checkOut.toISOString().slice(0, 10),
    collaboratorPaidAt: b.collaboratorPaidAt
      ? b.collaboratorPaidAt.toISOString().slice(0, 10)
      : null,
  }));

  return <CommissionsClient bookings={serialized} paymentMethods={paymentMethods} role={role} />;
}
