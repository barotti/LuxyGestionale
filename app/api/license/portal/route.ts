import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  void req;
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = (session as { user: { id: string } }).user.id;
  const license = await prisma.license.findUnique({ where: { userId } });

  if (!license?.stripeCustomerId) {
    return NextResponse.json({ error: "Nessuna licenza trovata" }, { status: 404 });
  }

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: license.stripeCustomerId,
    return_url: `${process.env.NEXTAUTH_URL}/license`,
  });

  return NextResponse.json({ url: portalSession.url });
}
