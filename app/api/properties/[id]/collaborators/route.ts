import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id: propertyId } = await params;
  const body = await req.json();
  const { nickname } = body;

  if (!nickname?.trim()) {
    return NextResponse.json({ error: "Nickname obbligatorio" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { nickname: nickname.trim() } });
  if (!user) {
    return NextResponse.json({ error: `Utente "${nickname}" non trovato` }, { status: 404 });
  }

  const existing = await prisma.propertyCollaborator.findUnique({
    where: { propertyId_userId: { propertyId, userId: user.id } },
  });
  if (existing) {
    return NextResponse.json({ error: "Collaboratore già presente" }, { status: 409 });
  }

  const roleOnProperty = ["owner", "concierge", "collaboratore"].includes(body.roleOnProperty)
    ? body.roleOnProperty
    : "collaboratore";

  const collab = await prisma.propertyCollaborator.create({
    data: { propertyId, userId: user.id, roleOnProperty },
    include: { user: { select: { id: true, nickname: true, role: true } } },
  });

  return NextResponse.json(collab, { status: 201 });
}
