import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if ((session as any)?.user?.role !== "admin") {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
  }

  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "asc" },
    select: { id: true, name: true, location: true },
  });

  return NextResponse.json(properties);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const role = (session as any)?.user?.role ?? "collaboratore";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userId = (session as any)?.user?.id as string;

  if (role !== "admin" && role !== "owner") {
    return NextResponse.json({ error: "Non autorizzato" }, { status: 403 });
  }

  const body = await req.json();
  const { name, location, description } = body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return NextResponse.json({ error: "Nome proprietà obbligatorio" }, { status: 400 });
  }
  if (!location || typeof location !== "string" || location.trim() === "") {
    return NextResponse.json({ error: "Posizione obbligatoria" }, { status: 400 });
  }

  const property = await prisma.property.create({
    data: {
      name: name.trim(),
      location: location.trim(),
      description: description ? String(description).trim() : null,
      // Auto-link the owner as collaborator so they can see the property
      ...(role === "owner"
        ? { collaborators: { create: { userId, roleOnProperty: "owner" } } }
        : {}),
    },
  });

  return NextResponse.json(property, { status: 201 });
}
