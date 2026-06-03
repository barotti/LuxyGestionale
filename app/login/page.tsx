"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const result = await signIn("credentials", {
      nickname: form.get("nickname"),
      password: form.get("password"),
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Credenziali non valide");
    } else {
      router.push("/");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
            style={{ background: "linear-gradient(135deg, #C9A75F 0%, #E0C27A 100%)" }}>
            <Sparkles className="w-7 h-7 text-[#070A0D]" />
          </div>
          <h1 className="text-[#E0C27A] text-2xl font-bold tracking-[0.22em] uppercase mb-1">
            LUXY
          </h1>
          <p className="text-white/35 text-xs tracking-[0.2em] uppercase">
            Experience — Gestionale
          </p>
        </div>

        {/* Glass Card */}
        <div className="glass-modal p-8">
          <h2 className="text-white/90 text-lg font-semibold mb-6">Accedi</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/40 text-[10px] uppercase tracking-wider mb-1.5">
                Nickname
              </label>
              <input
                name="nickname"
                type="text"
                required
                autoComplete="username"
                className="glass-input w-full rounded-lg px-4 py-2.5 text-sm"
                placeholder="Il tuo nickname"
              />
            </div>

            <div>
              <label className="block text-white/40 text-[10px] uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="glass-input w-full rounded-lg px-4 py-2.5 text-sm"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-[#D95D5D] text-sm bg-[#D95D5D]/8 border border-[#D95D5D]/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full font-semibold rounded-lg px-4 py-2.5 text-sm tracking-wide transition-all duration-200 mt-2 disabled:opacity-50 disabled:cursor-not-allowed text-[#070A0D]"
              style={{ background: loading ? "#C9A75F" : "linear-gradient(135deg, #C9A75F 0%, #E0C27A 100%)" }}
            >
              {loading ? "Accesso in corso..." : "Accedi"}
            </button>
          </form>
        </div>

        <p className="text-center text-white/35 text-sm mt-5">
          Non hai un account?{" "}
          <a href="/register" className="text-[#C9A75F] hover:text-[#E0C27A] transition-colors">
            Registrati
          </a>
        </p>
      </div>
    </div>
  );
}
