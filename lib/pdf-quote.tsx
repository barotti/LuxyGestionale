import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image as PdfImage,
  StyleSheet,
} from "@react-pdf/renderer";

// ── Types ────────────────────────────────────────────────────────
export interface PdfData {
  booking: {
    clientFirstName: string;
    clientLastName?: string | null;
    checkIn: string;
    checkOut: string;
    nights: number;
    guests: number;
    stayAmount: number;
    cleaningAmount: number;
    totalAmount: number;
    notes?: string | null;
  };
  property: {
    name: string;
    location: string;
    description?: string | null;
    images: string[];
  };
  room: {
    name: string;
    capacity: number;
    description?: string | null;
    images: string[];
  };
}

// ── Helpers ──────────────────────────────────────────────────────
const MONTHS = [
  "gennaio","febbraio","marzo","aprile","maggio","giugno",
  "luglio","agosto","settembre","ottobre","novembre","dicembre",
];

function formatDate(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split("-");
  return `${parseInt(d)} ${MONTHS[parseInt(m) - 1]} ${y}`;
}

function formatEur(n: number): string {
  const rounded = Math.round(n);
  return `€${new Intl.NumberFormat("it-IT").format(rounded)}`;
}

function capacityLabel(cap: number): string {
  if (cap === 1) return "CAMERA SINGOLA";
  if (cap === 2) return "CAMERA DOPPIA";
  if (cap === 3) return "CAMERA TRIPLA";
  if (cap === 4) return "CAMERA QUADRUPLA";
  return `CAMERA ${cap} POSTI`;
}

// ── Styles ───────────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    paddingTop: 44,
    paddingHorizontal: 48,
    paddingBottom: 44,
    color: "#111111",
  },
  // Header
  headerRow: { flexDirection: "row", alignItems: "center" },
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: "#111111",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  logoCircleText: {
    fontSize: 5.5,
    color: "#111111",
    fontFamily: "Helvetica",
    textAlign: "center",
    lineHeight: 1.5,
    letterSpacing: 0.5,
  },
  logoRight: { flex: 1 },
  logoTitle: { fontSize: 20, letterSpacing: 7, fontFamily: "Helvetica", color: "#111111" },
  logoSub: { fontSize: 7, letterSpacing: 2.5, color: "#888888", marginTop: 2 },
  dividerGold: {
    borderBottomWidth: 1,
    borderBottomColor: "#C9A75F",
    borderBottomStyle: "solid",
    marginTop: 16,
    marginBottom: 28,
  },
  // Quote
  sectionTitle: { fontSize: 15, color: "#111111", letterSpacing: 0.5, marginBottom: 20 },
  infoGrid: { flexDirection: "row", flexWrap: "wrap", marginBottom: 24 },
  infoCell: { width: "50%", marginBottom: 18, paddingRight: 16 },
  infoLabel: { fontSize: 7, letterSpacing: 2, color: "#888888", marginBottom: 4 },
  infoValue: { fontSize: 12, color: "#111111" },
  costBox: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderStyle: "solid",
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  costRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  costRowLast: { flexDirection: "row", justifyContent: "space-between" },
  costLabel: { fontSize: 11, color: "#555555" },
  costValue: { fontSize: 11, color: "#111111" },
  totalDivider: {
    borderTopWidth: 1.5,
    borderTopColor: "#C9A75F",
    borderTopStyle: "solid",
    marginBottom: 12,
  },
  totalRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 6 },
  totalLabel: { fontSize: 22, fontFamily: "Helvetica-Bold", letterSpacing: 2, color: "#111111" },
  totalValue: { fontSize: 22, fontFamily: "Helvetica-Bold", color: "#111111" },
  perPersonRow: { flexDirection: "row", justifyContent: "flex-end", marginBottom: 22 },
  perPersonText: { fontSize: 9, color: "#888888" },
  perPersonValue: { fontSize: 9, fontFamily: "Helvetica-Bold", color: "#555555" },
  depositBox: {
    borderLeftWidth: 3,
    borderLeftColor: "#C9A75F",
    borderLeftStyle: "solid",
    paddingLeft: 12,
    paddingVertical: 4,
    marginBottom: 20,
  },
  depositBold: { fontSize: 9.5, fontFamily: "Helvetica-Bold", color: "#333333", marginBottom: 3 },
  depositText: { fontSize: 9.5, color: "#444444", lineHeight: 1.5 },
  noteBox: { backgroundColor: "#F8F6F2", borderRadius: 4, paddingVertical: 12, paddingHorizontal: 14 },
  noteText: { fontSize: 8.5, color: "#666666", lineHeight: 1.6 },
  // Gallery
  gallerySectionRow: { flexDirection: "row", alignItems: "center", marginBottom: 14 },
  galleryAccentBar: {
    borderLeftWidth: 3,
    borderLeftColor: "#C9A75F",
    borderLeftStyle: "solid",
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  gallerySectionTitle: { fontSize: 18, color: "#111111", marginRight: 10 },
  galleryBadge: { backgroundColor: "#F0ECE4", paddingVertical: 3, paddingHorizontal: 8, borderRadius: 2 },
  galleryBadgeText: { fontSize: 7, letterSpacing: 1.5, color: "#666666", fontFamily: "Helvetica-Bold" },
  galleryDesc: { fontSize: 10, color: "#555555", lineHeight: 1.65, marginBottom: 18 },
  photoRow: { flexDirection: "row", marginBottom: 8 },
  photo3Cell: { flex: 1, marginRight: 6 },
  photo3CellLast: { flex: 1 },
  photo2Cell: { flex: 1, marginRight: 6 },
  photo2CellLast: { flex: 1 },
  photo3: { height: 135, objectFit: "cover", borderRadius: 3 },
  photo2: { height: 172, objectFit: "cover", borderRadius: 3 },
  // Room
  roomHeaderRow: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  roomTitle: { fontSize: 22, color: "#111111" },
  roomBadge: { backgroundColor: "#F0ECE4", paddingVertical: 3, paddingHorizontal: 8, borderRadius: 2, marginLeft: 12 },
  roomBadgeText: { fontSize: 7, letterSpacing: 1.5, color: "#666666", fontFamily: "Helvetica-Bold" },
  photoCaptionCell: { flex: 1, marginRight: 6 },
  photoCaptionCellLast: { flex: 1 },
  photoCaption: { fontSize: 7, letterSpacing: 1.5, color: "#888888", textAlign: "center", marginTop: 5 },
});

// ── Header ───────────────────────────────────────────────────────
function PdfHeader({ subtitle }: { subtitle: string }) {
  return (
    <>
      <View style={s.headerRow}>
        <View style={s.logoCircle}>
          <Text style={s.logoCircleText}>{"LUXY\nEXP."}</Text>
        </View>
        <View style={s.logoRight}>
          <Text style={s.logoTitle}>L U X Y</Text>
          <Text style={s.logoSub}>{`EXPERIENCE  ·  ${subtitle}`}</Text>
        </View>
      </View>
      <View style={s.dividerGold} />
    </>
  );
}

// ── Quote Page ────────────────────────────────────────────────────
function QuotePage({ data }: { data: PdfData }) {
  const { booking, property, room } = data;
  const perPerson = booking.guests > 1 ? booking.totalAmount / booking.guests : 0;

  return (
    <Page size="A4" style={s.page}>
      <PdfHeader subtitle="PREVENTIVO" />

      <Text style={s.sectionTitle}>Dettagli Soggiorno</Text>

      <View style={s.infoGrid}>
        <View style={s.infoCell}>
          <Text style={s.infoLabel}>CLIENTE</Text>
          <Text style={s.infoValue}>{`${booking.clientFirstName} ${booking.clientLastName ?? ""}`.trim()}</Text>
        </View>
        <View style={s.infoCell}>
          <Text style={s.infoLabel}>{"PROPRIETÀ"}</Text>
          <Text style={s.infoValue}>{property.name}</Text>
        </View>
        <View style={s.infoCell}>
          <Text style={s.infoLabel}>STANZA</Text>
          <Text style={s.infoValue}>{room.name}</Text>
        </View>
        <View style={s.infoCell}>
          <Text style={s.infoLabel}>OSPITI</Text>
          <Text style={s.infoValue}>{`${booking.guests} person${booking.guests === 1 ? "a" : "e"}`}</Text>
        </View>
        <View style={s.infoCell}>
          <Text style={s.infoLabel}>CHECK-IN</Text>
          <Text style={s.infoValue}>{formatDate(booking.checkIn)}</Text>
        </View>
        <View style={s.infoCell}>
          <Text style={s.infoLabel}>CHECK-OUT</Text>
          <Text style={s.infoValue}>{formatDate(booking.checkOut)}</Text>
        </View>
        <View style={s.infoCell}>
          <Text style={s.infoLabel}>NOTTI</Text>
          <Text style={s.infoValue}>{String(booking.nights)}</Text>
        </View>
        <View style={s.infoCell}>
          <Text style={s.infoLabel}>LOCATION</Text>
          <Text style={s.infoValue}>{property.location}</Text>
        </View>
      </View>

      <View style={s.costBox}>
        <View style={s.costRow}>
          <Text style={s.costLabel}>{`Soggiorno (${booking.nights} nott${booking.nights === 1 ? "e" : "i"})`}</Text>
          <Text style={s.costValue}>{formatEur(booking.stayAmount)}</Text>
        </View>
        {booking.cleaningAmount > 0 && (
          <View style={s.costRowLast}>
            <Text style={s.costLabel}>Spese di pulizia</Text>
            <Text style={s.costValue}>{formatEur(booking.cleaningAmount)}</Text>
          </View>
        )}
      </View>

      <View style={s.totalDivider} />

      <View style={s.totalRow}>
        <Text style={s.totalLabel}>TOTALE</Text>
        <Text style={s.totalValue}>{formatEur(booking.totalAmount)}</Text>
      </View>

      {perPerson > 0 && (
        <View style={s.perPersonRow}>
          <Text style={s.perPersonText}>{`Quota per persona (${booking.guests} pax):  `}</Text>
          <Text style={s.perPersonValue}>{formatEur(perPerson)}</Text>
        </View>
      )}

      <View style={s.depositBox}>
        <Text style={s.depositBold}>Deposito cauzionale:</Text>
        <Text style={s.depositText}>{"Il deposito cauzionale sara’ concordato e da versare al check-in."}</Text>
      </View>

      <View style={s.noteBox}>
        <Text style={s.noteText}>
          {"Il preventivo include l’utilizzo esclusivo della struttura e di tutti i servizi indicati. Eventuali richieste aggiuntive (catering, trasporti, servizi extra) verranno quotate separatamente. Il preventivo e’ valido per 7 giorni dalla data di emissione."}
        </Text>
      </View>
    </Page>
  );
}

// ── Property Gallery Page ─────────────────────────────────────────
function PropertyGalleryPage({ data }: { data: PdfData }) {
  const { property } = data;
  const imgs = property.images.slice(0, 5);
  const row1 = imgs.slice(0, 3);
  const row2 = imgs.slice(3, 5);

  return (
    <Page size="A4" style={s.page}>
      <PdfHeader subtitle={property.name.toUpperCase()} />

      <View style={s.gallerySectionRow}>
        <View style={s.galleryAccentBar}>
          <Text style={s.gallerySectionTitle}>{"Proprietà"}</Text>
          <View style={s.galleryBadge}>
            <Text style={s.galleryBadgeText}>{property.location.toUpperCase()}</Text>
          </View>
        </View>
      </View>

      {!!property.description && (
        <Text style={s.galleryDesc}>{property.description}</Text>
      )}

      {row1.length > 0 && (
        <View style={s.photoRow}>
          {row1.map((src, i) => (
            <View key={i} style={i < row1.length - 1 ? s.photo3Cell : s.photo3CellLast}>
              <PdfImage src={src} style={s.photo3} />
            </View>
          ))}
        </View>
      )}

      {row2.length > 0 && (
        <View style={s.photoRow}>
          {row2.map((src, i) => (
            <View key={i} style={i < row2.length - 1 ? s.photo2Cell : s.photo2CellLast}>
              <PdfImage src={src} style={s.photo2} />
            </View>
          ))}
        </View>
      )}
    </Page>
  );
}

// ── Room Gallery Page ─────────────────────────────────────────────
function RoomGalleryPage({ data }: { data: PdfData }) {
  const { room } = data;
  const imgs = room.images.slice(0, 3);

  return (
    <Page size="A4" style={s.page}>
      <PdfHeader subtitle={room.name.toUpperCase()} />

      <View style={s.roomHeaderRow}>
        <Text style={s.roomTitle}>{room.name}</Text>
        <View style={s.roomBadge}>
          <Text style={s.roomBadgeText}>{capacityLabel(room.capacity)}</Text>
        </View>
      </View>

      {!!room.description && (
        <Text style={s.galleryDesc}>{room.description}</Text>
      )}

      {imgs.length > 0 && (
        <View style={s.photoRow}>
          {imgs.map((src, i) => (
            <View key={i} style={i < imgs.length - 1 ? s.photoCaptionCell : s.photoCaptionCellLast}>
              <PdfImage src={src} style={s.photo3} />
              <Text style={s.photoCaption}>{room.name.toUpperCase()}</Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  );
}

// ── Main Document ─────────────────────────────────────────────────
export function QuotePdfDocument({ data }: { data: PdfData }) {
  const hasProperty = data.property.images.length > 0 || !!data.property.description;
  const hasRoom = data.room.images.length > 0 || !!data.room.description;

  return (
    <Document>
      <QuotePage data={data} />
      {hasProperty ? <PropertyGalleryPage data={data} /> : null}
      {hasRoom ? <RoomGalleryPage data={data} /> : null}
    </Document>
  );
}
