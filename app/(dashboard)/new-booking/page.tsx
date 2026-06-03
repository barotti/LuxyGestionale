import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { NewBookingClient } from "@/components/NewBookingClient";

export default async function NewBookingPage() {
  const session = await auth();
  const role = session?.user?.role ?? "collaboratore";
  const userId = session?.user?.id ?? "";

  // Filtra proprietà per ruolo
  let propertyWhere = {};
  if (role !== "admin") {
    // owner e concierge vedono solo le proprietà a cui sono collegati
    propertyWhere = { collaborators: { some: { userId } } };
  }

  const properties = await prisma.property.findMany({
    where: propertyWhere,
    include: {
      rooms: {
        select: { id: true, name: true, capacity: true },
        orderBy: { name: "asc" },
      },
    },
    orderBy: { name: "asc" },
  });

  return (
    <NewBookingClient
      role={role}
      userId={userId}
      properties={properties.map((p) => ({
        id: p.id,
        name: p.name,
        rooms: p.rooms,
      }))}
    />
  );
}
