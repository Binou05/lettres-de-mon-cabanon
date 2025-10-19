// client/src/pages/Buy.jsx
import { useEffect, useState, useMemo } from "react";
import "./Buy.css";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

// Force un nombre valide
const toNumber = (v) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

// Formatte joliment en €
const toEUR = (v) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(
    toNumber(v)
  );

export default function Buy() {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("FR");
  
  useEffect(() => {
    fetch(`${API_BASE}/api/product`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setProduct)
      .catch((e) => console.error("GET /api/product:", e));
  }, []);

  const total = useMemo(() => {
    if (!product) return 0;
    const unit = toNumber(product?.price); // ✅ price (euros)
    const ship = toNumber(product?.shipping); // ✅ shipping (euros)
    return unit * toNumber(qty) + ship;
  }, [product, qty]);

  async function handleStripe() {
    if (
      !name.trim() ||
      !email.trim() ||
      !line1.trim() ||
      !postalCode.trim() ||
      !city.trim() ||
      !country.trim()
    ) {
      alert("Merci de renseigner votre nom, email et l’adresse complète.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/checkout/stripe-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity: qty,
          customerName: name.trim(),
          customerEmail: email.trim(),
          shipping: {
            name: name.trim(),
            address: {
              line1: line1.trim(),
              line2: line2.trim(),
              postal_code: postalCode.trim(),
              city: city.trim(),
              country: country.trim(),
            },
          },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data?.id || !data?.url) {
        throw new Error(data?.error || "Erreur Stripe");
      }
      window.location.href = data.url; // redirection Stripe
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
   
   
    <section className="buy">
      <div className="buy__wrap">
        <h1 className="buy__title">Acheter le livre</h1>

        {!product ? (
          <p className="buy__loading">Chargement…</p>
        ) : (
          <div className="buy__grid">
            {/* carte produit */}
            <div className="card card--product">
              <h2 className="card__title">{product.title}</h2>

              <ul className="card__facts">
                <li>
                  <span>Prix unitaire</span>
                  <b>{toEUR(product?.price)}</b> {/* ✅ */}
                </li>
                <li>
                  <span>Frais de port</span>
                  <b>{toEUR(product?.shipping)}</b> {/* ✅ */}
                </li>
                <li>
                  <span>Stock disponible</span>
                  <b>{toNumber(product?.stock)}</b>
                </li>
              </ul>

              <div className="qty">
                <label htmlFor="qty">Quantité </label>
                <div className="qty__controls">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Diminuer"
                  >
                    −
                  </button>
                  <input
                    id="qty"
                    type="number"
                    min={1}
                    max={toNumber(product?.stock) || 99}
                    value={qty}
                    onChange={(e) =>
                      setQty(
                        Math.max(
                          1,
                          Math.min(
                            toNumber(product?.stock) || 99,
                            Number(e.target.value)
                          )
                        )
                      )
                    }
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setQty((q) =>
                        Math.min(toNumber(product?.stock) || 99, q + 1)
                      )
                    }
                    aria-label="Augmenter"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="total">
                <span>Total</span>
                <b>{toEUR(total)}</b> {/* ✅ */}
              </div>
            </div>

            {/* formulaire */}
            <div className="card card--form">
              <h2 className="card__title">Vos coordonnées</h2>

              <div className="form">
                <div className="form__row">
                  <label>Nom complet</label>
                  <input
                    placeholder="Ex : Jeanne Martin"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form__row">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="vous@exemple.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <h3 className="buy__subtitle">Adresse de livraison</h3>

                <div className="form__row">
                  <label>Adresse (ligne 1)</label>
                  <input
                    placeholder="12 rue des Glycines"
                    value={line1}
                    onChange={(e) => setLine1(e.target.value)}
                  />
                </div>

                <div className="form__row">
                  <label>Adresse (ligne 2, optionnel)</label>
                  <input
                    placeholder="Bât A, appt 12"
                    value={line2}
                    onChange={(e) => setLine2(e.target.value)}
                  />
                </div>

                <div className="form__row form__row--two">
                  <div>
                    <label>Code postal</label>
                    <input
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Ville</label>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form__row">
                  <label>Pays</label>
                  <input
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="FR"
                  />
                </div>
                <button
                  className="btn btn--stripe"
                  onClick={handleStripe}
                  disabled={
                    loading ||
                    !name ||
                    !email ||
                    !line1 ||
                    !postalCode ||
                    !city ||
                    !country
                  }
                >
                  {loading ? "Redirection…" : "Payer par carte (Stripe)"}
                </button>

                <p className="hint">
                  Paiement sécurisé • Redirection vers Stripe Checkout
                  <br />
                  📦 Livraison estimée : 2 à 6 jours ouvrés (adresse demandée
                  sur la page de paiement)
                </p>
              </div>
            </div>
          </div>
        )}
        </div>
      
      </section>
    </>
  );
}
