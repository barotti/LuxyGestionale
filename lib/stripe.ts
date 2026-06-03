import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-05-27.dahlia",
});

export const PLANS = {
  base: {
    name: "Base",
    description: "Accesso completo per 1 mese",
    amount: 4900, // €49 in cents
    currency: "eur",
    interval: "month" as const,
    intervalCount: 1,
    features: [
      "Proprietà e stanze illimitate",
      "Prenotazioni illimitate",
      "Report analitici",
      "Generazione PDF preventivi",
      "Gestione commissioni concierge",
      "Supporto email",
    ],
  },
  premium: {
    name: "Premium",
    description: "3 mesi continuativi — risparmia €28 sul mensile",
    amount: 11900, // €119 in cents
    currency: "eur",
    interval: "month" as const,
    intervalCount: 3,
    features: [
      "Tutto del piano Base",
      "3 mesi continuativi",
      "Priorità nel supporto",
      "Accesso anticipato a nuove funzioni",
    ],
  },
} as const;

export type PlanKey = keyof typeof PLANS;
