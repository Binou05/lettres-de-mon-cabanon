import { CRITIQUES } from "../data/critiques";
import "./Critiques.css";

export default function Critiques() {
  return (
    <main className="critiques-page">
      <section className="critiques-shell">
        <h1 className="critiques-title">Critiques</h1>
        <p className="critiques-subtitle">
          Sélection d’avis et retours lecteurs.
        </p>

        <div className="critiques-grid">
          {CRITIQUES.map((c) => (
            <article key={c.id} className="critique-card">
              <h3 className="critique-source">{c.source}</h3>

              <p className="critique-meta">
                <span className="critique-author">{c.auteur}</span>
                {c.date ? (
                  <span className="critique-date">• {c.date}</span>
                ) : null}
              </p>

              <blockquote className="critique-quote">“{c.extrait}”</blockquote>

              <div className="critique-tags">
                {(c.tags || []).map((t) => (
                  <span key={t} className="critique-tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
