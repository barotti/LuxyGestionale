"use client";

import { useState } from "react";

interface PaymentMethod {
  id: string;
  name: string;
}

interface CommissionBooking {
  id: string;
  clientFirstName: string;
  clientLastName: string | null;
  checkIn: string;
  checkOut: string;
  nights: number;
  feeAmount: number;
  status: string;
  collaboratorPaid: boolean;
  collaboratorPaidAt: string | null;
  collaboratorPaymentMethod: PaymentMethod | null;
  property: { id: string; name: string };
  room: { id: string; name: string };
  collaborator: { id: string; nickname: string } | null;
}

const STATUS_LABELS: Record<string, string> = {
  in_trattativa: "In Trattativa",
  bloccato: "Bloccato",
  prenotato: "Prenotato",
  finalizzato: "Finalizzato",
  cancellato: "Cancellato",
};

const STATUS_COLORS: Record<string, string> = {
  in_trattativa: "text-[#C9A75F]",
  bloccato: "text-[#4A90E2]",
  prenotato: "text-[#D95D5D]",
  finalizzato: "text-[#3BB273]",
  cancellato: "text-[#A6A29A]",
};

function formatDate(iso: string) {
  if (!iso) return "—";
  const [y, m, d] = iso.slice(0, 10).split("-");
  return `${d}/${m}/${y}`;
}

function formatEur(n: number) {
  return `€${Number(n).toLocaleString("it-IT", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

// Group bookings by collaborator
function groupByCollaborator(bookings: CommissionBooking[]) {
  const map = new Map<string, { nickname: string; bookings: CommissionBooking[] }>();
  for (const b of bookings) {
    if (!b.collaborator) continue;
    const key = b.collaborator.id;
    if (!map.has(key)) map.set(key, { nickname: b.collaborator.nickname, bookings: [] });
    map.get(key)!.bookings.push(b);
  }
  return [...map.values()].sort((a, b) => a.nickname.localeCompare(b.nickname));
}

export function CommissionsClient({
  bookings: initial,
  paymentMethods,
  role = "admin",
}: {
  bookings: CommissionBooking[];
  paymentMethods: PaymentMethod[];
  role?: string;
}) {
  const [bookings, setBookings] = useState<CommissionBooking[]>(initial);
  const [filterPaid, setFilterPaid] = useState<"" | "unpaid" | "paid">("");
  const [filterCollaborator, setFilterCollaborator] = useState("");
  const [saving, setSaving] = useState<string | null>(null);
  const [pendingDate, setPendingDate] = useState<Record<string, string>>({});
  const [pendingMethod, setPendingMethod] = useState<Record<string, string>>({});

  // Collaborator list for filter
  const collaborators = Array.from(
    new Map(
      bookings
        .filter((b) => b.collaborator)
        .map((b) => [b.collaborator!.id, b.collaborator!.nickname])
    ).entries()
  ).sort((a, b) => a[1].localeCompare(b[1]));

  const filtered = bookings.filter((b) => {
    if (filterPaid === "paid" && !b.collaboratorPaid) return false;
    if (filterPaid === "unpaid" && b.collaboratorPaid) return false;
    if (filterCollaborator && b.collaborator?.id !== filterCollaborator) return false;
    return true;
  });

  const groups = groupByCollaborator(filtered);

  // Stats
  const totalFee = bookings.reduce((s, b) => s + b.feeAmount, 0);
  const totalPaid = bookings.filter((b) => b.collaboratorPaid).reduce((s, b) => s + b.feeAmount, 0);
  const totalPending = totalFee - totalPaid;

  async function markPaid(bookingId: string, paid: boolean) {
    const paidAt = paid ? (pendingDate[bookingId] || today()) : null;
    const paymentMethodId = paid ? (pendingMethod[bookingId] || null) : null;
    setSaving(bookingId);
    try {
      const res = await fetch(`/api/bookings/${bookingId}/commission`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paid, paidAt, paymentMethodId }),
      });
      if (res.ok) {
        const data = await res.json();
        const method = paymentMethodId
          ? paymentMethods.find((m) => m.id === paymentMethodId) ?? null
          : null;
        setBookings((prev) =>
          prev.map((b) =>
            b.id === bookingId
              ? {
                  ...b,
                  collaboratorPaid: data.collaboratorPaid,
                  collaboratorPaidAt: data.collaboratorPaidAt,
                  collaboratorPaymentMethod: paid ? (method ?? null) : null,
                }
              : b
          )
        );
      }
    } finally {
      setSaving(null);
    }
  }

  return (
    <div className="p-6 max-w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white/90" style={{ fontFamily: "Georgia, serif" }}>
          Commissioni Concierge
        </h1>
        <p className="text-white/40 text-sm mt-1">Traccia i pagamenti delle fee ai concierge</p>
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="glass-card p-4">
          <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Totale Fee</p>
          <p className="text-[#C9A75F] text-2xl font-bold">{formatEur(totalFee)}</p>
        </div>
        <div className="glass-card p-4">
          <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Già Pagato</p>
          <p className="text-[#3BB273] text-2xl font-bold">{formatEur(totalPaid)}</p>
        </div>
        <div className="glass-card p-4">
          <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Da Pagare</p>
          <p className="text-[#D95D5D] text-2xl font-bold">{formatEur(totalPending)}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-card p-4 mb-6 flex flex-wrap gap-3">
        {role !== "concierge" && (
          <select
            className="glass-input rounded-lg px-3 py-2 text-sm max-w-[180px]"
            value={filterCollaborator}
            onChange={(e) => setFilterCollaborator(e.target.value)}
          >
            <option value="">Tutti i concierge</option>
            {collaborators.map(([id, nick]) => (
              <option key={id} value={id}>{nick}</option>
            ))}
          </select>
        )}
        <select
          className="glass-input rounded-lg px-3 py-2 text-sm max-w-[160px]"
          value={filterPaid}
          onChange={(e) => setFilterPaid(e.target.value as "" | "paid" | "unpaid")}
        >
          <option value="">Tutti gli stati</option>
          <option value="unpaid">Da pagare</option>
          <option value="paid">Già pagati</option>
        </select>
        {(filterPaid || filterCollaborator) && (
          <button
            onClick={() => { setFilterPaid(""); setFilterCollaborator(""); }}
            className="text-white/40 hover:text-white/80 text-sm px-3 py-2 transition-colors"
          >
            Azzera
          </button>
        )}
      </div>

      {/* Groups */}
      {groups.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <p className="text-white/30 text-lg mb-1">Nessuna commissione</p>
          <p className="text-white/20 text-sm">Le commissioni appaiono quando i concierge creano prenotazioni con una fee.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {groups.map((group) => {
            const groupTotal = group.bookings.reduce((s, b) => s + b.feeAmount, 0);
            const groupPaid = group.bookings.filter((b) => b.collaboratorPaid).reduce((s, b) => s + b.feeAmount, 0);
            const groupPending = groupTotal - groupPaid;

            return (
              <div key={group.nickname} className="glass-card overflow-hidden">
                {/* Group header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#C9A75F]/10 border border-[#C9A75F]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A75F] text-sm font-bold uppercase">{group.nickname[0]}</span>
                    </div>
                    <div>
                      <span className="text-white/85 font-semibold">{group.nickname}</span>
                      <span className="text-white/35 text-xs ml-2">{group.bookings.length} prenotazioni</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-[#3BB273]">Pagato: {formatEur(groupPaid)}</span>
                    <span className="text-[#D95D5D]">Dovuto: {formatEur(groupPending)}</span>
                    <span className="text-white/50 font-semibold">Tot: {formatEur(groupTotal)}</span>
                  </div>
                </div>

                {/* Bookings rows */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[700px]">
                    <thead>
                      <tr className="border-b border-white/[0.05]">
                        {["Cliente", "Proprietà / Stanza", "Date", "Stato", "Fee", ...(role !== "concierge" ? ["Pagamento", "Azione"] : ["Stato pagamento"])].map((h) => (
                          <th key={h} className="text-left text-white/30 text-xs uppercase tracking-wider px-4 py-2.5 font-medium">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {group.bookings.map((b) => (
                        <tr
                          key={b.id}
                          className={[
                            "border-b border-white/[0.04] transition-colors",
                            b.collaboratorPaid ? "bg-[#3BB273]/[0.03]" : "hover:bg-white/[0.03]",
                          ].join(" ")}
                        >
                          <td className="px-4 py-3 text-white/80 whitespace-nowrap font-medium">
                            {b.clientFirstName} {b.clientLastName ?? ""}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="text-white/70">{b.property.name}</span>
                            <span className="text-white/35 text-xs block">{b.room.name}</span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-xs text-white/50">
                            {formatDate(b.checkIn)} → {formatDate(b.checkOut)}
                            <span className="text-[#C9A75F] block">{b.nights} notti</span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`text-xs font-medium ${STATUS_COLORS[b.status] ?? "text-white/50"}`}>
                              {STATUS_LABELS[b.status] ?? b.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-[#C9A75F] font-semibold">
                            {formatEur(b.feeAmount)}
                          </td>
                          {role !== "concierge" ? (
                            <>
                              <td className="px-4 py-3">
                                {b.collaboratorPaid ? (
                                  <div className="space-y-0.5">
                                    <span className="text-[#3BB273] text-xs flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#3BB273] inline-block flex-shrink-0" />
                                      {b.collaboratorPaidAt ? formatDate(b.collaboratorPaidAt) : "—"}
                                    </span>
                                    {b.collaboratorPaymentMethod && (
                                      <span className="text-white/35 text-[11px] pl-3 block">
                                        {b.collaboratorPaymentMethod.name}
                                      </span>
                                    )}
                                  </div>
                                ) : (
                                  <div className="flex flex-col gap-1.5 min-w-[220px]">
                                    <input
                                      type="date"
                                      className="glass-input rounded px-2 py-1 text-xs text-white/60"
                                      value={pendingDate[b.id] || ""}
                                      onChange={(e) => setPendingDate((prev) => ({ ...prev, [b.id]: e.target.value }))}
                                    />
                                    <select
                                      className="glass-input rounded px-2 py-1 text-xs text-white/60 bg-[#10141C]"
                                      value={pendingMethod[b.id] || ""}
                                      onChange={(e) => setPendingMethod((prev) => ({ ...prev, [b.id]: e.target.value }))}
                                    >
                                      <option value="">— Metodo pagamento —</option>
                                      {paymentMethods.map((pm) => (
                                        <option key={pm.id} value={pm.id}>{pm.name}</option>
                                      ))}
                                    </select>
                                  </div>
                                )}
                              </td>
                              <td className="px-4 py-3 whitespace-nowrap">
                                {b.collaboratorPaid ? (
                                  <button
                                    onClick={() => markPaid(b.id, false)}
                                    disabled={saving === b.id}
                                    className="text-[#A6A29A] hover:text-[#D95D5D] text-xs px-2.5 py-1 border border-white/10 hover:border-[#D95D5D]/40 rounded-lg transition-colors"
                                  >
                                    {saving === b.id ? "..." : "Annulla"}
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => markPaid(b.id, true)}
                                    disabled={saving === b.id}
                                    className="text-[#3BB273] hover:text-white bg-[#3BB273]/10 hover:bg-[#3BB273]/25 border border-[#3BB273]/25 hover:border-[#3BB273]/60 text-xs px-2.5 py-1 rounded-lg transition-colors font-semibold"
                                  >
                                    {saving === b.id ? "..." : "✓ Pagato"}
                                  </button>
                                )}
                              </td>
                            </>
                          ) : (
                            <td className="px-4 py-3 whitespace-nowrap">
                              {b.collaboratorPaid ? (
                                <span className="text-[#3BB273] text-xs flex items-center gap-1.5 font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#3BB273] inline-block" />
                                  Pagato {b.collaboratorPaidAt ? formatDate(b.collaboratorPaidAt) : ""}
                                  {b.collaboratorPaymentMethod && (
                                    <span className="text-white/35 font-normal ml-1">· {b.collaboratorPaymentMethod.name}</span>
                                  )}
                                </span>
                              ) : (
                                <span className="text-[#C9A75F] text-xs font-medium">In attesa</span>
                              )}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
