import { useEffect, useState } from "react";
import { getGoogleContent } from "../services/googleContent";
import "./Salons.css";

function formatDateFr(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Salons() {
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSalons() {
      try {
        const data = await getGoogleContent("salons");
        setSalons(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("Les salons ne sont pas disponibles pour le moment.");
      } finally {
        setLoading(false);
      }
    }

    loadSalons();
  }, []);

 return (
  <main className="salons-page">
    <section className="salons-wrapper">
      <div className="salons-hero">
        <p className="salons-hero__eyebrow">Encre de Sel</p>

        <h1>Salons & dédicaces à venir</h1>

        <p>
          Retrouvez ici les prochaines rencontres, séances de dédicaces,
          festivals et rendez-vous autour du livre de Richard Arnaud.
        </p>
      </div>

      {loading && <p className="salons-message">Chargement des salons...</p>}

      {error && (
        <p className="salons-message salons-message--error">{error}</p>
      )}

      {!loading && !error && salons.length === 0 && (
        <p className="salons-message">Aucun salon annoncé pour le moment.</p>
      )}

      <div className="salons-grid">
        {salons.map((salon, index) => (
          <article
            className={`salon-card ${
              !salon.afficheUrl ? "salon-card--no-image" : ""
            }`}
            key={`${salon.titre}-${index}`}
          >
            {salon.afficheUrl && (
              <div className="salon-card__image">
                <img
                  src={salon.afficheUrl}
                  alt={salon.titre}
                  loading="lazy"
                />
              </div>
            )}

            <div className="salon-card__content">
              {salon.type && (
                <span className="salon-card__tag">{salon.type}</span>
              )}

              <h2>{salon.titre}</h2>

              <div className="salon-card__meta">
                {salon.dateDebut && (
                  <p>
                    <strong>Date :</strong> {formatDateFr(salon.dateDebut)}
                    {salon.dateFin && salon.dateFin !== salon.dateDebut
                      ? ` au ${formatDateFr(salon.dateFin)}`
                      : ""}
                  </p>
                )}

                {salon.heure && (
                  <p>
                    <strong>Horaire :</strong> {salon.heure}
                  </p>
                )}

                {(salon.lieu || salon.ville) && (
                  <p>
                    <strong>Lieu :</strong> {salon.lieu}
                    {salon.ville ? ` — ${salon.ville}` : ""}
                  </p>
                )}

                {salon.adresse && (
                  <p>
                    <strong>Adresse :</strong> {salon.adresse}
                  </p>
                )}
              </div>

              {salon.description && (
                <p className="salon-card__description">
                  {salon.description}
                </p>
              )}

              {salon.lien && (
                <a
                  href={salon.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="salon-card__button"
                >
                  Voir l’événement
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
 );
}