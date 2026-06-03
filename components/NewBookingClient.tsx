"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { format, addDays, differenceInDays } from "date-fns";
import { BookingCalendar } from "./BookingCalendar";
import type { MonthlyRate } from "./BookingCalendar";

interface Room {
  id: string;
  name: string;
  capacity: number;
}

interface Property {
  id: string;
  name: string;
  rooms: Room[];
}

const inputCls = "glass-input w-full rounded-lg px-4 py-2.5 text-sm";
const labelCls = "block text-white/40 text-xs uppercase tracking-wider mb-1.5";

export function NewBookingClient({
  properties,
  role,
  userId,
}: {
  properties: Property[];
  role: string;
  userId: string;
}) {
  const router = useRouter();
  const isConcierge = role === "concierge";

  // Room & dates
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [nights, setNights] = useState(0);
  const [stayAmount, setStayAmount] = useState(0);
  const [cleaningAmount, setCleaningAmount] = useState(0);

  // Client
  const [clientFirstName, setClientFirstName] = useState("");
  const [clientLastName, setClientLastName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [notes, setNotes] = useState("");

  // Concierge fee
  const [conciergeFee, setConciergeFee] = useState(0);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // For night adjustment
  const lastRateRef = useRef<MonthlyRate | null>(null);
  const occupiedDaysRef = useRef<Set<string>>(new Set());

  const selectedRoom = properties
    .flatMap((p) => p.rooms)
    .find((r) => r.id === selectedRoomId);

  const ownerAmount = stayAmount + cleaningAmount;
  const feeAmount = isConcierge ? conciergeFee : 0;
  const totalAmount = ownerAmount + feeAmount;

  const fmt = (n: number) =>
    new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  const handleRangeSelect = (ci: Date, co: Date, n: number, rate: MonthlyRate | null) => {
    lastRateRef.current = rate;
    setCheckIn(ci);
    setCheckOut(co);
    setNights(n);
    setStayAmount((rate?.price ?? 0) * n);
    setCleaningAmount(rate?.cleaningFee ?? 0);
  };

  const adjustNights = (delta: number) => {
    if (!checkIn || !checkOut) return;
    const newCheckOut = addDays(checkOut, delta);
    if (differenceInDays(newCheckOut, checkIn) < 1) return;
    // Check the day being added/removed isn't occupied
    const dayToCheck = delta > 0 ? format(checkOut, "yyyy-MM-dd") : format(addDays(checkOut, -1), "yyyy-MM-dd");
    if (delta > 0 && occupiedDaysRef.current.has(dayToCheck)) return;
    const newNights = differenceInDays(newCheckOut, checkIn);
    const pricePerNight = lastRateRef.current?.price ?? 0;
    setCheckOut(newCheckOut);
    setNights(newNights);
    setStayAmount(pricePerNight * newNights);
  };

  const handleRoomChange = (roomId: string) => {
    setSelectedRoomId(roomId);
    setCheckIn(null);
    setCheckOut(null);
    setNights(0);
    setStayAmount(0);
    setCleaningAmount(0);
  };

  const handleSubmit = async () => {
    if (!selectedRoomId || !checkIn || !checkOut || !clientFirstName.trim()) {
      setError("Seleziona stanza, date e inserisci il nome del cliente.");
      return;
    }
    setSaving(true);
    setError(null);

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomId: selectedRoomId,
        clientFirstName: clientFirstName.trim(),
        clientLastName: clientLastName.trim() || null,
        clientPhone: clientPhone.trim() || null,
        clientEmail: clientEmail.trim() || null,
        guests,
        checkIn: format(checkIn, "yyyy-MM-dd"),
        checkOut: format(checkOut, "yyyy-MM-dd"),
        nights,
        stayAmount,
        cleaningAmount,
        ownerAmount,
        feeAmount,
        totalAmount,
        notes: notes.trim() || null,
        status: "in_trattativa",
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Errore nel salvataggio.");
      setSaving(false);
      return;
    }

    router.push("/bookings");
    router.refresh();
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white/90">Nuova Prenotazione</h1>
        <p className="text-white/40 text-sm mt-1">
          Seleziona stanza e date dal calendario, poi compila i dati cliente
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Block 1: Room & Calendar */}
        <div className="glass-card p-6">
          <h2 className="text-white/90 font-semibold mb-5 flex items-center gap-2">
            <span>🗓️</span> Stanza & Date
          </h2>

          <div className="mb-4">
            <label className={labelCls}>Seleziona Struttura / Stanza</label>
            <select
              value={selectedRoomId}
              onChange={(e) => handleRoomChange(e.target.value)}
              className={inputCls}
            >
              <option value="">Seleziona struttura e stanza...</option>
              {properties.map((p) =>
                p.rooms.map((r) => (
                  <option key={r.id} value={r.id}>
                    {p.name} — {r.name}
                  </option>
                ))
              )}
            </select>
            {properties.length === 0 && (
              <p className="text-[#D95D5D] text-xs mt-1">
                Nessuna proprietà disponibile.
              </p>
            )}
          </div>

          <BookingCalendar
            roomId={selectedRoomId || null}
            onRangeSelect={handleRangeSelect}
            forcedCheckIn={checkIn}
            forcedCheckOut={checkOut}
            onOccupiedDays={(days) => { occupiedDaysRef.current = days; }}
          />

          {/* Summary */}
          {checkIn && checkOut && (
            <div className="mt-4 bg-white/[0.04] border border-white/[0.07] rounded-xl p-4 space-y-2 text-sm">
              <div className="flex justify-between text-white/40">
                <span>Check-in</span>
                <span className="text-white/80">{format(checkIn, "dd/MM/yyyy")}</span>
              </div>
              <div className="flex justify-between text-white/40">
                <span>Check-out</span>
                <span className="text-white/80">{format(checkOut, "dd/MM/yyyy")}</span>
              </div>
              <div className="flex items-center justify-between text-white/40">
                <span>Notti</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => adjustNights(-1)}
                    disabled={nights <= 1}
                    className="w-6 h-6 rounded-md bg-white/[0.07] hover:bg-white/[0.14] disabled:opacity-30 text-white/70 flex items-center justify-center text-base leading-none transition-colors"
                  >
                    −
                  </button>
                  <span className="text-white/80 w-4 text-center font-medium">{nights}</span>
                  <button
                    onClick={() => adjustNights(1)}
                    className="w-6 h-6 rounded-md bg-white/[0.07] hover:bg-white/[0.14] text-white/70 flex items-center justify-center text-base leading-none transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between text-white/40">
                <span>Soggiorno</span>
                <span className="text-white/80">{fmt(stayAmount)}</span>
              </div>
              <div className="flex justify-between text-white/40">
                <span>Pulizie</span>
                <span className="text-white/80">{fmt(cleaningAmount)}</span>
              </div>
              {isConcierge && feeAmount > 0 && (
                <div className="flex justify-between text-white/40">
                  <span>La mia fee</span>
                  <span className="text-[#C9A75F]">{fmt(feeAmount)}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold border-t border-white/[0.07] pt-2">
                <span className="text-white/80">Totale cliente</span>
                <span className="text-[#C9A75F]">{fmt(totalAmount)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Block 2: Client data */}
        <div className="glass-card p-6">
          <h2 className="text-white/90 font-semibold mb-5 flex items-center gap-2">
            <span>👤</span> Dati Cliente
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Nome *</label>
                <input
                  type="text"
                  value={clientFirstName}
                  onChange={(e) => setClientFirstName(e.target.value)}
                  placeholder="Nome"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Cognome</label>
                <input
                  type="text"
                  value={clientLastName}
                  onChange={(e) => setClientLastName(e.target.value)}
                  placeholder="Cognome"
                  className={inputCls}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Telefono</label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+39 000 000 0000"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Email</label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="cliente@email.com"
                  className={inputCls}
                />
              </div>
            </div>

            <div>
              <label className={labelCls}>Numero ospiti *</label>
              <input
                type="number"
                min={1}
                max={selectedRoom?.capacity ?? 99}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className={inputCls}
              />
              {selectedRoom && (
                <p className="text-white/35 text-xs mt-1">
                  Capacità max: {selectedRoom.capacity}
                </p>
              )}
            </div>

            {/* ─── Concierge fee ──────────────────────────────── */}
            {isConcierge && (
              <div className="border border-[#C9A75F]/20 rounded-xl p-4 bg-[#C9A75F]/[0.04]">
                <label className="block text-[#C9A75F]/80 text-xs uppercase tracking-wider mb-1.5">
                  La Mia Commissione (€)
                </label>
                <input
                  type="number"
                  min={0}
                  value={conciergeFee}
                  onChange={(e) => setConciergeFee(Number(e.target.value) || 0)}
                  placeholder="0"
                  className={inputCls}
                />
                <p className="text-[#C9A75F]/50 text-[11px] mt-1.5">
                  La tua commissione viene aggiunta al prezzo finale del cliente
                </p>
              </div>
            )}

            <div>
              <label className={labelCls}>Note / Riferimenti extra</label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Valore concordato, note su pagamenti..."
                className={inputCls + " resize-none"}
              />
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-[#D95D5D]/8 border border-[#D95D5D]/25 rounded-lg text-[#D95D5D] text-sm">
          {error}
        </div>
      )}

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => router.back()}
          className="px-6 py-2.5 text-sm border border-white/10 text-white/50 hover:text-white/90 hover:border-white/25 rounded-lg transition-colors"
        >
          Annulla
        </button>
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="px-6 py-2.5 text-sm bg-[#C9A75F] hover:bg-[#E0C27A] disabled:opacity-50 text-[#070A0D] font-semibold rounded-lg transition-colors"
        >
          {saving ? "Salvataggio..." : "Salva Prenotazione"}
        </button>
      </div>
    </div>
  );
}
