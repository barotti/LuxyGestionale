import { prisma } from "./db";

export type LicenseStatus = "active" | "past_due" | "expired" | "cancelled" | "none";

export async function getLicenseStatus(userId: string): Promise<LicenseStatus> {
  const license = await prisma.license.findUnique({ where: { userId } });
  if (!license) return "none";
  if (license.status === "cancelled") return "cancelled";
  if (license.status === "past_due") return "past_due";
  if (license.currentPeriodEnd && license.currentPeriodEnd < new Date()) return "expired";
  return "active";
}

export async function getUserLicenseStatus(userId: string, role: string): Promise<LicenseStatus> {
  if (role === "admin") return "active";

  if (role === "concierge") {
    const user = await prisma.user.findUnique({ where: { id: userId }, select: { ownerId: true } });
    if (!user?.ownerId) return "active"; // admin-created concierge without owner link → unrestricted
    return getLicenseStatus(user.ownerId);
  }

  return getLicenseStatus(userId);
}

export function licenseStatusLabel(status: LicenseStatus): string {
  switch (status) {
    case "active": return "Attiva";
    case "past_due": return "Pagamento in ritardo";
    case "expired": return "Scaduta";
    case "cancelled": return "Cancellata";
    case "none": return "Nessuna licenza";
  }
}
