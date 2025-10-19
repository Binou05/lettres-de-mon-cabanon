// client/src/pages/AdminOrders.jsx
import { useEffect, useMemo, useState } from "react";
import "./AdminOrders.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

// Normalise l'adresse (Stripe ou autre) pour qu'on ait toujours les mêmes clés
function normalizeAddress(order) {
  const s = order?.shipping || {};
  const a = s.address || {};
  return {
    name: s.name || order?.customer?.name || "",
    line1: a.line1 || a.address_line_1 || "",
    line2: a.line2 || a.address_line_2 || "",
    postal_code: a.postal_code || "",
    city: a.city || a.admin_area_2 || "",
    state: a.state || a.admin_area_1 || "",
    country: a.country || a.country_code || "",
  };
}

// Adresse sur UNE seule ligne (pour le PDF et les listes)
function addrOneLine(order) {
  const a = normalizeAddress(order);
  return [a.name, a.line1, a.line2, a.postal_code, a.city, a.state, a.country]
    .filter(Boolean)
    .join(", ");
}

// Adresse multilignes (pour l’affichage carte)
function formatAddress(order) {
  const a = normalizeAddress(order);
  const lines = [
    a.name,
    a.line1,
    a.line2,
    `${a.postal_code || ""} ${a.city || ""}`.trim(),
    a.state,
    a.country,
  ].filter(Boolean);
  return lines.join("\n");
}

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [adminKeyInput, setAdminKeyInput] = useState("");
  const [adminKey, setAdminKey] = useState(
    () => localStorage.getItem("cabanon-admin-key") || ""
  );

  async function fetchOrders(key) {
    setLoading(true);
    setErr("");
    try {
      const res = await fetch(`${API_BASE}/api/admin/orders`, {
        headers: {
          "Content-Type": "application/json",
          cabanon2025: key, 
        },
      });
      if (res.status === 401) throw new Error("Clé admin invalide");
      if (!res.ok) throw new Error(`HTTP ${res.status} – ${await res.text()}`);
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (e) {
      setErr(e.message || "Erreur chargement des commandes");
      if (String(e.message).toLowerCase().includes("clé admin")) {
        localStorage.removeItem("cabanon-admin-key");
        setAdminKey("");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (adminKey) fetchOrders(adminKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminKey]);

  const filtered = useMemo(() => {
    if (!q.trim()) return orders;
    const s = q.toLowerCase();
    return orders.filter((o) => JSON.stringify(o).toLowerCase().includes(s));
  }, [orders, q]);

  const summary = useMemo(() => {
    const count = filtered.length;
    const qty = filtered.reduce((n, o) => n + (Number(o.qty) || 0), 0);
    const revenue = filtered.reduce((n, o) => n + (Number(o.amount) || 0), 0);
    return { count, qty, revenue };
  }, [filtered]);

  async function copyToClipboard(text, okMsg) {
    try {
      await navigator.clipboard.writeText(text);
      alert(okMsg);
    } catch {
      alert("Action impossible (presse-papiers)");
    }
  }

  const copyAddress = (o) => {
    const t = formatAddress(o);
    if (!t) return alert("Adresse manquante");
    copyToClipboard(t, "Adresse copiée ✅");
  };
  const copyEmail = (o) => {
    const t = o?.customer?.email;
    if (!t) return alert("Email manquant");
    copyToClipboard(t, "Email copié ✅");
  };
async function handleDelete(orderId) {
  if (
    !window.confirm("Supprimer cette commande ? Cette action est définitive.")
  )
    return;
  try {
    const res = await fetch(`${API_BASE}/api/admin/orders/${orderId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...(adminKey ? { cabanon2025: adminKey } : {}),
      },
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data?.ok)
      throw new Error(data?.error || "Suppression impossible");
    setOrders((prev) => prev.filter((o) => o._id !== orderId)); // maj locale
  } catch (e) {
    alert(e.message);
  }
}

  // 👉 Export PDF — placé DANS le composant pour accéder à `filtered`
  function downloadPDF() {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const title = "Commandes – Encre de sel";
    const now = new Date().toLocaleString();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(title, 40, 40);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(
      `Export du ${now} — Livraison estimée : 2 à 6 jours ouvrés`,
      40,
      60
    );

    const head = [
      [
        "ID",
        "Client",
        "Email",
        "Adresse (ligne)",
        "Qté",
        "Montant",
        "Statut",
        "Date",
      ],
    ];
    const body = filtered.map((o) => [
      o.id || "",
      o.customer?.name || "",
      o.customer?.email || "",
      addrOneLine(o),
      String(o.qty ?? ""),
      o.amount ? `${Number(o.amount).toFixed(2)} €` : "—",
      o.status || "",
      o.createdAt ? new Date(o.createdAt).toLocaleString() : "—",
    ]);

 autoTable(doc, {
    startY: 80,
    head,
    body,
    styles: { fontSize: 9, cellPadding: 6 },
    headStyles: { fillColor: [0, 79, 113] },
    alternateRowStyles: { fillColor: [248, 245, 239] },
    columnStyles: {
      0: { cellWidth: 80 },
      1: { cellWidth: 120 },
      2: { cellWidth: 140 },
      3: { cellWidth: 170 },
      4: { halign: "right", cellWidth: 40 },
      5: { halign: "right", cellWidth: 60 },
      6: { cellWidth: 60 },
      7: { cellWidth: 100 },
    },
  });
   

    doc.save(`commandes_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  function handleLogin(e) {
    e.preventDefault();
    const key = adminKeyInput.trim();
    if (!key) return;
    localStorage.setItem("cabanon-admin-key", key);
    setAdminKey(key);
    setAdminKeyInput("");
  }

  function handleLogout() {
    localStorage.removeItem("cabanon-admin-key");
    setAdminKey("");
    setOrders([]);
  }

  // ---- Login
  if (!adminKey) {
    return (
      <div className="admin-login-wrap">
        <h1 className="admin-title">Accès commandes</h1>
        <p className="admin-subtitle">
          Entre ta clé admin pour afficher les commandes.
        </p>
        <form onSubmit={handleLogin} className="admin-form">
          <input
            type="password"
            placeholder="Clé admin"
            value={adminKeyInput}
            onChange={(e) => setAdminKeyInput(e.target.value)}
            className="admin-input"
          />
          <button type="submit" className="btn btn-primary">
            Se connecter
          </button>
        </form>
        {err && <p className="admin-error">{err}</p>}
      </div>
    );
  }

  // ---- Liste
  return (
    <div className="admin-shell">
      <div className="admin-header">
        <h1 className="admin-title">Commandes</h1>
        <div className="admin-actions">
          <button onClick={downloadPDF} className="btn btn-ghost">
            Exporter PDF
          </button>
          <button onClick={handleLogout} className="btn btn-primary">
            Se déconnecter
          </button>
        </div>
      </div>

      <div className="admin-search">
        <input
          placeholder="Rechercher (nom, email, ville, id...)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="admin-input"
        />
      </div>

      <div className="admin-summary">
        <div>
          <b>Commandes :</b> {summary.count}
        </div>
        <div>
          <b>Quantité totale :</b> {summary.qty}
        </div>
        <div>
          <b>CA :</b> {summary.revenue.toFixed(2)} €
        </div>
      </div>

      {loading ? (
        <p>Chargement…</p>
      ) : err ? (
        <p className="admin-error">{err}</p>
      ) : filtered.length === 0 ? (
        <p>Aucune commande.</p>
      ) : (
        <div className="admin-grid">
          {filtered.map((o) => {
            const addrText = formatAddress(o);
            const hasAddress = !!addrText.trim();
            const isPaid =
              (o.status || "").toLowerCase() === "paid" ||
              (o.status || "").toLowerCase() === "payé";
            return (
              <div className="admin-card" key={o.id}>
                {/* Client */}
                <div>
                  <div className="admin-name">
                    {o.customer?.name || "(nom inconnu)"}
                  </div>
                  <div className="admin-email">
                    {o.customer?.email ? (
                      <>
                        <a
                          href={`mailto:${o.customer.email}`}
                          className="admin-email-link"
                        >
                          {o.customer.email}
                        </a>
                        <button
                          onClick={() => copyEmail(o)}
                          className="btn btn-ghost btn-xs"
                        >
                          Copier
                        </button>
                      </>
                    ) : (
                      "—"
                    )}
                  </div>

                  <div className="admin-address">
                    {hasAddress ? (
                      addrText
                    ) : (
                      <span className="admin-address-missing">
                        — adresse manquante —
                      </span>
                    )}
                  </div>
                </div>

                {/* Infos commande */}
                <div>
                  <div>
                    <b>Commande :</b> <span className="mono">{o.id}</span>
                  </div>
                  <div>
                    <b>Date :</b>{" "}
                    {o.createdAt ? new Date(o.createdAt).toLocaleString() : "—"}
                  </div>
                  <div>
                    <b>Paiement :</b> {o.provider}
                  </div>
                  <div>
                    <b>Statut :</b>{" "}
                    <span
                      className={`badge ${
                        isPaid ? "badge-success" : "badge-warn"
                      }`}
                    >
                      {o.status || "inconnu"}
                    </span>
                  </div>
                </div>

                {/* Montants + actions */}
                <div className="admin-right">
                  <div className="admin-amount">
                    {o.amount ? `${Number(o.amount).toFixed(2)} €` : "— €"}
                  </div>
                  <div>
                    Quantité : <b>{o.qty}</b>
                  </div>
                  <div className="admin-actions-col">
                    <button
                      onClick={() => copyAddress(o)}
                      className="btn btn-ghost"
                    >
                      Copier l’adresse
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(o._id)}
                    className="btn btn-danger"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
   
  );
}
