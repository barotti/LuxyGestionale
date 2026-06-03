"use client";

import { useState, useRef } from "react";
import * as XLSX from "xlsx";

interface ImportRow {
  _idx: number;
  nome: string;
  cognome: string;
  proprieta: string;
  stanza: string;
  checkIn: string;
  checkOut: string;
  soggiorno: string;
  pulizie: string;
  fee: string;
  incassato: string;
  ospiti: string;
  stato: string;
  metodoPagamento: string;
  telefono: string;
  email: string;
  fonte: string;
  note: string;
  collaboratore: string;
}

interface ImportResult {
  row: number;
  success: boolean;
  error?: string;
}

const TEMPLATE_HEADERS = [
  "Nome *", "Cognome", "Proprietà *", "Stanza *",
  "Check-in *", "Check-out *", "Soggiorno *",
  "Pulizie", "Fee", "Incassato", "Ospiti", "Stato",
  "Metodo pagamento", "Telefono", "Email", "Fonte", "Note", "Collaboratore",
];

const COL_MAP: Record<string, keyof Omit<ImportRow, "_idx">> = {
  "nome *": "nome", "nome": "nome",
  "cognome": "cognome",
  "proprietà *": "proprieta", "proprietà": "proprieta", "proprieta *": "proprieta", "proprieta": "proprieta",
  "stanza *": "stanza", "stanza": "stanza",
  "check-in *": "checkIn", "check-in": "checkIn",
  "check-out *": "checkOut", "check-out": "checkOut",
  "soggiorno *": "soggiorno", "soggiorno": "soggiorno",
  "pulizie": "pulizie",
  "fee": "fee",
  "incassato": "incassato",
  "ospiti": "ospiti",
  "stato": "stato",
  "metodo pagamento": "metodoPagamento",
  "telefono": "telefono",
  "email": "email",
  "fonte": "fonte",
  "note": "note",
  "collaboratore": "collaboratore",
};

function downloadTemplate() {
  const exampleRow = [
    "Mario",           // Nome *
    "Rossi",           // Cognome
    "Villa Marina",    // Proprietà * — nome esatto come nel sistema
    "Deluxe Suite",    // Stanza * — nome esatto come nel sistema
    "10/06/2026",      // Check-in * (DD/MM/YYYY)
    "17/06/2026",      // Check-out * (DD/MM/YYYY)
    "1050",            // Soggiorno *
    "30",              // Pulizie
    "150",             // Fee
    "500",             // Incassato
    "2",               // Ospiti
    "prenotato",       // Stato
    "Banca",           // Metodo pagamento — nome esatto come nel sistema
    "+39 333 1234567", // Telefono
    "mario.rossi@email.com", // Email
    "Diretto",         // Fonte
    "Richiede camera silenziosa", // Note
    "",                // Collaboratore
  ];
  const ws = XLSX.utils.aoa_to_sheet([TEMPLATE_HEADERS, exampleRow]);
  ws["!cols"] = TEMPLATE_HEADERS.map(() => ({ wch: 22 }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Prenotazioni");
  XLSX.writeFile(wb, "template_import_prenotazioni.xlsx");
}

function blankRow(idx: number): ImportRow {
  return {
    _idx: idx, nome: "", cognome: "", proprieta: "", stanza: "",
    checkIn: "", checkOut: "", soggiorno: "", pulizie: "", fee: "",
    incassato: "", ospiti: "", stato: "", metodoPagamento: "",
    telefono: "", email: "", fonte: "", note: "", collaboratore: "",
  };
}

function parseSheet(file: File): Promise<ImportRow[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target!.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const raw = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, { raw: false, defval: "" });
        const rows: ImportRow[] = raw
          .map((r, idx) => {
            const row = blankRow(idx + 1);
            for (const [k, v] of Object.entries(r)) {
              const key = COL_MAP[k.toLowerCase().trim()];
              if (key) (row as Record<string, string>)[key] = String(v).trim();
            }
            return row;
          })
          .filter((r) => r.nome || r.proprieta);
        resolve(rows);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function validateRow(row: ImportRow): string | null {
  if (!row.nome.trim()) return "Nome mancante";
  if (!row.proprieta.trim()) return "Proprietà mancante";
  if (!row.stanza.trim()) return "Stanza mancante";
  if (!row.checkIn.trim()) return "Check-in mancante";
  if (!row.checkOut.trim()) return "Check-out mancante";
  if (!row.soggiorno.trim() || isNaN(parseFloat(row.soggiorno))) return "Soggiorno non valido";
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(row.checkIn.trim())) return "Check-in deve essere DD/MM/YYYY";
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(row.checkOut.trim())) return "Check-out deve essere DD/MM/YYYY";
  return null;
}

const secondaryBtn = "border border-white/10 text-white/50 hover:text-white/90 hover:border-white/25 px-4 py-2 rounded-lg text-sm transition-colors";
const primaryBtn = "bg-[#C9A75F] hover:bg-[#E0C27A] text-[#070A0D] font-semibold px-5 py-2 rounded-lg text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed";

export function ImportModal({ onClose, onImported }: { onClose: () => void; onImported: () => void }) {
  const [step, setStep] = useState<"upload" | "preview" | "importing" | "results">("upload");
  const [rows, setRows] = useState<ImportRow[]>([]);
  const [results, setResults] = useState<ImportResult[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setGlobalError(null);
    try {
      const parsed = await parseSheet(file);
      if (parsed.length === 0) {
        setGlobalError("Nessuna riga trovata nel file. Assicurati che le intestazioni corrispondano al template.");
        return;
      }
      setRows(parsed);
      setStep("preview");
    } catch {
      setGlobalError("Errore nella lettura del file. Assicurati che sia un file Excel (.xlsx) o CSV valido.");
    }
  }

  async function confirmImport() {
    setStep("importing");
    try {
      const res = await fetch("/api/bookings/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rows: rows
            .filter((_, i) => !validateRow(rows[i]))
            .map((r) => ({
              nome: r.nome,
              cognome: r.cognome || null,
              proprieta: r.proprieta,
              stanza: r.stanza,
              checkIn: r.checkIn,
              checkOut: r.checkOut,
              soggiorno: parseFloat(r.soggiorno) || 0,
              pulizie: parseFloat(r.pulizie) || 0,
              fee: parseFloat(r.fee) || 0,
              incassato: parseFloat(r.incassato) || 0,
              ospiti: parseInt(r.ospiti) || 1,
              stato: r.stato || "in_trattativa",
              metodoPagamento: r.metodoPagamento || null,
              telefono: r.telefono || null,
              email: r.email || null,
              fonte: r.fonte || null,
              note: r.note || null,
              collaboratore: r.collaboratore || null,
            })),
        }),
      });
      const data = await res.json();
      setResults(data.results ?? []);
      setStep("results");
      if ((data.results ?? []).some((r: ImportResult) => r.success)) onImported();
    } catch {
      setGlobalError("Errore di rete durante l'importazione.");
      setStep("preview");
    }
  }

  const validations = rows.map((r) => validateRow(r));
  const validCount = validations.filter((e) => !e).length;
  const invalidCount = validations.filter((e) => !!e).length;
  const successCount = results.filter((r) => r.success).length;
  const errorCount = results.filter((r) => !r.success).length;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="glass-modal p-6 w-full max-w-4xl max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between mb-5 flex-shrink-0">
          <div>
            <h2 className="text-white/90 font-semibold text-lg">Importa Prenotazioni</h2>
            <p className="text-white/35 text-xs mt-0.5">
              {step === "upload" && "Carica un file Excel o CSV con le prenotazioni"}
              {step === "preview" && `${rows.length} righe trovate · ${validCount} valide · ${invalidCount} con errori`}
              {step === "importing" && "Importazione in corso..."}
              {step === "results" && `Completato — ${successCount} importate, ${errorCount} errori`}
            </p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white/70 text-2xl leading-none transition-colors w-8 h-8 flex items-center justify-center">
            ×
          </button>
        </div>

        {globalError && (
          <div className="bg-[#D95D5D]/[0.08] border border-[#D95D5D]/25 text-[#D95D5D] text-sm rounded-lg px-4 py-2.5 mb-4 flex-shrink-0">
            {globalError}
          </div>
        )}

        {/* ── STEP: Upload ── */}
        {step === "upload" && (
          <div className="flex-1 flex flex-col gap-4">
            <div
              className={[
                "border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors flex-1 flex flex-col items-center justify-center",
                dragOver ? "border-[#C9A75F] bg-[#C9A75F]/[0.06]" : "border-white/15 hover:border-white/30 bg-white/[0.02]",
              ].join(" ")}
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
            >
              <svg className="mb-3 text-white/25" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
              <p className="text-white/60 text-sm font-medium mb-1">Trascina qui il file o clicca per selezionarlo</p>
              <p className="text-white/30 text-xs">Supporta .xlsx e .csv</p>
              <input ref={fileRef} type="file" accept=".xlsx,.csv,.xls" className="hidden"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }} />
            </div>

            {/* Template download */}
            <div className="flex items-center justify-between bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 flex-shrink-0">
              <div>
                <p className="text-white/65 text-sm font-medium">Non sai da dove iniziare?</p>
                <p className="text-white/30 text-xs mt-0.5">Scarica il template Excel con le colonne già configurate</p>
              </div>
              <button onClick={downloadTemplate}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#C9A75F]/30 bg-[#C9A75F]/[0.08] hover:bg-[#C9A75F]/[0.18] text-[#C9A75F] text-xs font-semibold transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Scarica Template
              </button>
            </div>

            {/* Column legend */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 flex-shrink-0">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Colonne richieste nel file</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: "Nome *", req: true }, { label: "Cognome", req: false },
                  { label: "Proprietà *", req: true }, { label: "Stanza *", req: true },
                  { label: "Check-in *", req: true }, { label: "Check-out *", req: true },
                  { label: "Soggiorno *", req: true }, { label: "Pulizie", req: false },
                  { label: "Fee", req: false }, { label: "Incassato", req: false },
                  { label: "Ospiti", req: false }, { label: "Stato", req: false },
                  { label: "Metodo pagamento", req: false }, { label: "Telefono", req: false },
                  { label: "Email", req: false }, { label: "Fonte", req: false },
                  { label: "Note", req: false }, { label: "Collaboratore", req: false },
                ].map((c) => (
                  <span key={c.label} className={`text-[11px] px-2 py-0.5 rounded border ${
                    c.req
                      ? "border-[#C9A75F]/30 bg-[#C9A75F]/[0.07] text-[#C9A75F]"
                      : "border-white/10 bg-white/[0.03] text-white/40"
                  }`}>
                    {c.label}
                  </span>
                ))}
              </div>
              <p className="text-white/25 text-[10px] mt-2">Le date devono essere nel formato DD/MM/YYYY · Proprietà e Stanza devono corrispondere esattamente ai nomi nel sistema</p>
            </div>
          </div>
        )}

        {/* ── STEP: Preview ── */}
        {step === "preview" && (
          <>
            <div className="flex-1 overflow-auto rounded-xl border border-white/[0.06] min-h-0">
              <table className="w-full text-xs min-w-[800px]">
                <thead className="sticky top-0 bg-[#151A24] z-10">
                  <tr className="border-b border-white/[0.06]">
                    {["#", "Cliente", "Proprietà / Stanza", "Check-in", "Check-out", "Soggiorno", "Fee", "Stato", "Validazione"].map((h) => (
                      <th key={h} className="px-3 py-2.5 text-left text-white/30 uppercase tracking-wider font-medium whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => {
                    const err = validations[i];
                    return (
                      <tr key={r._idx} className={["border-b border-white/[0.04] transition-colors", err ? "bg-[#D95D5D]/[0.04]" : "hover:bg-white/[0.02]"].join(" ")}>
                        <td className="px-3 py-2.5 text-white/25">{r._idx}</td>
                        <td className="px-3 py-2.5 text-white/75 font-medium whitespace-nowrap">{r.nome} {r.cognome}</td>
                        <td className="px-3 py-2.5 whitespace-nowrap">
                          <span className="text-white/55">{r.proprieta}</span>
                          {r.stanza && <span className="text-white/30 text-[10px] ml-1">/ {r.stanza}</span>}
                        </td>
                        <td className="px-3 py-2.5 text-white/50 whitespace-nowrap">{r.checkIn}</td>
                        <td className="px-3 py-2.5 text-white/50 whitespace-nowrap">{r.checkOut}</td>
                        <td className="px-3 py-2.5 text-[#C9A75F] whitespace-nowrap font-medium">€{r.soggiorno}</td>
                        <td className="px-3 py-2.5 text-white/35 whitespace-nowrap">{r.fee ? `€${r.fee}` : "—"}</td>
                        <td className="px-3 py-2.5 text-white/35 whitespace-nowrap">{r.stato || "in_trattativa"}</td>
                        <td className="px-3 py-2.5 whitespace-nowrap">
                          {err
                            ? <span className="text-[#D95D5D] font-medium">{err}</span>
                            : <span className="text-[#3BB273] font-medium">✓ OK</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {invalidCount > 0 && (
              <div className="mt-3 bg-[#C9A75F]/[0.06] border border-[#C9A75F]/20 rounded-lg px-4 py-2.5 text-[#C9A75F] text-xs flex-shrink-0">
                {invalidCount} {invalidCount === 1 ? "riga non valida verrà saltata" : "righe non valide verranno saltate"} — solo le {validCount} righe marcate ✓ verranno importate.
              </div>
            )}

            <div className="flex gap-3 mt-4 justify-between flex-shrink-0">
              <button onClick={() => { setRows([]); setStep("upload"); }} className={secondaryBtn}>
                ← Cambia file
              </button>
              <button onClick={confirmImport} disabled={validCount === 0} className={primaryBtn}>
                Importa {validCount} prenotazion{validCount === 1 ? "e" : "i"}
              </button>
            </div>
          </>
        )}

        {/* ── STEP: Importing ── */}
        {step === "importing" && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 border-2 border-[#C9A75F] border-t-transparent rounded-full animate-spin" />
            <p className="text-white/50 text-sm">Importazione in corso...</p>
          </div>
        )}

        {/* ── STEP: Results ── */}
        {step === "results" && (
          <>
            <div className="flex gap-4 mb-5 flex-shrink-0">
              <div className="glass-card p-4 flex-1 text-center">
                <p className="text-[#3BB273] text-3xl font-bold">{successCount}</p>
                <p className="text-white/35 text-xs mt-1 uppercase tracking-wider">Importate</p>
              </div>
              <div className={`glass-card p-4 flex-1 text-center ${errorCount === 0 ? "opacity-40" : ""}`}>
                <p className="text-[#D95D5D] text-3xl font-bold">{errorCount}</p>
                <p className="text-white/35 text-xs mt-1 uppercase tracking-wider">Errori</p>
              </div>
            </div>

            {errorCount > 0 && (
              <div className="flex-1 overflow-auto rounded-xl border border-white/[0.06] min-h-0">
                <table className="w-full text-xs">
                  <thead className="sticky top-0 bg-[#151A24]">
                    <tr className="border-b border-white/[0.06]">
                      {["Riga", "Risultato", "Dettaglio errore"].map((h) => (
                        <th key={h} className="px-4 py-2.5 text-left text-white/30 uppercase tracking-wider font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {results.filter((r) => !r.success).map((r) => (
                      <tr key={r.row} className="border-b border-white/[0.04] bg-[#D95D5D]/[0.03]">
                        <td className="px-4 py-2.5 text-white/50">{r.row}</td>
                        <td className="px-4 py-2.5 text-[#D95D5D] font-semibold">Errore</td>
                        <td className="px-4 py-2.5 text-white/50">{r.error}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="flex justify-end mt-4 flex-shrink-0">
              <button onClick={onClose} className={primaryBtn}>
                Chiudi
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
