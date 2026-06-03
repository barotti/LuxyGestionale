import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if ((session as any)?.user?.role !== "admin") {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      nickname: true,
      email: true,
      role: true,
      ownerId: true,
      createdAt: true,
      propertyLinks: {
        select: {
          propertyId: true,
          roleOnProperty: true,
          property: { select: { id: true, name: true } },
        },
      },
    },
  });

  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if ((session as any)?.user?.role !== "admin") {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
  }

  const body = await req.json();
  const { nickname, password, role, email, ownerId } = body;

  if (!nickname?.trim()) {
    return NextResponse.json({ error: "Nickname obbligatorio" }, { status: 400 });
  }
  if (!password || password.length < 6) {
    return NextResponse.json({ error: "Password minimo 6 caratteri" }, { status: 400 });
  }
  const allowedRoles = ["admin", "owner", "concierge", "collaboratore"];
  if (!role || !allowedRoles.includes(role)) {
    return NextResponse.json({ error: "Ruolo non valido" }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { nickname: nickname.trim() } });
  if (existing) {
    return NextResponse.json({ error: "Nickname già in uso" }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      nickname: nickname.trim(),
      email: email?.trim() || null,
      passwordHash,
      role,
      ownerId: role === "concierge" && ownerId ? ownerId : null,
    },
    select: {
      id: true,
      nickname: true,
      email: true,
      role: true,
      ownerId: true,
      createdAt: true,
      propertyLinks: { select: { propertyId: true, roleOnProperty: true, property: { select: { id: true, name: true } } } },
    },
  });

  return NextResponse.json(user, { status: 201 });
}
