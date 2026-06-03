import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if ((session as any)?.user?.role !== "admin") {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
  }

  const { id } = await params;
  const body = await req.json();
  const { role } = body;

  const allowedRoles = ["admin", "owner", "concierge", "collaboratore"];
  if (!role || !allowedRoles.includes(role)) {
    return NextResponse.json({ error: "Ruolo non valido" }, { status: 400 });
  }

  const user = await prisma.user.update({
    where: { id },
    data: { role },
    select: { id: true, nickname: true, email: true, role: true, createdAt: true,
      propertyLinks: { select: { propertyId: true, roleOnProperty: true, property: { select: { id: true, name: true } } } } },
  });

  return NextResponse.json(user);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const sessionUserId = (session as any)?.user?.id;
  const sessionRole = (session as any)?.user?.role;
  if (sessionRole !== "admin") {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
  }

  const { id } = await params;
  if (id === sessionUserId) {
    return NextResponse.json({ error: "Non puoi eliminare il tuo stesso account" }, { status: 400 });
  }

  await prisma.user.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
