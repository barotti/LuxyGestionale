import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { stripe, PLANS, PlanKey } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Non autenticato" }, { status: 401 });

  const userId = (session as any).user.id;
  const { plan } = (await req.json()) as { plan: PlanKey };

  if (!plan || !["base", "premium"].includes(plan))
    return NextResponse.json({ error: "Piano non valido" }, { status: 400 });

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey || stripeKey.startsWith("sk_test_INSERISCI") || stripeKey === "") {
    return NextResponse.json({ error: "Stripe non configurato. Contatta l'amministratore." }, { status: 503 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { license: true },
  });
  if (!user) return NextResponse.json({ error: "Utente non trovato" }, { status: 404 });

  // Riusa il customer Stripe esistente o ne crea uno nuovo
  let customerId = user.license?.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({
      name: user.nickname,
      email: user.email || undefined,
      metadata: { userId },
    });
    customerId = customer.id;
  }

  const planConfig = PLANS[plan];

  const checkoutSession = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: planConfig.currency,
          product_data: {
            name: `Luxy Experience — ${planConfig.name}`,
            description: planConfig.description,
          },
          unit_amount: planConfig.amount,
          recurring: {
            interval: planConfig.interval,
            interval_count: planConfig.intervalCount,
          },
        },
        quantity: 1,
      },
    ],
    metadata: { userId, plan },
    subscription_data: { metadata: { userId, plan } },
    success_url: `${process.env.NEXTAUTH_URL}/license/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/license`,
  });

  return NextResponse.json({ checkoutUrl: checkoutSession.url });
}
