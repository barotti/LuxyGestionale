import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const role = (session as any)?.user?.role ?? "collaboratore";
  if (!["admin", "owner"].includes(role)) {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
  }

  const { id } = await params;
  const body = await req.json();
  const { paid, paidAt, paymentMethodId } = body;

  const data: Record<string, unknown> = {
    collaboratorPaid: Boolean(paid),
    collaboratorPaidAt: paid && paidAt ? new Date(paidAt) : null,
    collaboratorPaymentMethodId: paid && paymentMethodId ? paymentMethodId : null,
  };

  const booking = await prisma.booking.update({
    where: { id },
    data,
    select: {
      id: true,
      collaboratorPaid: true,
      collaboratorPaidAt: true,
      collaboratorPaymentMethod: { select: { id: true, name: true } },
    },
  });

  return NextResponse.json({
    ...booking,
    collaboratorPaidAt: booking.collaboratorPaidAt
      ? booking.collaboratorPaidAt.toISOString().slice(0, 10)
      : null,
  });
}
