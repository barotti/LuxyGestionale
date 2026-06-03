import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";
import type Stripe from "stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode !== "subscription") break;

        const userId = session.metadata?.userId;
        const plan = session.metadata?.plan || "base";
        const subscriptionId = session.subscription as string;
        if (!userId) break;

        const subscription = await stripe.subscriptions.retrieve(subscriptionId);
        const periodEnd = subscription.items.data[0]?.current_period_end;

        await prisma.license.upsert({
          where: { userId },
          create: {
            userId,
            type: plan,
            status: "active",
            stripeCustomerId: session.customer as string,
            stripeSubscriptionId: subscriptionId,
            currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
            cancelAtPeriodEnd: subscription.cancel_at_period_end,
          },
          update: {
            type: plan,
            status: "active",
            stripeCustomerId: session.customer as string,
            stripeSubscriptionId: subscriptionId,
            currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
            cancelAtPeriodEnd: subscription.cancel_at_period_end,
          },
        });
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const status =
          subscription.status === "active"
            ? "active"
            : subscription.status === "past_due"
            ? "past_due"
            : "cancelled";

        const periodEnd = subscription.items.data[0]?.current_period_end;
        await prisma.license.updateMany({
          where: { stripeSubscriptionId: subscription.id },
          data: {
            status,
            currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
            cancelAtPeriodEnd: subscription.cancel_at_period_end,
          },
        });
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await prisma.license.updateMany({
          where: { stripeSubscriptionId: subscription.id },
          data: { status: "cancelled" },
        });
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const subId = typeof invoice.subscription === "string" ? invoice.subscription : null;
        if (subId) {
          await prisma.license.updateMany({
            where: { stripeSubscriptionId: subId },
            data: { status: "past_due" },
          });
        }
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        const subId = typeof invoice.subscription === "string" ? invoice.subscription : null;
        if (subId) {
          const subscription = await stripe.subscriptions.retrieve(subId);
          const periodEnd = subscription.items.data[0]?.current_period_end;
          await prisma.license.updateMany({
            where: { stripeSubscriptionId: subId },
            data: {
              status: "active",
              currentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
            },
          });
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "Webhook handler error" }, { status: 500 });
  }
}
