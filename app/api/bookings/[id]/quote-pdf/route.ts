import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { renderToBuffer } from "@react-pdf/renderer";
import { QuotePdfDocument, PdfData } from "@/lib/pdf-quote";
import { readFile } from "fs/promises";
import { join } from "path";
import React from "react";

export const dynamic = "force-dynamic";

async function resolveImage(url: string): Promise<string | null> {
  if (!url) return null;
  if (url.startsWith("/uploads/")) {
    try {
      const filePath = join(process.cwd(), "public", url.replace(/^\//, ""));
      const buf = await readFile(filePath);
      const ext = url.split(".").pop()?.toLowerCase() ?? "jpg";
      const mime =
        ext === "png" ? "image/png"
        : ext === "webp" ? "image/webp"
        : "image/jpeg";
      return `data:${mime};base64,${buf.toString("base64")}`;
    } catch {
      return null;
    }
  }
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return null;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  const booking = await prisma.booking.findUnique({
    where: { id },
    include: { property: true, room: true },
  });

  if (!booking) return NextResponse.json({ error: "Prenotazione non trovata" }, { status: 404 });

  const [propertyImages, roomImages] = await Promise.all([
    Promise.all(((booking.property.images ?? []) as string[]).map(resolveImage)),
    Promise.all(((booking.room.images ?? []) as string[]).map(resolveImage)),
  ]);

  const pdfData: PdfData = {
    booking: {
      clientFirstName: booking.clientFirstName,
      clientLastName: booking.clientLastName,
      checkIn: booking.checkIn instanceof Date
        ? booking.checkIn.toISOString().slice(0, 10)
        : String(booking.checkIn).slice(0, 10),
      checkOut: booking.checkOut instanceof Date
        ? booking.checkOut.toISOString().slice(0, 10)
        : String(booking.checkOut).slice(0, 10),
      nights: booking.nights,
      guests: booking.guests,
      stayAmount: booking.stayAmount,
      cleaningAmount: booking.cleaningAmount,
      totalAmount: booking.totalAmount,
      notes: booking.notes,
    },
    property: {
      name: booking.property.name,
      location: booking.property.location,
      description: booking.property.description,
      images: propertyImages.filter(Boolean) as string[],
    },
    room: {
      name: booking.room.name,
      capacity: booking.room.capacity,
      description: booking.room.description,
      images: roomImages.filter(Boolean) as string[],
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buffer = await renderToBuffer(
    React.createElement(QuotePdfDocument, { data: pdfData }) as any
  );

  const clientSlug = `${booking.clientFirstName}${booking.clientLastName ? `-${booking.clientLastName}` : ""}`.replace(/\s+/g, "-");

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="preventivo-${clientSlug}.pdf"`,
    },
  });
}
