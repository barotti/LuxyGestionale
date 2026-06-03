"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import {
  Building2,
  BookMarked,
  CalendarPlus,
  BarChart3,
  Settings,
  LogOut,
  User,
  Sparkles,
  Users,
  Banknote,
  CreditCard,
} from "lucide-react";

const ALL_NAV = [
  { href: "/properties",   label: "Proprietà",         icon: Building2,   roles: ["admin", "owner"] },
  { href: "/bookings",     label: "Prenotazioni",       icon: BookMarked,  roles: ["admin", "owner", "concierge"] },
  { href: "/new-booking",  label: "Nuova Prenotazione", icon: CalendarPlus,roles: ["admin", "owner", "concierge"] },
  { href: "/reports",      label: "Report",             icon: BarChart3,   roles: ["admin", "owner"] },
  { href: "/commissions",  label: "Commissioni",        icon: Banknote,    roles: ["admin", "owner", "concierge"] },
  { href: "/users",        label: "Utenti",             icon: Users,       roles: ["admin"] },
  { href: "/license",      label: "Licenza",            icon: CreditCard,  roles: ["owner"] },
  { href: "/settings",     label: "Impostazioni",       icon: Settings,    roles: ["admin", "owner", "concierge"] },
] as const;

const ROLE_LABELS: Record<string, string> = {
  admin: "Admin",
  owner: "Proprietario",
  concierge: "Concierge",
  collaboratore: "Collaboratore",
};

interface SidebarProps {
  user?: {
    name?: string | null;
    email?: string | null;
    role?: string;
  };
}

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();
  const role = user?.role ?? "collaboratore";
  const navItems = ALL_NAV.filter((item) => (item.roles as readonly string[]).includes(role));

  return (
    <aside className="glass-sidebar flex flex-col w-64 shrink-0 min-h-screen sticky top-0 h-screen z-40">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-7 border-b border-white/[0.06]">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #C9A75F 0%, #E0C27A 100%)" }}>
          <Sparkles className="w-5 h-5 text-[#070A0D]" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[#E0C27A] text-base font-bold tracking-[0.18em] uppercase">
            LUXY
          </span>
          <span className="text-white/35 text-[10px] tracking-[0.2em] uppercase mt-0.5">
            Experience
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 flex flex-col gap-1 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "text-[#E0C27A] bg-[#C9A75F]/12"
                  : "text-white/50 hover:text-white/85 hover:bg-white/[0.05]"
              )}
            >
              <Icon
                className={cn(
                  "w-4.5 h-4.5 shrink-0",
                  isActive ? "text-[#C9A75F]" : "text-white/40"
                )}
              />
              {label}
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C9A75F] shrink-0" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User & Logout */}
      <div className="px-3 pb-5 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
        <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.03]">
          <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, rgba(201,167,95,0.3) 0%, rgba(224,194,122,0.15) 100%)", border: "1px solid rgba(201,167,95,0.3)" }}>
            <User className="w-4 h-4 text-[#C9A75F]" />
          </div>
          <div className="flex flex-col leading-none min-w-0">
            <span className="text-white/80 text-sm font-medium truncate">
              {user?.name ?? "Utente"}
            </span>
            {role && (
              <span className="text-[#C9A75F]/70 text-[10px] uppercase tracking-wider mt-0.5">
                {ROLE_LABELS[role] ?? role}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm text-white/40 hover:text-[#D95D5D] hover:bg-[#D95D5D]/8 transition-all duration-200 cursor-pointer w-full"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Esci
        </button>
      </div>
    </aside>
  );
}
