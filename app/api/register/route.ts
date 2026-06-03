import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  let createdUserId: string | null = null;

  try {
    const body = await req.json();
    const { nickname, email, password, plan } = body as {
      nickname: string;
      email?: string;
      password: string;
      plan: "base" | "premium";
    };

    if (!nickname?.trim())
      return NextResponse.json({ error: "Nickname obbligatorio" }, { status: 400 });
    if (!password || password.length < 6)
      return NextResponse.json({ error: "Password minimo 6 caratteri" }, { status: 400 });
    if (!plan || !["base", "premium"].includes(plan))
      return NextResponse.json({ error: "Piano non valido" }, { status: 400 });

    // Check duplicates
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { nickname: nickname.trim() },
          ...(email?.trim() ? [{ email: email.trim() }] : []),
        ],
      },
    });
    if (existing)
      return NextResponse.json({ error: "Nickname o email già in uso" }, { status: 400 });

    // Create user
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        nickname: nickname.trim(),
        email: email?.trim() || null,
        passwordHash,
        role: "owner",
      },
    });
    createdUserId = user.id;

    // Stripe — skip if not configured
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey || stripeKey.startsWith("sk_test_INSERISCI") || stripeKey === "") {
      // No Stripe configured: account created, license must be activated manually by admin
      return NextResponse.json({
        checkoutUrl: null,
        message: "Account creato. In attesa di attivazione licenza da parte dell'amministratore.",
        redirectTo: "/login",
      });
    }

    const { stripe, PLANS } = await import("@/lib/stripe");

    const customer = await stripe.customers.create({
      name: nickname.trim(),
      email: email?.trim() || undefined,
      metadata: { userId: user.id },
    });

    const planConfig = PLANS[plan];

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
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
      metadata: { userId: user.id, plan },
      subscription_data: { metadata: { userId: user.id, plan } },
      success_url: `${process.env.NEXTAUTH_URL}/license/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/register?cancelled=1`,
    });

    createdUserId = null; // success — don't rollback
    return NextResponse.json({ checkoutUrl: session.url });
  } catch (err: unknown) {
    // Rollback: delete user if Stripe failed after user creation
    if (createdUserId) {
      await prisma.user.delete({ where: { id: createdUserId } }).catch(() => {});
    }

    const message = err instanceof Error ? err.message : String(err);
    console.error("Register error:", message);

    if (message.includes("No such customer") || message.includes("Invalid API Key")) {
      return NextResponse.json({ error: "Configurazione Stripe non valida. Contatta l'amministratore." }, { status: 500 });
    }

    return NextResponse.json({ error: "Errore durante la registrazione. Riprova." }, { status: 500 });
  }
}
