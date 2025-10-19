import SEO from "../components/SEO";
import "./Legal.css";

export default function Privacy() {
  const lastUpdate = "10/10/2025";
  return (
    <>
      <SEO
        title="Politique de confidentialité — Encre de sel"
        description="Politique de protection des données (RGPD) du site Encre de sel."
        canonical="https://encre-de-sel.fr/donnees-personnelles"
        ogImage="/og-cover.jpg"
      />

      {/* ==> classe à mettre ici */}
      <main className="legal legal--privacy">
        <h1>Politique de confidentialité</h1>
        <p className="legal__meta">Dernière mise à jour : {lastUpdate}</p>

        {/* colonne gauche : sommaire */}
        <aside className="legal-toc" aria-label="Sommaire">
          <h3 className="legal-toc__title">Sommaire</h3>
          <ol>
            <li>
              <a href="#id-responsable">1. Identité du responsable</a>
            </li>
            <li>
              <a href="#bases-legales">2. Bases légales</a>
            </li>
            <li>
              <a href="#donnees-traitees">3. Données traitées</a>
            </li>
            <li>
              <a href="#finalites">4. Finalités</a>
            </li>
            <li>
              <a href="#durees">5. Durées de conservation</a>
            </li>
            <li>
              <a href="#destinataires">6. Destinataires</a>
            </li>
            <li>
              <a href="#droits">7. Vos droits (RGPD)</a>
            </li>
            <li>
              <a href="#cookies">8. Cookies</a>
            </li>
            <li>
              <a href="#securite">9. Sécurité</a>
            </li>
            <li>
              <a href="#maj">10. Mise à jour</a>
            </li>
          </ol>
        </aside>

        {/* colonne droite : contenu */}
        <article className="legal__content">
          <h2 id="id-responsable">1) Identité du responsable</h2>
          <p>
            <strong>[Encre de sel / Richard ARNAUD]</strong> — contact :
            <a href="mailto:contact@encre-de-sel.fr">
              {" "}
              contact@encre-de-sel.fr
            </a>
            .
          </p>

          <h2 id="bases-legales">2) Bases légales</h2>
          <ul>
            <li>Exécution d’un contrat (commande, livraison).</li>
            <li>Intérêt légitime (sécurité, lutte contre la fraude).</li>
            <li>Consentement (newsletter, cookies non essentiels).</li>
            <li>Obligation légale (facturation).</li>
          </ul>

          <h2 id="donnees-traitees">3) Données traitées</h2>
          <ul>
            <li>Identité et coordonnées : nom, email, adresse de livraison.</li>
            <li>Données de paiement via Stripe (nous n’y avons pas accès).</li>
            <li>Données techniques (logs, sécurité, mesure d’audience).</li>
          </ul>

          <h2 id="finalites">4) Finalités</h2>
          <ul>
            <li>Traitement des commandes et livraisons.</li>
            <li>Suivi relation client, réponse aux messages.</li>
            <li>Sécurité du site, prévention de la fraude.</li>
            <li>Statistiques (si consenties).</li>
          </ul>

          <h2 id="durees">5) Durées de conservation</h2>
          <ul>
            <li>Clients : relation + 3 ans (prospection).</li>
            <li>Factures : 10 ans (obligation légale).</li>
            <li>Logs techniques : 12 mois max.</li>
          </ul>

          <h2 id="destinataires">6) Destinataires</h2>
          <ul>
            <li>Prestataires techniques (hébergeur) et paiement (Stripe).</li>
            <li>Outils analytics (si activés et consentis).</li>
          </ul>

          <h2 id="droits">7) Vos droits (RGPD)</h2>
          <ul>
            <li>Droit d’accès, rectification, effacement.</li>
            <li>Droit d’opposition et de limitation.</li>
            <li>Droit à la portabilité.</li>
            <li>Retrait du consentement à tout moment.</li>
          </ul>
          <p>
            Exercez vos droits :{" "}
            <a href="mailto:contact@encre-de-sel.fr">contact@encre-de-sel.fr</a>
            . CNIL :{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
              cnil.fr
            </a>
            .
          </p>

          <h2 id="cookies">8) Cookies</h2>
          <p>
            Cookies techniques nécessaires. Cookies d’audience/marketing déposés
            uniquement avec votre consentement (bandeau). Paramétrage possible
            via le navigateur.
          </p>

          <h2 id="securite">9) Sécurité</h2>
          <p>
            Mesures raisonnables : chiffrement TLS, contrôles d’accès,
            sauvegardes, anti-intrusion.
          </p>

          <h2 id="maj">10) Mise à jour</h2>
          <p>Dernière mise à jour : {lastUpdate}.</p>
        </article>
      </main>
    </>
  );
}
