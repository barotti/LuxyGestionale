"use client";

import { useState } from "react";
import { CreditCard, CheckCircle, XCircle, AlertTriangle, Clock, ExternalLink, Sparkles, Check, Loader2 } from "lucide-react";

interface LicenseData {
  id: string;
  userId: string;
  type: string;
  status: string;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean;
  createdAt: string;
  updatedAt: string;
}

const PLAN_LABELS: Record<string, string> = {
  base: "Base",
  premium: "Premium",
  enterprise: "Enterprise",
};

const STATUS_CONFIG: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  active: { label: "Attiva", color: "text-[#3BB273]", icon: CheckCircle },
  past_due: { label: "Pagamento in ritardo", color: "text-[#C9A75F]", icon: AlertTriangle },
  cancelled: { label: "Cancellata", color: "text-[#D95D5D]", icon: XCircle },
  expired: { label: "Scaduta", color: "text-[#D95D5D]", icon: XCircle },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric" });
}

const PLAN_OPTIONS = [
  {
    id: "base" as const,
    name: "Base",
    price: "€49",
    period: "/ mese",
    billing: "Fatturato mensilmente",
    color: "#4A90E2",
  },
  {
    id: "premium" as const,
    name: "Premium",
    price: "€119",
    period: "/ 3 mesi",
    billing: "Risparmia €28 rispetto al mensile",
    color: "#C9A75F",
    recommended: true,
  },
];

export function LicensePageClient({ license }: { license: LicenseData | null }) {
  const [loadingPortal, setLoadingPortal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"base" | "premium">("premium");
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");

  async function openPortal() {
    setLoadingPortal(true);
    try {
      const res = await fetch("/api/license/portal", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } finally {
      setLoadingPortal(false);
    }
  }

  async function startCheckout() {
    setCheckoutError("");
    setLoadingCheckout(true);
    try {
      const res = await fetch("/api/license/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: selectedPlan }),
      });
      const data = await res.json();
      if (!res.ok) { setCheckoutError(data.error || "Errore"); return; }
      if (data.checkoutUrl) window.location.href = data.checkoutUrl;
    } finally {
      setLoadingCheckout(false);
    }
  }

  if (!license) {
    return (
      <div className="p-6 max-w-2xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white/90" style={{ fontFamily: "Georgia, serif" }}>
            Licenza
          </h1>
          <p className="text-white/40 text-sm mt-1">Gestisci il tuo abbonamento Luxy Experience</p>
        </div>

        <div className="glass-card p-6">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #C9A75F 0%, #E0C27A 100%)" }}>
              <Sparkles className="w-7 h-7 text-[#070A0D]" />
            </div>
            <h2 className="text-white/90 text-lg font-semibold mb-1">Nessuna licenza attiva</h2>
            <p className="text-white/40 text-sm">Seleziona un piano per attivare l&apos;accesso completo.</p>
          </div>

          {/* Plan picker */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {PLAN_OPTIONS.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedPlan(plan.id)}
                className={[
                  "relative text-left rounded-xl p-4 border transition-all",
                  selectedPlan === plan.id
                    ? "border-[#C9A75F]/60 bg-[#C9A75F]/5"
                    : "border-white/8 bg-white/[0.02] hover:border-white/15",
                ].join(" ")}
              >
                {plan.recommended && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#C9A75F] text-[#070A0D] text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full">
                    Consigliato
                  </span>
                )}
                <div className="flex justify-between items-start mb-2">
                  <p className="text-white/85 font-semibold text-sm">{plan.name}</p>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPlan === plan.id ? "border-[#C9A75F] bg-[#C9A75F]" : "border-white/20"}`}>
                    {selectedPlan === plan.id && <Check className="w-2.5 h-2.5 text-[#070A0D]" strokeWidth={3} />}
                  </div>
                </div>
                <span className="text-xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                <span className="text-white/35 text-xs ml-1">{plan.period}</span>
                <p className="text-white/30 text-[11px] mt-1">{plan.billing}</p>
              </button>
            ))}
          </div>

          {checkoutError && (
            <p className="text-[#D95D5D] text-sm bg-[#D95D5D]/8 border border-[#D95D5D]/20 rounded-lg px-3 py-2 mb-4">
              {checkoutError}
            </p>
          )}

          <button
            onClick={startCheckout}
            disabled={loadingCheckout}
            className="w-full flex items-center justify-center gap-2 font-semibold rounded-xl px-4 py-3 text-sm text-[#070A0D] transition-all disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, #C9A75F 0%, #E0C27A 100%)" }}
          >
            {loadingCheckout ? <><Loader2 className="w-4 h-4 animate-spin" /> Apertura checkout...</> : `Attiva piano ${PLAN_OPTIONS.find(p => p.id === selectedPlan)?.name} →`}
          </button>
          <p className="text-white/20 text-xs text-center mt-2">Pagamento sicuro via Stripe · Disdici in qualsiasi momento</p>
        </div>
      </div>
    );
  }

  const statusCfg = STATUS_CONFIG[license.status] ?? STATUS_CONFIG.active;
  const StatusIcon = statusCfg.icon;
  const isActive = license.status === "active";
  const isPastDue = license.status === "past_due";

  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white/90" style={{ fontFamily: "Georgia, serif" }}>
          Licenza
        </h1>
        <p className="text-white/40 text-sm mt-1">Gestisci il tuo abbonamento Luxy Experience</p>
      </div>

      {/* Main license card */}
      <div className="glass-card p-6 mb-4">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CreditCard className="w-4 h-4 text-[#C9A75F]" />
              <span className="text-white/50 text-xs uppercase tracking-wider">Piano attivo</span>
            </div>
            <h2 className="text-white/90 text-2xl font-bold">
              {PLAN_LABELS[license.type] ?? license.type}
            </h2>
          </div>
          <div className={`flex items-center gap-1.5 text-sm font-medium ${statusCfg.color}`}>
            <StatusIcon className="w-4 h-4" />
            {statusCfg.label}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {license.currentPeriodEnd && (
            <div className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
              <div className="flex items-center gap-1.5 text-white/35 text-xs mb-1">
                <Clock className="w-3 h-3" />
                {license.cancelAtPeriodEnd ? "Accesso fino al" : "Prossimo rinnovo"}
              </div>
              <p className="text-white/80 font-medium text-sm">
                {formatDate(license.currentPeriodEnd)}
              </p>
            </div>
          )}
          <div className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
            <p className="text-white/35 text-xs mb-1">Attivo dal</p>
            <p className="text-white/80 font-medium text-sm">{formatDate(license.createdAt)}</p>
          </div>
        </div>

        {license.cancelAtPeriodEnd && isActive && (
          <div className="bg-[#C9A75F]/8 border border-[#C9A75F]/20 rounded-xl px-4 py-3 mb-5">
            <p className="text-[#C9A75F] text-sm">
              Abbonamento in disdetta — accesso garantito fino al{" "}
              {license.currentPeriodEnd ? formatDate(license.currentPeriodEnd) : "—"}.
              Puoi riattivarlo dal portale Stripe.
            </p>
          </div>
        )}

        {isPastDue && (
          <div className="bg-[#C9A75F]/8 border border-[#C9A75F]/20 rounded-xl px-4 py-3 mb-5">
            <p className="text-[#C9A75F] text-sm">
              Il pagamento dell&apos;ultimo rinnovo non è andato a buon fine. Aggiorna il metodo di pagamento per evitare l&apos;interruzione del servizio.
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {license.stripeSubscriptionId && (
            <button
              onClick={openPortal}
              disabled={loadingPortal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-white/60 hover:text-white/90 hover:border-white/20 text-sm transition-colors disabled:opacity-50"
            >
              <ExternalLink className="w-4 h-4" />
              {loadingPortal ? "Apertura..." : "Gestisci abbonamento"}
            </button>
          )}
          {!isActive && (
            <button
              onClick={startCheckout}
              disabled={loadingCheckout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#070A0D] transition-all disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #C9A75F 0%, #E0C27A 100%)" }}
            >
              {loadingCheckout ? <><Loader2 className="w-4 h-4 animate-spin" /> ...</> : "Rinnova licenza →"}
            </button>
          )}
        </div>
      </div>

      {/* Info card */}
      <div className="glass-card p-5">
        <h3 className="text-white/50 text-xs uppercase tracking-wider mb-3">Informazioni abbonamento</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-white/35">Piano</span>
            <span className="text-white/70">{PLAN_LABELS[license.type] ?? license.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/35">Rinnovo</span>
            <span className="text-white/70">
              {license.type === "premium" ? "Ogni 3 mesi" : license.type === "base" ? "Mensile" : "—"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/35">Costo</span>
            <span className="text-white/70">
              {license.type === "premium" ? "€119 / 3 mesi" : license.type === "base" ? "€49 / mese" : "Personalizzato"}
            </span>
          </div>
        </div>
        <p className="text-white/25 text-xs mt-4">
          Per modificare piano, metodo di pagamento o visualizzare le fatture usa il pulsante &quot;Gestisci abbonamento&quot; sopra (Stripe Customer Portal).
        </p>
      </div>
    </div>
  );
}
