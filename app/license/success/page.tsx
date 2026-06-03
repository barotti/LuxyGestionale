import Link from "next/link";
import { Sparkles, CheckCircle } from "lucide-react";

export default function LicenseSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
          style={{ background: "linear-gradient(135deg, #C9A75F 0%, #E0C27A 100%)" }}>
          <Sparkles className="w-7 h-7 text-[#070A0D]" />
        </div>

        {/* Success icon */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-[#3BB273]/10 border border-[#3BB273]/25 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-[#3BB273]" />
          </div>
        </div>

        <h1 className="text-white/90 text-2xl font-bold mb-2" style={{ fontFamily: "Georgia, serif" }}>
          Pagamento confermato!
        </h1>
        <p className="text-white/50 text-sm mb-2">
          Benvenuto in Luxy Experience. Il tuo account è ora attivo.
        </p>
        <p className="text-white/35 text-xs mb-8">
          Riceverai un&apos;email di conferma dall&apos;indirizzo Stripe con i dettagli del tuo abbonamento.
        </p>

        <Link
          href="/login"
          className="inline-flex items-center justify-center font-semibold rounded-xl px-8 py-3.5 text-sm tracking-wide transition-all duration-200 text-[#070A0D]"
          style={{ background: "linear-gradient(135deg, #C9A75F 0%, #E0C27A 100%)" }}
        >
          Accedi alla dashboard →
        </Link>

        <p className="text-white/25 text-xs mt-4">
          Problema con il pagamento?{" "}
          <a href="mailto:support@luxyexperience.com" className="text-[#C9A75F] hover:underline">
            Contattaci
          </a>
        </p>
      </div>
    </div>
  );
}
