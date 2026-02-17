// src/pages/Mentions.jsx
import SEO from "../components/SEO";
import "./Legal.css";
export default function Mentions() {
  return (
    <>
      <SEO
        title="Mentions légales — Encre de sel"
        description="Mentions légales du site Encre de sel."
        canonical="https://encre-de-sel.fr/mentions-legales"
        ogImage="/og-cover.jpg"
      />

      <main className="legal legal--mentions">
        {/* Sommaire (collant sur desktop) */}
        <aside className="legal-toc" aria-label="Sommaire">
          <div className="legal-toc__title">Sommaire</div>
          <ul>
            <li>
              <a href="#editeur">Éditeur du site</a>
            </li>
            <li>
              <a href="#hebergeur">Hébergement</a>
            </li>
            <li>
              <a href="#propriete">Propriété intellectuelle</a>
            </li>
            <li>
              <a href="#responsabilite">Responsabilité</a>
            </li>
            <li>
              <a href="#donnees">Données personnelles</a>
            </li>
            <li>
              <a href="#cookies">Cookies</a>
            </li>
          </ul>
        </aside>

        {/* Contenu principal */}
        <article className="legal__content">
          <h1 className="legal__title">Mentions légales</h1>
          <p className="legal__meta">
            Dernière mise à jour : <time dateTime="2025-10-10">10/10/2025</time>
          </p>

          <section id="editeur">
            <h2>Éditeur du site</h2>
            <p>
              <strong>Encre de sel — Richard ARNAUD</strong>
              <br />
              Adresse : <strong>[Adresse postale]</strong>
              <br />
              Email :{" "}
              <a href="mailto:arnaudrichard1947@gmail.com">
                <strong>[email]</strong>
              </a>{" "}
              · Tél. : <strong>[téléphone]</strong>
              <br />
              Statut juridique :{" "}
              <strong>[micro-entreprise / association / etc.]</strong>
              <br />
            </p>
          </section>

          <section id="hebergeur">
            <h2>Hébergement</h2>
            <p>
              <strong>[Nom de l’hébergeur]</strong>
              <br />
              Adresse : <strong>[Adresse de l’hébergeur]</strong>
              <br />
              Site :{" "}
              <a href="[URL]" rel="noopener noreferrer" target="_blank">
                <strong>[URL]</strong>
              </a>{" "}
              · Tél. : <strong>[téléphone]</strong>
            </p>
          </section>

          <section id="propriete">
            <h2>Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus (textes, visuels, logos, mises en page,
              code) présents sur le site sont protégés par le droit d’auteur
              et/ou la propriété industrielle. Toute reproduction,
              représentation, adaptation ou diffusion, totale ou partielle, sans
              autorisation écrite préalable est interdite.
            </p>
          </section>

          <section id="responsabilite">
            <h2>Responsabilité</h2>
            <p>
              L’éditeur s’efforce d’assurer l’exactitude et la mise à jour des
              informations publiées mais ne saurait être tenu responsable
              d’erreurs, d’omissions ou d’indisponibilités du service.
              L’utilisation du site se fait sous la seule responsabilité de
              l’utilisateur.
            </p>
            <div className="callout">
              <strong>Information :</strong> des liens externes peuvent pointer
              vers d’autres sites. Encre de sel n’exerce aucun contrôle sur leur
              contenu et décline toute responsabilité à leur égard.
            </div>
          </section>

          <section id="donnees">
            <h2>Données personnelles</h2>
            <p>
              Pour toute information sur vos droits (accès, rectification,
              opposition, effacement, limitation, portabilité) au titre du RGPD,
              consultez la{" "}
              <a href="/donnees-personnelles">
                Politique de protection des données
              </a>
            </p>
          </section>

          <section id="cookies">
            <h2>Cookies</h2>
            <p>
              Le site peut utiliser des cookies techniques (nécessaires), de
              mesure d’audience et/ou liés au paiement (Stripe). Vous pouvez
              gérer vos préférences via le bandeau de consentement et dans les
              réglages de votre navigateur.
            </p>
          </section>

          <footer className="legal__footer">
            Éditeur : Encre de sel — Richard Arnaud · Contact :{" "}
            <a href="mailto:[arnaudrichard1947@gmail.com]">[email]</a>
          </footer>
        </article>
      </main>
    </>
  );
}
