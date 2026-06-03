import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { LicenseBanner } from "@/components/LicenseBanner";
import { getUserLicenseStatus } from "@/lib/license";
import { prisma } from "@/lib/db";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");

  const role = (session as any)?.user?.role ?? "collaboratore";
  const userId = (session as any)?.user?.id;

  let licenseStatus = await getUserLicenseStatus(userId, role);

  let periodEnd: string | null = null;
  if (role === "owner" && licenseStatus !== "active") {
    const license = await prisma.license.findUnique({ where: { userId } });
    periodEnd = license?.currentPeriodEnd?.toISOString() ?? null;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar user={session.user} />
      <main className="flex-1 min-w-0 px-6 md:px-8 py-7 overflow-y-auto">
        {licenseStatus !== "active" && role !== "admin" && (
          <LicenseBanner status={licenseStatus} role={role} periodEnd={periodEnd} />
        )}
        {children}
      </main>
    </div>
  );
}
