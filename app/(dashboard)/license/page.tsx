import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { LicensePageClient } from "@/components/LicensePageClient";

export default async function LicensePage() {
  const session = await auth();
  const role = (session as any)?.user?.role ?? "collaboratore";
  const userId = (session as any)?.user?.id;

  if (!["admin", "owner"].includes(role)) redirect("/bookings");

  const license = await prisma.license.findUnique({
    where: { userId },
  });

  const serialized = license
    ? {
        ...license,
        currentPeriodEnd: license.currentPeriodEnd
          ? license.currentPeriodEnd.toISOString()
          : null,
        createdAt: license.createdAt.toISOString(),
        updatedAt: license.updatedAt.toISOString(),
      }
    : null;

  return <LicensePageClient license={serialized} />;
}
