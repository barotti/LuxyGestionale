"use client";

import { useState } from "react";
import { ImportModal } from "./ImportModal";

interface Booking {
  id: string;
  clientFirstName: string;
  clientLastName?: string | null;
  checkIn: string;
  checkOut: string;
  nights: number;
  stayAmount: number;
  cleaningAmount: number;
  ownerAmount: number;
  feeAmount: number;
  totalAmount: number;
  collectedAmount: number;
  status: string;
  notes?: string | null;
  property: { name: string };
  room: { name: string };
  paymentMethod?: { id: string; name: string } | null;
}

interface PaymentMethod {
  id: string;
  name: string;
}

interface EditModal {
  id: string;
  status: string;
  feeAmount: string;
  collectedAmount: string;
  existingCollectedAmount: number;
  paymentMethodId: string;
  notes: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  originalCheckIn: string;
  originalCheckOut: string;
  totalAmount: number;
}

interface CancelConfirm {
  id: string;
  label: string;
}

const STATUS_LABELS: Record<string, string> = {
  in_trattativa: "In Trattativa",
  bloccato: "Bloccato",
  prenotato: "Prenotato",
  acconto: "Acconto",
  finalizzato: "Finalizzato",
  cancellato: "Cancellato",
};

const STATUS_COLORS: Record<string, string> = {
  in_trattativa: "bg-[#C9A75F]/20 text-[#C9A75F] border-[#C9A75F]/30",
  bloccato: "bg-[#4A90E2]/20 text-[#4A90E2] border-[#4A90E2]/30",
  prenotato: "bg-[#D95D5D]/20 text-[#D95D5D] border-[#D95D5D]/30",
  acconto: "bg-[#9B6FE8]/20 text-[#9B6FE8] border-[#9B6FE8]/30",
  finalizzato: "bg-[#3BB273]/20 text-[#3BB273] border-[#3BB273]/30",
  cancellato: "bg-[#A6A29A]/20 text-[#A6A29A] border-[#A6A29A]/30",
};

const MONTHS = [
  "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
  "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre",
];

const inputClass =
  "glass-input w-full rounded-lg px-4 py-2.5 text-sm";
const labelClass = "block text-white/40 text-xs uppercase tracking-wider mb-1.5";
const primaryBtn =
  "bg-[#C9A75F] hover:bg-[#E0C27A] text-[#070A0D] font-semibold px-4 py-2 rounded-lg text-sm transition-colors";
const secondaryBtn =
  "border border-white/10 text-white/50 hover:text-white/90 hover:border-white/25 px-4 py-2 rounded-lg text-sm transition-colors";
const dangerBtn =
  "bg-[#D95D5D] hover:bg-[#C04A4A] text-white px-4 py-2 rounded-lg text-sm transition-colors font-semibold";

function formatDate(iso: string) {
  if (!iso) return "—";
  const [y, m, d] = iso.slice(0, 10).split("-");
  return `${d}/${m}/${y}`;
}

function shiftDateStr(dateStr: string, delta: number): string {
  const [y, mo, d] = dateStr.split("-").map(Number);
  const date = new Date(y, mo - 1, d);
  date.setDate(date.getDate() + delta);
  const yy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

function nightsBetween(from: string, to: string): number {
  const [fy, fm, fd] = from.split("-").map(Number);
  const [ty, tm, td] = to.split("-").map(Number);
  return Math.round(
    (new Date(ty, tm - 1, td).getTime() - new Date(fy, fm - 1, fd).getTime()) / 86400000
  );
}

function formatEur(n: number) {
  return `€${Number(n).toLocaleString("it-IT", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

export function BookingsClient({
  bookings: initial,
  paymentMethods,
}: {
  bookings: Booking[];
  paymentMethods: PaymentMethod[];
}) {
  const [bookings, setBookings] = useState<Booking[]>(initial);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [editModal, setEditModal] = useState<EditModal | null>(null);
  const [cancelConfirm, setCancelConfirm] = useState<CancelConfirm | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showImport, setShowImport] = useState(false);

  // ─── Filtering ────────────────────────────────────────────────────

  const filtered = bookings.filter((b) => {
    const fullName = `${b.clientFirstName} ${b.clientLastName ?? ""}`.toLowerCase();
    if (search && !fullName.includes(search.toLowerCase())) return false;
    if (filterStatus && b.status !== filterStatus) return false;
    if (filterYear) {
      const year = b.checkIn.slice(0, 4);
      if (year !== filterYear) return false;
    }
    if (filterMonth) {
      const month = String(parseInt(b.checkIn.slice(5, 7)));
      if (month !== filterMonth) return false;
    }
    return true;
  });

  // Build year options from bookings
  const years = Array.from(new Set(bookings.map((b) => b.checkIn.slice(0, 4)))).sort((a, b) => b.localeCompare(a));

  // ─── Edit ─────────────────────────────────────────────────────────

  function openEdit(b: Booking) {
    const ci = b.checkIn.slice(0, 10);
    const co = b.checkOut.slice(0, 10);
    const existing = b.collectedAmount;
    const remaining = Math.max(0, b.totalAmount - existing);
    setEditModal({
      id: b.id,
      status: b.status,
      feeAmount: String(b.feeAmount),
      // If there's already an acconto, pre-fill with the remaining amount (delta mode)
      // If nothing collected yet, start at 0 (cumulative mode)
      collectedAmount: existing > 0 ? String(remaining) : "0",
      existingCollectedAmount: existing,
      paymentMethodId: b.paymentMethod?.id ?? "",
      notes: b.notes ?? "",
      checkIn: ci,
      checkOut: co,
      nights: b.nights,
      originalCheckIn: ci,
      originalCheckOut: co,
      totalAmount: b.totalAmount,
    });
    setError(null);
  }

  function adjustModalNights(delta: number) {
    if (!editModal) return;
    const newCheckOut = shiftDateStr(editModal.checkOut, delta);
    const newNights = nightsBetween(editModal.checkIn, newCheckOut);
    if (newNights < 1) return;
    setEditModal({ ...editModal, checkOut: newCheckOut, nights: newNights });
  }

  async function saveEdit() {
    if (!editModal) return;
    setSaving(true);
    setError(null);
    try {
      // If dates changed, call reschedule first
      const datesChanged =
        editModal.checkIn !== editModal.originalCheckIn ||
        editModal.checkOut !== editModal.originalCheckOut;

      if (datesChanged) {
        const rescheduleRes = await fetch(`/api/bookings/${editModal.id}/reschedule`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ checkIn: editModal.checkIn, checkOut: editModal.checkOut }),
        });
        if (!rescheduleRes.ok) {
          const data = await rescheduleRes.json();
          setError(data.error || "Errore nel cambio date");
          return;
        }
      }

      const additionalAmount = parseFloat(editModal.collectedAmount) || 0;
      const finalCollected =
        editModal.existingCollectedAmount > 0
          ? editModal.existingCollectedAmount + additionalAmount
          : additionalAmount;

      const res = await fetch(`/api/bookings/${editModal.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: editModal.status,
          feeAmount: parseFloat(editModal.feeAmount) || 0,
          collectedAmount: finalCollected,
          paymentMethodId: editModal.paymentMethodId || null,
          notes: editModal.notes || null,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Errore nel salvataggio");
        return;
      }
      const updated = await res.json();
      const serialized = {
        ...updated,
        checkIn: updated.checkIn
          ? (typeof updated.checkIn === "string" ? updated.checkIn : new Date(updated.checkIn).toISOString()).slice(0, 10)
          : "",
        checkOut: updated.checkOut
          ? (typeof updated.checkOut === "string" ? updated.checkOut : new Date(updated.checkOut).toISOString()).slice(0, 10)
          : "",
        nights: editModal.nights,
      };
      setBookings((prev) => prev.map((b) => (b.id === editModal.id ? serialized : b)));
      setEditModal(null);
    } catch {
      setError("Errore di rete");
    } finally {
      setSaving(false);
    }
  }

  // ─── Cancel ───────────────────────────────────────────────────────

  async function cancelBooking() {
    if (!cancelConfirm) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/bookings/${cancelConfirm.id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Errore nell'annullamento");
        return;
      }
      setBookings((prev) =>
        prev.map((b) => (b.id === cancelConfirm.id ? { ...b, status: "cancellato" } : b))
      );
      setCancelConfirm(null);
    } catch {
      setError("Errore di rete");
    } finally {
      setSaving(false);
    }
  }

  // ─── Render ───────────────────────────────────────────────────────

  return (
    <div className="p-6 max-w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white/90" style={{ fontFamily: "Georgia, serif" }}>
            Prenotazioni
          </h1>
          <p className="text-white/40 text-sm mt-1">{filtered.length} prenotazioni</p>
        </div>
        <button
          onClick={() => setShowImport(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#4A90E2]/30 bg-[#4A90E2]/[0.08] hover:bg-[#4A90E2]/[0.18] text-[#4A90E2] text-sm font-semibold transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          Importa
        </button>
      </div>

      {/* Filters */}
      <div className="glass-card p-4 mb-6 flex flex-wrap gap-3">
        <input
          className={inputClass + " max-w-xs"}
          placeholder="Cerca cliente..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className={inputClass + " max-w-[180px]"}
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">Tutti gli stati</option>
          {Object.entries(STATUS_LABELS).map(([val, label]) => (
            <option key={val} value={val}>
              {label}
            </option>
          ))}
        </select>
        <select
          className={inputClass + " max-w-[130px]"}
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
        >
          <option value="">Anno</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select
          className={inputClass + " max-w-[150px]"}
          value={filterMonth}
          onChange={(e) => setFilterMonth(e.target.value)}
        >
          <option value="">Mese</option>
          {MONTHS.map((name, i) => (
            <option key={i + 1} value={String(i + 1)}>
              {name}
            </option>
          ))}
        </select>
        {(search || filterStatus || filterYear || filterMonth) && (
          <button
            onClick={() => { setSearch(""); setFilterStatus(""); setFilterYear(""); setFilterMonth(""); }}
            className="text-white/40 hover:text-white/80 text-sm px-3 py-2 transition-colors"
          >
            Azzera
          </button>
        )}
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                {["Cliente", "App./Stanza", "Date", "Soggiorno", "Pulizie", "Owner", "Fee", "Totale", "Incasso", "Stato", "Azioni"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left text-white/40 text-xs uppercase tracking-wider px-4 py-3 font-medium"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={11} className="text-center py-12 text-white/35">
                    Nessuna prenotazione trovata
                  </td>
                </tr>
              ) : (
                filtered.map((b) => (
                  <tr
                    key={b.id}
                    className="border-b border-white/[0.05] hover:bg-white/[0.04] transition-colors"
                  >
                    <td className="px-4 py-3 text-white/85 font-medium whitespace-nowrap">
                      {b.clientFirstName} {b.clientLastName ?? ""}
                    </td>
                    <td className="px-4 py-3 text-white/40 whitespace-nowrap">
                      <span className="text-white/80">{b.property.name}</span>
                      <br />
                      <span className="text-xs">{b.room.name}</span>
                    </td>
                    <td className="px-4 py-3 text-white/40 whitespace-nowrap text-xs">
                      {formatDate(b.checkIn)}
                      <br />
                      {formatDate(b.checkOut)}
                      <br />
                      <span className="text-[#C9A75F]">{b.nights} notti</span>
                    </td>
                    <td className="px-4 py-3 text-white/80 whitespace-nowrap">
                      {formatEur(b.stayAmount)}
                    </td>
                    <td className="px-4 py-3 text-white/45 whitespace-nowrap">
                      {formatEur(b.cleaningAmount)}
                    </td>
                    <td className="px-4 py-3 text-white/80 whitespace-nowrap">
                      {formatEur(b.ownerAmount)}
                    </td>
                    <td className="px-4 py-3 text-white/45 whitespace-nowrap">
                      {formatEur(b.feeAmount)}
                    </td>
                    <td className="px-4 py-3 text-[#C9A75F] font-semibold whitespace-nowrap">
                      {formatEur(b.totalAmount)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-[#3BB273]">{formatEur(b.collectedAmount)}</span>
                      {b.collectedAmount > 0 && b.collectedAmount < b.totalAmount && (
                        <span className="block text-xs text-[#D95D5D] mt-0.5">
                          -{formatEur(b.totalAmount - b.collectedAmount)}
                        </span>
                      )}
                      {b.paymentMethod && (
                        <span className="block text-xs text-white/35">{b.paymentMethod.name}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`inline-block border text-xs px-2 py-1 rounded-full ${
                          STATUS_COLORS[b.status] ?? "bg-[#A6A29A]/20 text-[#A6A29A] border-[#A6A29A]/30"
                        }`}
                      >
                        {STATUS_LABELS[b.status] ?? b.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openEdit(b)}
                          className="text-white/45 hover:text-white/85 text-xs px-2 py-1 border border-white/10 hover:border-white/30 rounded transition-colors"
                        >
                          Modifica
                        </button>
                        <a
                          href={`/api/bookings/${b.id}/quote-pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#C9A75F] hover:text-[#E0C27A] text-xs px-2 py-1 border border-[#C9A75F]/30 hover:border-[#C9A75F]/60 rounded transition-colors"
                        >
                          PDF
                        </a>
                        {b.status !== "cancellato" && (
                          <button
                            onClick={() => {
                              setError(null);
                              setCancelConfirm({
                                id: b.id,
                                label: `${b.clientFirstName} ${b.clientLastName ?? ""}`,
                              });
                            }}
                            className="text-[#D95D5D] hover:text-[#C04A4A] text-xs px-2 py-1 border border-[#D95D5D]/25 hover:border-[#D95D5D]/60 rounded transition-colors"
                          >
                            Cancella
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── Edit Modal ─── */}
      {editModal !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="glass-modal p-6 w-full max-w-md">
            <h2 className="text-white/90 font-semibold text-lg mb-5">Modifica Prenotazione</h2>
            {error && (
              <div className="bg-[#D95D5D]/8 border border-[#D95D5D]/25 text-[#D95D5D] text-sm rounded-lg px-4 py-2.5 mb-4">
                {error}
              </div>
            )}
            <div className="space-y-4">
              {/* Date adjustment */}
              <div className="bg-white/[0.03] border border-white/8 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/40 text-xs uppercase tracking-wider">Date soggiorno</span>
                  {(editModal.checkIn !== editModal.originalCheckIn ||
                    editModal.checkOut !== editModal.originalCheckOut) && (
                    <span className="text-[#C9A75F] text-[10px] px-1.5 py-0.5 rounded bg-[#C9A75F]/10 border border-[#C9A75F]/20">
                      modificate
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-white/30 text-[10px] mb-1">Check-in</label>
                    <input
                      type="date"
                      className={inputClass + " text-xs"}
                      value={editModal.checkIn}
                      onChange={(e) => {
                        const newCi = e.target.value;
                        const newNights = nightsBetween(newCi, editModal.checkOut);
                        if (newNights >= 1) setEditModal({ ...editModal, checkIn: newCi, nights: newNights });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-white/30 text-[10px] mb-1">Check-out</label>
                    <input
                      type="date"
                      className={inputClass + " text-xs"}
                      value={editModal.checkOut}
                      onChange={(e) => {
                        const newCo = e.target.value;
                        const newNights = nightsBetween(editModal.checkIn, newCo);
                        if (newNights >= 1) setEditModal({ ...editModal, checkOut: newCo, nights: newNights });
                      }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/35 text-xs">Notti</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => adjustModalNights(-1)}
                      disabled={editModal.nights <= 1}
                      className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] disabled:opacity-30 text-white/60 flex items-center justify-center text-base transition-colors"
                    >
                      −
                    </button>
                    <span className="text-white/85 font-semibold w-5 text-center">{editModal.nights}</span>
                    <button
                      onClick={() => adjustModalNights(1)}
                      className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white/60 flex items-center justify-center text-base transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClass}>Stato</label>
                <select
                  className={inputClass}
                  value={editModal.status}
                  onChange={(e) => setEditModal({ ...editModal, status: e.target.value })}
                >
                  {Object.entries(STATUS_LABELS).map(([val, label]) => (
                    <option key={val} value={val}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Fee (€)</label>
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  className={inputClass}
                  value={editModal.feeAmount}
                  onChange={(e) => setEditModal({ ...editModal, feeAmount: e.target.value })}
                />
              </div>
              <div>
                {editModal.existingCollectedAmount > 0 ? (
                  <>
                    {/* Existing acconto: show read-only line + delta input */}
                    <div className="flex items-center justify-between mb-3 bg-[#3BB273]/[0.05] border border-[#3BB273]/15 rounded-lg px-3 py-2">
                      <span className="text-white/40 text-xs uppercase tracking-wider">Già incassato</span>
                      <span className="text-[#3BB273] font-semibold text-sm">{formatEur(editModal.existingCollectedAmount)}</span>
                    </div>
                    <label className={labelClass}>Aggiungi pagamento (€)</label>
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      className={inputClass}
                      placeholder={`Rimanenza: ${formatEur(editModal.totalAmount - editModal.existingCollectedAmount)}`}
                      value={editModal.collectedAmount}
                      onChange={(e) => setEditModal({ ...editModal, collectedAmount: e.target.value })}
                    />
                    {/* Live breakdown */}
                    {(() => {
                      const additional = parseFloat(editModal.collectedAmount) || 0;
                      const finalCollected = editModal.existingCollectedAmount + additional;
                      const remaining = editModal.totalAmount - finalCollected;
                      return (
                        <div className="mt-2 bg-[#9B6FE8]/[0.06] border border-[#9B6FE8]/20 rounded-lg px-3 py-2.5 text-xs space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-white/35">Già incassato</span>
                            <span className="text-[#3BB273]/70 font-medium">{formatEur(editModal.existingCollectedAmount)}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white/35">Stai aggiungendo</span>
                            <span className="text-[#9B6FE8] font-semibold">{formatEur(additional)}</span>
                          </div>
                          <div className="border-t border-white/[0.06] pt-1.5 flex items-center justify-between">
                            <span className="text-white/50 font-medium">Totale incassato</span>
                            <span className="text-white/80 font-bold">{formatEur(finalCollected)}</span>
                          </div>
                          {remaining > 0.01 ? (
                            <div className="flex items-center justify-between">
                              <span className="text-white/35">Ancora mancante</span>
                              <span className="text-[#D95D5D] font-bold">{formatEur(remaining)}</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between">
                              <span className="text-[#3BB273]/70 text-xs">Saldato completamente</span>
                              <span className="text-[#3BB273] font-semibold text-sm">✓</span>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </>
                ) : (
                  <>
                    <label className={labelClass}>Incassato (€)</label>
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      className={inputClass}
                      value={editModal.collectedAmount}
                      onChange={(e) => setEditModal({ ...editModal, collectedAmount: e.target.value })}
                    />
                    {/* Acconto breakdown for first payment */}
                    {(() => {
                      const collected = parseFloat(editModal.collectedAmount) || 0;
                      const remaining = editModal.totalAmount - collected;
                      if (collected <= 0 || collected >= editModal.totalAmount) return null;
                      return (
                        <div className="mt-2 bg-[#9B6FE8]/[0.06] border border-[#9B6FE8]/20 rounded-lg px-3 py-2.5 flex items-center justify-between gap-4 text-xs">
                          <div className="text-center">
                            <p className="text-white/35 uppercase tracking-wider mb-0.5">Totale</p>
                            <p className="text-white/80 font-semibold">{formatEur(editModal.totalAmount)}</p>
                          </div>
                          <div className="text-white/15">—</div>
                          <div className="text-center">
                            <p className="text-white/35 uppercase tracking-wider mb-0.5">Acconto</p>
                            <p className="text-[#3BB273] font-semibold">{formatEur(collected)}</p>
                          </div>
                          <div className="text-white/15">=</div>
                          <div className="text-center">
                            <p className="text-white/35 uppercase tracking-wider mb-0.5">Mancante</p>
                            <p className="text-[#D95D5D] font-bold">{formatEur(remaining)}</p>
                          </div>
                        </div>
                      );
                    })()}
                  </>
                )}
              </div>
              <div>
                <label className={labelClass}>Metodo di Pagamento</label>
                <select
                  className={inputClass}
                  value={editModal.paymentMethodId}
                  onChange={(e) => setEditModal({ ...editModal, paymentMethodId: e.target.value })}
                >
                  <option value="">— Nessuno —</option>
                  {paymentMethods.map((pm) => (
                    <option key={pm.id} value={pm.id}>
                      {pm.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Note</label>
                <textarea
                  className={inputClass + " resize-none h-20"}
                  placeholder="Note aggiuntive..."
                  value={editModal.notes}
                  onChange={(e) => setEditModal({ ...editModal, notes: e.target.value })}
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6 justify-end">
              <button onClick={() => { setEditModal(null); setError(null); }} className={secondaryBtn}>
                Annulla
              </button>
              <button onClick={saveEdit} disabled={saving} className={primaryBtn}>
                {saving ? "Salvataggio..." : "Salva"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Import Modal ─── */}
      {showImport && (
        <ImportModal
          onClose={() => setShowImport(false)}
          onImported={() => { setShowImport(false); window.location.reload(); }}
        />
      )}

      {/* ─── Cancel Confirm Modal ─── */}
      {cancelConfirm !== null && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="glass-modal p-6 w-full max-w-sm">
            <h2 className="text-white/90 font-semibold text-lg mb-2">Annulla prenotazione</h2>
            <p className="text-white/50 text-sm mb-4">
              Annullare la prenotazione di{" "}
              <span className="text-white/90 font-medium">{cancelConfirm.label}</span>?{" "}
              Lo stato verrà impostato a <span className="text-white/50 font-medium">Cancellato</span>.
            </p>
            {error && (
              <div className="bg-[#D95D5D]/8 border border-[#D95D5D]/25 text-[#D95D5D] text-sm rounded-lg px-4 py-2.5 mb-4">
                {error}
              </div>
            )}
            <div className="flex gap-3 justify-end">
              <button onClick={() => { setCancelConfirm(null); setError(null); }} className={secondaryBtn}>
                Indietro
              </button>
              <button onClick={cancelBooking} disabled={saving} className={dangerBtn}>
                {saving ? "Annullamento..." : "Conferma Annullamento"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
