// client/src/pages/ThankYou.jsx
import { useMemo } from "react";
import "./thankyou.css";

export default function ThankYou() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const provider = params.get("provider") || "paiement";
  const qty = Math.max(1, Number(params.get("qty") || 1));
  const name = params.get("name") ? decodeURIComponent(params.get("name")) : "";
  const email = params.get("email")
    ? decodeURIComponent(params.get("email"))
    : "";
  const amount = params.get("amount");
  const amountText = amount ? `${Number(amount).toFixed(2)} €` : null;

  return (
    <div className="thankyou-page">
      <div className="paper-bg" />
      <div className="ty-card">
        <div className="ty-header">
          <div className="ty-icon" aria-hidden>
            {/* coche succès */}
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path d="M20.285 6.709a1 1 0 0 1 0 1.414l-9.19 9.19a1 1 0 0 1-1.414 0L3.715 11.346a1 1 0 0 1 1.414-1.414l4.05 4.05 8.483-8.483a1 1 0 0 1 1.414 0z" />
            </svg>
          </div>
          <h1>Merci pour votre achat !</h1>
          <p className="ty-sub">
            Paiement confirmé via <strong>{provider}</strong>.
          </p>
        </div>

        <div className="ty-body">
          <dl>
            <div className="row">
              <dt>Quantité</dt>
              <dd>{qty}</dd>
            </div>
            {name && (
              <div className="row">
                <dt>Nom</dt>
                <dd>{name}</dd>
              </div>
            )}
            {email && (
              <div className="row">
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${email}`}>{email}</a>
                </dd>
              </div>
            )}
            {amountText && (
              <div className="row">
                <dt>Total payé</dt>
                <dd className="price">{amountText}</dd>
              </div>
            )}
          </dl>

          {!amountText && (
            <p className="hint">
              (Le montant n’a pas été transmis dans l’URL — c’est normal si la
              redirection est automatique.)
            </p>
          )}
        </div>
        <p style={{ marginTop: 12 }}>
          📦 Votre commande sera expédiée sous 2 à 6 jours ouvrés.
        </p>

        <div className="ty-actions">
          <a className="btn btn-primary" href="/">
            Retour à l’accueil
          </a>
          <a className="btn btn-ghost" href="/book">
            Voir le livre
          </a>
        </div>
      </div>
    </div>
  );
}
