import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { PropertiesClient } from "@/components/PropertiesClient";

export default async function PropertiesPage() {
  const session = await auth();
  const role = session?.user?.role ?? "collaboratore";
  const userId = session?.user?.id ?? "";

  if (role === "concierge" || role === "collaboratore") redirect("/bookings");

  const where =
    role === "admin" ? {} : { collaborators: { some: { userId } } };

  const properties = await prisma.property.findMany({
    where,
    include: {
      rooms: {
        include: {
          monthlyRates: { orderBy: [{ year: "asc" }, { month: "asc" }] },
        },
        orderBy: { name: "asc" },
      },
      collaborators: {
        include: { user: { select: { id: true, nickname: true, role: true } } },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <PropertiesClient
      isAdmin={role === "admin"}
      canCreate={role === "admin" || role === "owner"}
      properties={properties.map((p) => ({
        id: p.id,
        name: p.name,
        location: p.location,
        description: p.description,
        images: (p.images ?? []) as string[],
        rooms: p.rooms.map((r) => ({
          id: r.id,
          name: r.name,
          capacity: r.capacity,
          description: r.description,
          images: (r.images ?? []) as string[],
          monthlyRates: r.monthlyRates,
        })),
        collaborators: p.collaborators.map((c) => ({
          id: c.id,
          userId: c.userId,
          roleOnProperty: c.roleOnProperty,
          user: c.user,
        })),
      }))}
    />
  );
}
