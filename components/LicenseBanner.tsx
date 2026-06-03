"use client";

import Link from "next/link";
import { AlertTriangle, XCircle, Clock } from "lucide-react";
import type { LicenseStatus } from "@/lib/license";

const CONFIG: Record<
  Exclude<LicenseStatus, "active">,
  { icon: React.ElementType; bg: string; border: string; text: string; message: string; cta: string }
> = {
  none: {
    icon: XCircle,
    bg: "bg-[#D95D5D]/8",
    border: "border-[#D95D5D]/25",
    text: "text-[#D95D5D]",
    message: "Nessuna licenza attiva. L'accesso in scrittura è disabilitato.",
    cta: "Attiva licenza",
  },
  expired: {
    icon: XCircle,
    bg: "bg-[#D95D5D]/8",
    border: "border-[#D95D5D]/25",
    text: "text-[#D95D5D]",
    message: "La tua licenza è scaduta. Puoi solo visualizzare i dati.",
    cta: "Rinnova",
  },
  cancelled: {
    icon: XCircle,
    bg: "bg-[#D95D5D]/8",
    border: "border-[#D95D5D]/25",
    text: "text-[#D95D5D]",
    message: "Abbonamento cancellato. Puoi solo visualizzare i dati.",
    cta: "Riattiva",
  },
  past_due: {
    icon: AlertTriangle,
    bg: "bg-[#C9A75F]/8",
    border: "border-[#C9A75F]/30",
    text: "text-[#C9A75F]",
    message: "Pagamento in ritardo. Aggiorna il metodo di pagamento per continuare ad usare la piattaforma.",
    cta: "Gestisci pagamento",
  },
};

interface LicenseBannerProps {
  status: Exclude<LicenseStatus, "active">;
  role: string;
  periodEnd?: string | null;
}

export function LicenseBanner({ status, role, periodEnd }: LicenseBannerProps) {
  const cfg = CONFIG[status];
  const Icon = cfg.icon;

  const isOwner = role === "owner";

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border mb-5 ${cfg.bg} ${cfg.border}`}>
      <Icon className={`w-4 h-4 flex-shrink-0 ${cfg.text}`} />
      <div className="flex-1 min-w-0">
        <p className={`text-sm ${cfg.text}`}>
          {isOwner
            ? cfg.message
            : "La licenza del proprietario non è attiva. Contatta il proprietario per rinnovare."}
          {periodEnd && (
            <span className="text-white/35 text-xs ml-2 inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Scaduta il {new Date(periodEnd).toLocaleDateString("it-IT")}
            </span>
          )}
        </p>
      </div>
      {isOwner && (
        <Link
          href="/license"
          className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${cfg.text} ${cfg.border} hover:bg-white/5`}
        >
          {cfg.cta} →
        </Link>
      )}
    </div>
  );
}
