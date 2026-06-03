import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { UsersClient } from "@/components/UsersClient";

export default async function UsersPage() {
  const session = await auth();
  const role = (session as any)?.user?.role ?? "collaboratore";

  if (role !== "admin") redirect("/bookings");

  const rawUsers = await prisma.user.findMany({
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      nickname: true,
      email: true,
      role: true,
      ownerId: true,
      createdAt: true,
      propertyLinks: {
        select: {
          propertyId: true,
          roleOnProperty: true,
          property: { select: { id: true, name: true } },
        },
      },
      license: {
        select: { type: true, status: true, currentPeriodEnd: true },
      },
    },
  });

  const users = rawUsers.map((u) => ({
    ...u,
    createdAt: u.createdAt.toISOString(),
    license: u.license
      ? { ...u.license, currentPeriodEnd: u.license.currentPeriodEnd?.toISOString() ?? null }
      : null,
  }));

  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "asc" },
    select: { id: true, name: true, location: true },
  });

  return <UsersClient users={users} properties={properties} />;
}
