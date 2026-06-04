import { useEffect, useState } from "react";
import { getGoogleContent } from "../services/googleContent";
import "./Galerie2026.css";

export default function Galerie2026() {
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGalerie() {
      try {
        const data = await getGoogleContent("galerie2026");
        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("La galerie n’est pas disponible pour le moment.");
      } finally {
        setLoading(false);
      }
    }

    loadGalerie();
  }, []);

  return (
    <main className="galerie-page">
      <section className="galerie-wrapper">
        <h1 className="galerie-title">Affiches & Photos</h1>

        <p className="galerie-intro">
          Retrouvez ici les affiches, photos, salons de dédicaces et festivals
          autour de l’univers du livre.
        </p>

        {loading && (
          <p className="galerie-message">Chargement de la galerie...</p>
        )}

        {error && (
          <p className="galerie-message galerie-message--error">{error}</p>
        )}

        {!loading && !error && items.length === 0 && (
          <p className="galerie-message">
            Aucune image ajoutée pour le moment.
          </p>
        )}

        <div className="galerie-grid">
          {items.map((item, index) => (
            <article
              className={`galerie-card ${
                item.categorie?.toLowerCase() === "affiche"
                  ? "galerie-card--featured"
                  : ""
              }`}
              key={`${item.titre}-${index}`}
              onClick={() => setSelectedImage(item)}
            >
              <div className="galerie-card__image">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.imageAlt || item.titre}
                    loading="lazy"
                  />
                ) : (
                  <div className="galerie-card__placeholder">Image à venir</div>
                )}
              </div>

              {(item.titre || item.date || item.ville || item.description) && (
                <div className="galerie-card__content">
                  {item.categorie && <span>{item.categorie}</span>}

                  {item.titre && <h2>{item.titre}</h2>}

                  {(item.date || item.ville) && (
                    <p className="galerie-card__meta">
                      {item.date ? formatDateFr(item.date) : ""}
                      {item.ville ? ` — ${item.ville}` : ""}
                    </p>
                  )}

                  {item.description && <p>{item.description}</p>}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="galerie-modal" onClick={() => setSelectedImage(null)}>
          <button className="galerie-modal__close" type="button">
            ×
          </button>

          <div
            className="galerie-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.imageAlt || selectedImage.titre}
            />

            <div className="galerie-modal__text">
              {selectedImage.titre && <h2>{selectedImage.titre}</h2>}

              {(selectedImage.date || selectedImage.ville) && (
                <p>
                  {selectedImage.date ? formatDateFr(selectedImage.date) : ""}
                  {selectedImage.ville ? ` — ${selectedImage.ville}` : ""}
                </p>
              )}

              {selectedImage.description && <p>{selectedImage.description}</p>}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function formatDateFr(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}
