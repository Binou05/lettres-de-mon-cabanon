import { useState } from "react";
import { useNavigate } from "react-router-dom";

const palette = {
  sand: "#F6F0E8",
  teal: "#004f71",
  tealLight: "#004f71",
  charcoal: "#004f71",
  white: "#fff",
};
export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const expectedKey = "cabanon2025"; // on ne lit plus process.env côté client
    if (password === expectedKey) {
      localStorage.setItem("cabanon-admin-key", password);
      navigate("/admin/orders");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: palette.sand,
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 440,
          background: palette.white,
          border: "1px solid #88663fff",
          borderRadius: 16,
          boxShadow: "0 6px 24px rgba(0,0,0,0.05)",
          padding: 24,
        }}
      >
        <h1 style={{ margin: 0, color: palette.teal }}>Accès Admin</h1>
        <p style={{ marginTop: 8, color: "#666" }}>
          Saisis la clé administrateur pour consulter les commandes.
        </p>

        <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
          <input
            type="password"
            placeholder="Clé admin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid #e6e6e6",
              outline: "none",
              fontSize: 16,
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              padding: "12px 16px",
              borderRadius: 999,
              border: "none",
              background: palette.teal,
              color: palette.white,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Se connecter
          </button>
          {error && (
            <div style={{ color: "#b00020", fontWeight: 600 }}>{error}</div>
          )}
        </div>
      </div>
    </div>
  );
}