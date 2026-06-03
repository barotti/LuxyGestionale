"use client";

import { useState, useMemo } from "react";
import * as XLSX from "xlsx";

interface AccontoLogEntry {
  id: string;
  amount: number;
  type: string;
  savedAt: string;
  paymentMethod: { id: string; name: string } | null;
  booking: {
    id: string;
    clientFirstName: string;
    clientLastName: string | null;
    checkIn: string;
    checkOut: string;
    nights: number;
    totalAmount: number;
    status: string;
    property: { id: string; name: string };
    room: { id: string; name: string };
  };
}

const TYPE_LABELS: Record<string, string> = {
  acconto: "Acconto",
  saldo: "Saldo",
};

const TYPE_COLORS: Record<string, string> = {
  acconto: "text-[#9B6FE8]",
  saldo: "text-[#3BB273]",
};

const STATUS_LABELS: Record<string, string> = {
  in_trattativa: "In Trattativa",
  bloccato: "Bloccato",
  prenotato: "Prenotato",
  acconto: "Acconto",
  finalizzato: "Finalizzato",
  cancellato: "Cancellato",
};

const STATUS_COLORS: Record<string, string> = {
  in_trattativa: "text-[#C9A75F]",
  bloccato: "text-[#4A90E2]",
  prenotato: "text-[#D95D5D]",
  acconto: "text-[#9B6FE8]",
  finalizzato: "text-[#3BB273]",
  cancellato: "text-[#A6A29A]",
};

function fmtDate(iso: string) {
  if (!iso) return "—";
  const [y, m, d] = iso.slice(0, 10).split("-");
  return `${d}/${m}/${y}`;
}

function fmtDateTime(iso: string) {
  const [y, m, d] = iso.slice(0, 10).split("-");
  const [h, min] = iso.slice(11, 16).split(":");
  return `${d}/${m}/${y} ${h}:${min}`;
}

function formatEur(n: number) {
  return `€${Number(n).toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function AccontiClient({
  logs: initial,
  properties,
}: {
  logs: AccontoLogEntry[];
  properties: { id: string; name: string }[];
}) {
  const [filterType, setFilterType] = useState<"" | "acconto" | "saldo">("");
  const [filterProperty, setFilterProperty] = useState("");
  const [filterClient, setFilterClient] = useState("");
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [filterDateTo, setFilterDateTo] = useState("");

  const filtered = useMemo(() => {
    return initial.filter((l) => {
      if (filterType && l.type !== filterType) return false;
      if (filterProperty && l.booking.property.id !== filterProperty) return false;
      if (filterClient) {
        const fullName = `${l.booking.clientFirstName} ${l.booking.clientLastName ?? ""}`.toLowerCase();
        if (!fullName.includes(filterClient.toLowerCase())) return false;
      }
      const savedDay = l.savedAt.slice(0, 10);
      if (filterDateFrom && savedDay < filterDateFrom) return false;
      if (filterDateTo && savedDay > filterDateTo) return false;
      return true;
    });
  }, [initial, filterType, filterProperty, filterClient, filterDateFrom, filterDateTo]);

  const totalFiltered = filtered.reduce((s, l) => s + l.amount, 0);
  const accontiFiltered = filtered.filter((l) => l.type === "acconto").reduce((s, l) => s + l.amount, 0);
  const saldiFiltered = filtered.filter((l) => l.type === "saldo").reduce((s, l) => s + l.amount, 0);

  const hasFilters = filterType || filterProperty || filterClient || filterDateFrom || filterDateTo;

  function exportToExcel() {
    const rows = filtered.map((l) => ({
      "Tipo": TYPE_LABELS[l.type] ?? l.type,
      "Cliente": `${l.booking.clientFirstName} ${l.booking.clientLastName ?? ""}`.trim(),
      "Proprietà": l.booking.property.name,
      "Stanza": l.booking.room.name,
      "Check-in": fmtDate(l.booking.checkIn),
      "Check-out": fmtDate(l.booking.checkOut),
      "Notti": l.booking.nights,
      "Stato prenotazione": STATUS_LABELS[l.booking.status] ?? l.booking.status,
      "Importo (€)": l.amount,
      "Metodo pagamento": l.paymentMethod?.name ?? "—",
      "Registrato il": fmtDateTime(l.savedAt),
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    // Column widths
    ws["!cols"] = [
      { wch: 10 }, { wch: 22 }, { wch: 20 }, { wch: 18 },
      { wch: 12 }, { wch: 12 }, { wch: 7 }, { wch: 18 },
      { wch: 13 }, { wch: 18 }, { wch: 18 },
    ];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Storico Acconti");
    const today = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `storico_acconti_${today}.xlsx`);
  }

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-4 gap-4 flex-wrap">
        <div>
          <h2 className="text-lg font-semibold text-white/85" style={{ fontFamily: "Georgia, serif" }}>
            Storico Acconti & Saldi
          </h2>
          <p className="text-white/35 text-xs mt-0.5">
            Ogni pagamento registrato — acconto iniziale e saldo finale
          </p>
        </div>
        <div className="flex items-center gap-5 flex-shrink-0 flex-wrap">
          {filtered.length > 0 && (
            <div className="flex items-center gap-5 text-sm">
              <div className="text-center">
                <p className="text-white/25 text-[10px] uppercase tracking-wider mb-0.5">Acconti</p>
                <p className="text-[#9B6FE8] font-semibold">{formatEur(accontiFiltered)}</p>
              </div>
              <div className="text-center">
                <p className="text-white/25 text-[10px] uppercase tracking-wider mb-0.5">Saldi</p>
                <p className="text-[#3BB273] font-semibold">{formatEur(saldiFiltered)}</p>
              </div>
              <div className="text-center">
                <p className="text-white/25 text-[10px] uppercase tracking-wider mb-0.5">Totale</p>
                <p className="text-[#C9A75F] font-semibold">{formatEur(totalFiltered)}</p>
              </div>
              <div className="text-center">
                <p className="text-white/25 text-[10px] uppercase tracking-wider mb-0.5">Voci</p>
                <p className="text-white/60 font-semibold">{filtered.length}</p>
              </div>
            </div>
          )}
          <button
            onClick={exportToExcel}
            disabled={filtered.length === 0}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#3BB273]/30 bg-[#3BB273]/[0.08] hover:bg-[#3BB273]/[0.18] text-[#3BB273] text-xs font-semibold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Esporta Excel
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-card p-3 mb-4 flex flex-wrap gap-2.5 items-center">
        <input
          type="text"
          className="glass-input rounded-lg px-3 py-1.5 text-sm min-w-[170px]"
          placeholder="Cerca cliente..."
          value={filterClient}
          onChange={(e) => setFilterClient(e.target.value)}
        />

        <select
          className="glass-input rounded-lg px-3 py-1.5 text-sm"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as "" | "acconto" | "saldo")}
        >
          <option value="">Tutti i tipi</option>
          <option value="acconto">Solo Acconti</option>
          <option value="saldo">Solo Saldi</option>
        </select>

        <select
          className="glass-input rounded-lg px-3 py-1.5 text-sm"
          value={filterProperty}
          onChange={(e) => setFilterProperty(e.target.value)}
        >
          <option value="">Tutte le proprietà</option>
          {properties.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>

        <div className="flex items-center gap-1.5 text-xs text-white/35">
          <span>Dal</span>
          <input
            type="date"
            className="glass-input rounded-lg px-2.5 py-1.5 text-sm"
            value={filterDateFrom}
            onChange={(e) => setFilterDateFrom(e.target.value)}
          />
          <span>al</span>
          <input
            type="date"
            className="glass-input rounded-lg px-2.5 py-1.5 text-sm"
            value={filterDateTo}
            onChange={(e) => setFilterDateTo(e.target.value)}
          />
        </div>

        {hasFilters && (
          <button
            onClick={() => { setFilterType(""); setFilterProperty(""); setFilterClient(""); setFilterDateFrom(""); setFilterDateTo(""); }}
            className="text-white/40 hover:text-white/70 text-sm px-3 py-1.5 transition-colors"
          >
            Azzera
          </button>
        )}
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="glass-card p-10 text-center">
          <p className="text-white/30 text-sm">
            {initial.length === 0 ? "Nessun acconto registrato" : "Nessun risultato per i filtri selezionati"}
          </p>
        </div>
      ) : (
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[900px]">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.01]">
                  {["Tipo", "Cliente", "Proprietà / Stanza", "Soggiorno", "Stato Prenot.", "Importo", "Metodo", "Registrato il"].map((h) => (
                    <th key={h} className="text-left text-white/30 text-xs uppercase tracking-wider px-4 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((l) => (
                  <tr
                    key={l.id}
                    className={[
                      "border-b border-white/[0.04] transition-colors",
                      l.type === "saldo" ? "bg-[#3BB273]/[0.02]" : "hover:bg-white/[0.02]",
                    ].join(" ")}
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`text-xs font-bold uppercase tracking-wide ${TYPE_COLORS[l.type] ?? "text-white/50"}`}>
                        {TYPE_LABELS[l.type] ?? l.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white/80 font-medium whitespace-nowrap">
                      {l.booking.clientFirstName} {l.booking.clientLastName ?? ""}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-white/70">{l.booking.property.name}</span>
                      <span className="text-white/35 text-xs block">{l.booking.room.name}</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-xs text-white/50">
                      {fmtDate(l.booking.checkIn)} → {fmtDate(l.booking.checkOut)}
                      <span className="text-[#C9A75F] block">{l.booking.nights} notti</span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`text-xs font-medium ${STATUS_COLORS[l.booking.status] ?? "text-white/50"}`}>
                        {STATUS_LABELS[l.booking.status] ?? l.booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`font-bold text-base ${TYPE_COLORS[l.type] ?? "text-white/70"}`}>
                        {formatEur(l.amount)}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-white/45 text-xs">
                      {l.paymentMethod?.name ?? "—"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-white/40 text-xs">
                      {fmtDateTime(l.savedAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
