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
      <section class="critiques-externe">
        <p class="critiques-phrase">
          « Ils ont lu <em>Lettres de mon cabanon</em>… et ils en parlent mieux
          que nous.
          <br />
          Découvrez leurs avis sur le site de l’éditeur. »
        </p>

        <a
          class="btn-avis"
          href="https://www.compagnie-litteraire.com/livre/lettres-de-mon-cabanon-richard-arnaud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir les avis des lecteurs de l'éditeur Compagnie Littéraire
        </a>
        <a
          class="btn-avis"
           href="https://www.babelio.com/recherche.php?res_recherche=Lettres%20de%20mon%20cabanon%20Histoires%20d%27eaux%20Richard%20Arnaud"
      
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir les avis des lecteurs sur Babelio
        </a>
      </section>
      ;
    </main>
  );
}
