"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Check, Loader2 } from "lucide-react";

const PLANS = [
  {
    id: "base" as const,
    name: "Base",
    price: "€49",
    period: "/ mese",
    billing: "Fatturato mensilmente",
    color: "#4A90E2",
    features: [
      "Proprietà e stanze illimitate",
      "Prenotazioni illimitate",
      "Report analitici completi",
      "PDF preventivi branded",
      "Gestione commissioni concierge",
      "Supporto email",
    ],
  },
  {
    id: "premium" as const,
    name: "Premium",
    price: "€119",
    period: "/ 3 mesi",
    billing: "Risparmia €28 rispetto al mensile",
    color: "#C9A75F",
    recommended: true,
    features: [
      "Tutto del piano Base",
      "3 mesi continuativi",
      "Priorità nel supporto",
      "Accesso anticipato nuove funzioni",
    ],
  },
];

const inputClass =
  "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white/90 placeholder-white/25 focus:outline-none focus:border-[#C9A75F]/50 transition-colors";
const labelClass = "block text-white/40 text-[10px] uppercase tracking-wider mb-1.5";

export default function RegisterPage() {
  const [selectedPlan, setSelectedPlan] = useState<"base" | "premium">("premium");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!nickname.trim()) { setError("Nickname obbligatorio"); return; }
    if (password.length < 6) { setError("Password minimo 6 caratteri"); return; }
    if (password !== confirmPassword) { setError("Le password non coincidono"); return; }

    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname: nickname.trim(), email: email.trim() || undefined, password, plan: selectedPlan }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Errore durante la registrazione"); return; }
      // checkoutUrl null = Stripe non configurato, account creato manualmente
      window.location.href = data.checkoutUrl ?? data.redirectTo ?? "/login";
    } catch {
      setError("Errore di rete. Riprova.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
          style={{ background: "linear-gradient(135deg, #C9A75F 0%, #E0C27A 100%)" }}
        >
          <Sparkles className="w-7 h-7 text-[#070A0D]" />
        </div>
        <h1 className="text-[#E0C27A] text-2xl font-bold tracking-[0.22em] uppercase mb-1">LUXY</h1>
        <p className="text-white/35 text-xs tracking-[0.2em] uppercase">Experience — Gestionale</p>
      </div>

      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-white/90 text-2xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>
            Scegli il tuo piano
          </h2>
          <p className="text-white/40 text-sm">
            Accesso completo alla dashboard gestionale luxury.{" "}
            <span className="text-white/60">Disdici in qualsiasi momento.</span>
          </p>
        </div>

        {/* Plan selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {PLANS.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlan(plan.id)}
              className={[
                "relative text-left rounded-2xl p-6 border transition-all duration-200",
                selectedPlan === plan.id
                  ? "border-[#C9A75F]/60 bg-[#C9A75F]/5"
                  : "border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]",
              ].join(" ")}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#C9A75F] text-[#070A0D] text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full">
                    Consigliato
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-white/90 font-bold text-lg">{plan.name}</p>
                  <p className="text-white/35 text-xs mt-0.5">{plan.billing}</p>
                </div>
                <div
                  className={[
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                    selectedPlan === plan.id ? "border-[#C9A75F] bg-[#C9A75F]" : "border-white/20",
                  ].join(" ")}
                >
                  {selectedPlan === plan.id && <Check className="w-3 h-3 text-[#070A0D]" strokeWidth={3} />}
                </div>
              </div>

              <div className="mb-5">
                <span className="text-3xl font-bold" style={{ color: plan.color }}>
                  {plan.price}
                </span>
                <span className="text-white/40 text-sm ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                    <Check className="w-3.5 h-3.5 text-[#3BB273] mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        {/* Enterprise note */}
        <div className="text-center mb-8 p-4 rounded-xl border border-white/6 bg-white/[0.02]">
          <p className="text-white/40 text-sm">
            Struttura enterprise con esigenze particolari?{" "}
            <span className="text-[#C9A75F]">Contattaci per una proposta personalizzata.</span>
          </p>
        </div>

        {/* Registration form */}
        <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-8">
          <h3 className="text-white/80 font-semibold text-base mb-6">Crea il tuo account</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Nickname *</label>
                <input
                  className={inputClass}
                  placeholder="mario_villa"
                  value={nickname}
                  onChange={(e) => { setNickname(e.target.value); setError(""); }}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Email (opzionale)</label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="mario@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Password *</label>
                <input
                  type="password"
                  className={inputClass}
                  placeholder="Minimo 6 caratteri"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Conferma password *</label>
                <input
                  type="password"
                  className={inputClass}
                  placeholder="Ripeti la password"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setError(""); }}
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-[#D95D5D]/8 border border-[#D95D5D]/25 text-[#D95D5D] text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 font-semibold rounded-xl px-4 py-3.5 text-sm tracking-wide transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-[#070A0D]"
                style={{ background: "linear-gradient(135deg, #C9A75F 0%, #E0C27A 100%)" }}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Creazione account...
                  </>
                ) : (
                  `Continua con piano ${PLANS.find((p) => p.id === selectedPlan)?.name} →`
                )}
              </button>
              <p className="text-white/25 text-xs text-center mt-3">
                Verrai reindirizzato a Stripe per il pagamento sicuro con carta di credito.
              </p>
            </div>
          </form>
        </div>

        <p className="text-center text-white/35 text-sm mt-6">
          Hai già un account?{" "}
          <Link href="/login" className="text-[#C9A75F] hover:text-[#E0C27A] transition-colors">
            Accedi
          </Link>
        </p>
      </div>
    </div>
  );
}
