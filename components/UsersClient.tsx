"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

interface PropertyLink {
  propertyId: string;
  roleOnProperty: string;
  property: { id: string; name: string };
}

interface LicenseInfo {
  type: string;
  status: string;
  currentPeriodEnd: string | null;
}

interface UserItem {
  id: string;
  nickname: string;
  email: string | null;
  role: string;
  ownerId: string | null;
  createdAt: string | Date;
  propertyLinks: PropertyLink[];
  license: LicenseInfo | null;
}

interface PropertyOption {
  id: string;
  name: string;
  location: string;
}

const inputClass = "glass-input w-full rounded-lg px-4 py-2.5 text-sm";
const labelClass = "block text-white/40 text-xs uppercase tracking-wider mb-1.5";
const primaryBtn =
  "bg-[#C9A75F] hover:bg-[#E0C27A] text-[#070A0D] font-semibold px-4 py-2 rounded-lg text-sm transition-colors";
const secondaryBtn =
  "border border-white/10 text-white/50 hover:text-white/90 hover:border-white/25 px-4 py-2 rounded-lg text-sm transition-colors";
const dangerBtn =
  "bg-[#D95D5D] hover:bg-[#C04A4A] text-white px-3 py-1.5 rounded-lg text-xs transition-colors font-semibold";

const ROLE_LABELS: Record<string, string> = {
  admin: "Admin",
  owner: "Proprietario",
  concierge: "Concierge",
  collaboratore: "Collaboratore",
};

const ROLE_COLORS: Record<string, string> = {
  admin: "bg-[#C9A75F]/15 text-[#C9A75F] border border-[#C9A75F]/30",
  owner: "bg-[#4A90E2]/15 text-[#4A90E2] border border-[#4A90E2]/30",
  concierge: "bg-[#3BB273]/15 text-[#3BB273] border border-[#3BB273]/30",
  collaboratore: "bg-white/5 text-white/50 border border-white/15",
};

export function UsersClient({
  users: initialUsers,
  properties,
}: {
  users: UserItem[];
  properties: PropertyOption[];
}) {
  const [users, setUsers] = useState<UserItem[]>(initialUsers);
  const [newNickname, setNewNickname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState("concierge");
  const [newUserOwnerId, setNewUserOwnerId] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userError, setUserError] = useState<string | null>(null);
  const [deleteUserConfirm, setDeleteUserConfirm] = useState<UserItem | null>(null);
  const [deletingUser, setDeletingUser] = useState(false);

  const [assignPanel, setAssignPanel] = useState<string | null>(null);
  const [assignPropertyId, setAssignPropertyId] = useState("");
  const [assignRoleOnProp, setAssignRoleOnProp] = useState("owner");
  const [assigningProp, setAssigningProp] = useState(false);
  const [assignError, setAssignError] = useState<string | null>(null);

  const [licensePanel, setLicensePanel] = useState<string | null>(null);
  const [licenseType, setLicenseType] = useState("base");
  const [licenseDuration, setLicenseDuration] = useState("1");
  const [licenseSaving, setLicenseSaving] = useState(false);
  const [licenseError, setLicenseError] = useState<string | null>(null);
  const [licenseSuccess, setLicenseSuccess] = useState<string | null>(null);
  const [licenseRevoking, setLicenseRevoking] = useState(false);

  async function createUser() {
    setUserError(null);
    if (!newNickname.trim()) { setUserError("Nickname obbligatorio"); return; }
    if (!newUserPassword || newUserPassword.length < 6) { setUserError("Password minimo 6 caratteri"); return; }
    setCreatingUser(true);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname: newNickname.trim(),
          email: newEmail.trim() || null,
          password: newUserPassword,
          role: newUserRole,
          ownerId: newUserRole === "concierge" && newUserOwnerId ? newUserOwnerId : null,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setUserError(data.error || "Errore creazione utente"); return; }
      setUsers((prev) => [...prev, data]);
      setNewNickname("");
      setNewEmail("");
      setNewUserPassword("");
      setNewUserRole("concierge");
      setNewUserOwnerId("");
    } catch {
      setUserError("Errore di rete");
    } finally {
      setCreatingUser(false);
    }
  }

  async function changeUserRole(userId: string, role: string) {
    const res = await fetch(`/api/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role }),
    });
    if (res.ok) {
      const updated = await res.json();
      setUsers((prev) => prev.map((u) => (u.id === userId ? updated : u)));
    }
  }

  async function deleteUser(userId: string) {
    setDeletingUser(true);
    try {
      const res = await fetch(`/api/users/${userId}`, { method: "DELETE" });
      if (res.ok) {
        setUsers((prev) => prev.filter((u) => u.id !== userId));
        setDeleteUserConfirm(null);
      }
    } finally {
      setDeletingUser(false);
    }
  }

  async function assignToProperty(userId: string) {
    if (!assignPropertyId) { setAssignError("Seleziona una proprietà"); return; }
    setAssigningProp(true);
    setAssignError(null);
    try {
      const userItem = users.find((u) => u.id === userId);
      const res = await fetch(`/api/properties/${assignPropertyId}/collaborators`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname: userItem?.nickname, roleOnProperty: assignRoleOnProp }),
      });
      const data = await res.json();
      if (!res.ok) { setAssignError(data.error || "Errore assegnazione"); return; }
      const usersRes = await fetch("/api/users");
      if (usersRes.ok) setUsers(await usersRes.json());
      setAssignPropertyId("");
      setAssignPanel(null);
    } catch {
      setAssignError("Errore di rete");
    } finally {
      setAssigningProp(false);
    }
  }

  async function removeFromProperty(userId: string, propertyId: string) {
    const res = await fetch(`/api/properties/${propertyId}/collaborators/${userId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId
            ? { ...u, propertyLinks: u.propertyLinks.filter((l) => l.propertyId !== propertyId) }
            : u
        )
      );
    }
  }

  async function saveLicense(userId: string) {
    setLicenseError(null);
    setLicenseSuccess(null);
    setLicenseSaving(true);
    try {
      const res = await fetch("/api/admin/license", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, type: licenseType, months: parseInt(licenseDuration, 10) }),
      });
      const data = await res.json();
      if (!res.ok) { setLicenseError(data.error || "Errore"); return; }
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId
            ? { ...u, license: { type: data.type, status: data.status, currentPeriodEnd: data.currentPeriodEnd } }
            : u
        )
      );
      setLicenseSuccess("Licenza assegnata.");
      setTimeout(() => { setLicensePanel(null); setLicenseSuccess(null); }, 1500);
    } catch {
      setLicenseError("Errore di rete");
    } finally {
      setLicenseSaving(false);
    }
  }

  async function revokeLicense(userId: string) {
    if (!confirm("Revocare la licenza di questo utente?")) return;
    setLicenseRevoking(true);
    try {
      const res = await fetch("/api/admin/license", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === userId
              ? { ...u, license: u.license ? { ...u.license, status: "cancelled" } : null }
              : u
          )
        );
        setLicensePanel(null);
      }
    } finally {
      setLicenseRevoking(false);
    }
  }

  function getLicenseBadge(license: LicenseInfo | null) {
    if (!license) return { text: "Nessuna licenza", color: "bg-white/5 text-white/35 border border-white/10" };
    const isExpired = license.currentPeriodEnd && new Date(license.currentPeriodEnd) < new Date();
    if (license.status === "cancelled") return { text: "Cancellata", color: "bg-[#D95D5D]/10 text-[#D95D5D] border border-[#D95D5D]/25" };
    if (isExpired) return { text: "Scaduta", color: "bg-[#D95D5D]/10 text-[#D95D5D] border border-[#D95D5D]/25" };
    if (license.status === "past_due") return { text: "Pagamento in ritardo", color: "bg-[#C9A75F]/10 text-[#C9A75F] border border-[#C9A75F]/25" };
    const PLAN_LABELS: Record<string, string> = { base: "Base", premium: "Premium", enterprise: "Enterprise" };
    const expiry = license.currentPeriodEnd
      ? new Date(license.currentPeriodEnd).toLocaleDateString("it-IT", { day: "2-digit", month: "short", year: "numeric" })
      : null;
    return {
      text: `${PLAN_LABELS[license.type] ?? license.type}${expiry ? ` · ${expiry}` : ""}`,
      color: "bg-[#3BB273]/10 text-[#3BB273] border border-[#3BB273]/25",
    };
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white/90" style={{ fontFamily: "Georgia, serif" }}>
          Utenti
        </h1>
        <p className="text-white/40 text-sm mt-1">Crea e gestisci account, ruoli e accessi alle proprietà</p>
      </div>

      {/* User List */}
      <section className="glass-card p-6 mb-6">
        <h2 className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">Account attivi</h2>

        <div className="space-y-3">
          {users.map((u) => (
            <div key={u.id} className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-[#C9A75F]/10 border border-[#C9A75F]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9A75F] text-sm font-bold uppercase">
                      {u.nickname[0]}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-white/85 font-medium text-sm truncate">{u.nickname}</div>
                    {u.email && <div className="text-white/35 text-xs truncate">{u.email}</div>}
                    {u.role === "owner" && (() => {
                      const badge = getLicenseBadge(u.license);
                      return (
                        <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full mt-1 ${badge.color}`}>
                          {badge.text}
                        </span>
                      );
                    })()}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
                  <select
                    value={u.role}
                    onChange={(e) => changeUserRole(u.id, e.target.value)}
                    className="bg-[#10141C] border border-white/10 text-white/70 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:border-[#C9A75F]/50"
                  >
                    <option value="admin">Admin</option>
                    <option value="owner">Proprietario</option>
                    <option value="concierge">Concierge</option>
                    <option value="collaboratore">Collaboratore</option>
                  </select>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full ${ROLE_COLORS[u.role] || ROLE_COLORS.collaboratore}`}>
                    {ROLE_LABELS[u.role] || u.role}
                  </span>
                  {u.role === "owner" && (
                    <button
                      onClick={() => {
                        setLicensePanel(licensePanel === u.id ? null : u.id);
                        setLicenseError(null);
                        setLicenseSuccess(null);
                        setAssignPanel(null);
                      }}
                      className="flex items-center gap-1 text-[#C9A75F] hover:text-[#E0C27A] text-xs px-2.5 py-1 border border-[#C9A75F]/25 hover:border-[#C9A75F]/60 rounded-lg transition-colors"
                    >
                      <ShieldCheck className="w-3 h-3" />
                      Licenza
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setAssignPanel(assignPanel === u.id ? null : u.id);
                      setAssignError(null);
                      setAssignPropertyId("");
                      setLicensePanel(null);
                    }}
                    className="text-[#4A90E2] hover:text-[#6BA8E8] text-xs px-2.5 py-1 border border-[#4A90E2]/25 hover:border-[#4A90E2]/60 rounded-lg transition-colors"
                  >
                    Proprietà
                  </button>
                  <button
                    onClick={() => setDeleteUserConfirm(u)}
                    className="text-[#D95D5D] hover:text-[#C04A4A] text-xs px-2.5 py-1 border border-[#D95D5D]/25 hover:border-[#D95D5D]/60 rounded-lg transition-colors"
                  >
                    Elimina
                  </button>
                </div>
              </div>

              {/* Property links */}
              {u.propertyLinks.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {u.propertyLinks.map((link) => (
                    <div
                      key={link.propertyId}
                      className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 rounded-lg px-2.5 py-1"
                    >
                      <span className="text-white/60 text-xs">{link.property.name}</span>
                      <span className="text-white/25 text-xs">·</span>
                      <span className="text-[#C9A75F]/70 text-xs">{ROLE_LABELS[link.roleOnProperty] || link.roleOnProperty}</span>
                      <button
                        onClick={() => removeFromProperty(u.id, link.propertyId)}
                        className="text-white/25 hover:text-[#D95D5D] ml-1 text-xs transition-colors leading-none"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Assign property panel */}
              {assignPanel === u.id && (
                <div className="mt-3 p-3 bg-[#4A90E2]/5 border border-[#4A90E2]/15 rounded-lg">
                  {assignError && <p className="text-[#D95D5D] text-xs mb-2">{assignError}</p>}
                  <div className="flex gap-2 items-end flex-wrap">
                    <div className="flex-1 min-w-36">
                      <label className="block text-white/35 text-xs mb-1">Proprietà</label>
                      <select
                        value={assignPropertyId}
                        onChange={(e) => setAssignPropertyId(e.target.value)}
                        className="w-full bg-[#10141C] border border-white/10 text-white/70 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#4A90E2]/50"
                      >
                        <option value="">Seleziona...</option>
                        {properties.map((p) => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1 min-w-32">
                      <label className="block text-white/35 text-xs mb-1">Ruolo nella proprietà</label>
                      <select
                        value={assignRoleOnProp}
                        onChange={(e) => setAssignRoleOnProp(e.target.value)}
                        className="w-full bg-[#10141C] border border-white/10 text-white/70 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#4A90E2]/50"
                      >
                        <option value="owner">Proprietario</option>
                        <option value="concierge">Concierge</option>
                        <option value="collaboratore">Collaboratore</option>
                      </select>
                    </div>
                    <button
                      onClick={() => assignToProperty(u.id)}
                      disabled={assigningProp}
                      className="bg-[#4A90E2] hover:bg-[#6BA8E8] text-white text-xs px-3 py-2 rounded-lg transition-colors"
                    >
                      {assigningProp ? "..." : "Assegna"}
                    </button>
                  </div>
                </div>
              )}

              {/* License management panel */}
              {licensePanel === u.id && (
                <div className="mt-3 p-4 bg-[#C9A75F]/5 border border-[#C9A75F]/20 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[#C9A75F] text-xs font-semibold uppercase tracking-wider">Gestione Licenza Manuale</p>
                    {u.license && u.license.status === "active" && !(u.license.currentPeriodEnd && new Date(u.license.currentPeriodEnd) < new Date()) && (
                      <button
                        onClick={() => revokeLicense(u.id)}
                        disabled={licenseRevoking}
                        className="text-[#D95D5D] hover:text-[#C04A4A] text-xs border border-[#D95D5D]/25 hover:border-[#D95D5D]/50 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        {licenseRevoking ? "..." : "Revoca"}
                      </button>
                    )}
                  </div>

                  {u.license && (
                    <p className="text-white/35 text-xs mb-3">
                      {(() => {
                        const badge = getLicenseBadge(u.license);
                        return `Stato attuale: ${badge.text}`;
                      })()}
                      {u.license.status === "active" && u.license.currentPeriodEnd && new Date(u.license.currentPeriodEnd) > new Date() &&
                        " — la durata verrà aggiunta alla scadenza attuale"}
                    </p>
                  )}

                  {licenseError && <p className="text-[#D95D5D] text-xs mb-2">{licenseError}</p>}
                  {licenseSuccess && <p className="text-[#3BB273] text-xs mb-2">{licenseSuccess}</p>}

                  <div className="flex gap-2 items-end flex-wrap">
                    <div className="flex-1 min-w-32">
                      <label className="block text-white/35 text-xs mb-1">Tipo piano</label>
                      <select
                        value={licenseType}
                        onChange={(e) => setLicenseType(e.target.value)}
                        className="w-full bg-[#10141C] border border-white/10 text-white/70 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#C9A75F]/50"
                      >
                        <option value="base">Base (€49/mese)</option>
                        <option value="premium">Premium (€119/3 mesi)</option>
                        <option value="enterprise">Enterprise</option>
                      </select>
                    </div>
                    <div className="flex-1 min-w-32">
                      <label className="block text-white/35 text-xs mb-1">Durata</label>
                      <select
                        value={licenseDuration}
                        onChange={(e) => setLicenseDuration(e.target.value)}
                        className="w-full bg-[#10141C] border border-white/10 text-white/70 text-xs rounded-lg px-2 py-2 focus:outline-none focus:border-[#C9A75F]/50"
                      >
                        <option value="1">1 mese</option>
                        <option value="3">3 mesi</option>
                        <option value="6">6 mesi</option>
                        <option value="12">12 mesi</option>
                      </select>
                    </div>
                    <button
                      onClick={() => saveLicense(u.id)}
                      disabled={licenseSaving}
                      className="bg-[#C9A75F] hover:bg-[#E0C27A] text-[#070A0D] font-semibold text-xs px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                    >
                      {licenseSaving ? "Salvataggio..." : u.license ? "Estendi / Aggiorna" : "Attiva"}
                    </button>
                  </div>
                  <p className="text-white/25 text-[10px] mt-2">Pagamento manuale — nessuna integrazione Stripe</p>
                </div>
              )}
            </div>
          ))}

          {users.length === 0 && (
            <p className="text-white/35 text-sm text-center py-6">Nessun utente</p>
          )}
        </div>
      </section>

      {/* Create User */}
      <section className="glass-card p-6">
        <h2 className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-5">Nuovo Utente</h2>

        {userError && (
          <div className="bg-[#D95D5D]/8 border border-[#D95D5D]/25 text-[#D95D5D] text-sm rounded-lg px-4 py-2.5 mb-4">
            {userError}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>Nickname *</label>
            <input
              className={inputClass}
              placeholder="mario_rossi"
              value={newNickname}
              onChange={(e) => { setNewNickname(e.target.value); setUserError(null); }}
            />
          </div>
          <div>
            <label className={labelClass}>Email (opzionale)</label>
            <input
              type="email"
              className={inputClass}
              placeholder="mario@example.com"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Password *</label>
            <input
              type="password"
              className={inputClass}
              placeholder="Minimo 6 caratteri"
              value={newUserPassword}
              onChange={(e) => { setNewUserPassword(e.target.value); setUserError(null); }}
            />
          </div>
          <div>
            <label className={labelClass}>Ruolo *</label>
            <select
              value={newUserRole}
              onChange={(e) => { setNewUserRole(e.target.value); setNewUserOwnerId(""); }}
              className={inputClass + " bg-[#10141C]"}
            >
              <option value="owner">Proprietario</option>
              <option value="concierge">Concierge</option>
              <option value="collaboratore">Collaboratore</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          {newUserRole === "concierge" && (
            <div className="sm:col-span-2">
              <label className={labelClass}>Proprietario associato (per licenza)</label>
              <select
                value={newUserOwnerId}
                onChange={(e) => setNewUserOwnerId(e.target.value)}
                className={inputClass + " bg-[#10141C]"}
              >
                <option value="">— Nessuno (gestito dall&apos;admin) —</option>
                {users
                  .filter((u) => u.role === "owner")
                  .map((u) => (
                    <option key={u.id} value={u.id}>{u.nickname}</option>
                  ))}
              </select>
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <button onClick={createUser} disabled={creatingUser} className={primaryBtn}>
            {creatingUser ? "Creazione..." : "Crea Utente"}
          </button>
        </div>
      </section>

      {/* Confirm delete user */}
      {deleteUserConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="glass-modal p-6 w-full max-w-sm">
            <h2 className="text-white/90 font-semibold text-lg mb-2">Elimina utente</h2>
            <p className="text-white/50 text-sm mb-6">
              Sei sicuro di voler eliminare l&apos;utente{" "}
              <span className="text-white/90 font-medium">{deleteUserConfirm.nickname}</span>? Questa azione è irreversibile.
            </p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setDeleteUserConfirm(null)} className={secondaryBtn}>
                Annulla
              </button>
              <button
                onClick={() => deleteUser(deleteUserConfirm.id)}
                disabled={deletingUser}
                className={dangerBtn + " px-4 py-2 text-sm"}
              >
                {deletingUser ? "Eliminazione..." : "Elimina"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
