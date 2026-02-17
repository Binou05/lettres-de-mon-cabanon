// src/pages/Cgu.jsx
import SEO from "../components/SEO";
import "./Legal.css";
export default function Cgu() {
  return (
    <>
      <SEO
        title="CGU/CGV — Encre de sel"
        description="Conditions générales d’utilisation et de vente du site Encre de sel."
        canonical="https://encre-de-sel.fr/cgu"
        ogImage="/og-cover.jpg"
      />

      <main className="legal legal--cgu">
        {/* Sommaire (collant côté gauche sur desktop) */}
        <aside className="legal-toc" aria-label="Sommaire">
          <div className="legal-toc__title">Sommaire</div>
          <ul>
            <li>
              <a href="#objet">1. Objet</a>
            </li>
            <li>
              <a href="#editeur">2. Éditeur du site</a>
            </li>
            <li>
              <a href="#acces">3. Accès au site</a>
            </li>
            <li>
              <a href="#compte">4. Compte client</a>
            </li>
            <li>
              <a href="#produits">5. Produits</a>
            </li>
            <li>
              <a href="#prix">6. Prix</a>
            </li>
            <li>
              <a href="#paiement">7. Paiement</a>
            </li>
            <li>
              <a href="#livraison">8. Livraison</a>
            </li>
            <li>
              <a href="#retractation">9. Droit de rétractation</a>
            </li>
            <li>
              <a href="#garanties">10. Garanties</a>
            </li>
            <li>
              <a href="#ip">11. Propriété intellectuelle</a>
            </li>
            <li>
              <a href="#responsabilite">12. Responsabilité</a>
            </li>
            <li>
              <a href="#donnees">13. Données & cookies</a>
            </li>
            <li>
              <a href="#liens">14. Liens externes</a>
            </li>
            <li>
              <a href="#force-majeure">15. Force majeure</a>
            </li>
            <li>
              <a href="#droit-litiges">16. Droit applicable</a>
            </li>
          </ul>
        </aside>

        {/* Contenu principal */}
        <article className="legal__content">
          <h1 className="legal__title">
            Conditions générales d’utilisation et de vente
          </h1>
          <p className="legal__meta">
            Dernière mise à jour :{" "}
            <time dateTime="[2025-10-10]">[10/10/2025]</time>
          </p>

          <section id="objet">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions régissent l’accès et l’utilisation du
              site
              <strong> https://encre-de-sel.fr </strong> (le « Site ») ainsi que
              les ventes du livre <em>« Lettres de mon cabanon »</em>.
            </p>
          </section>

          <section id="editeur">
            <h2>2. Éditeur du site</h2>
            <p>
              Éditeur : <strong>[Encre de sel / Richard ARNAUD]</strong>
              <br />
              Adresse : <strong>[Adresse postale]</strong>
              <br />
              Email :{" "}
              <a href="mailto:[arnaudrichard1947@gmail.com]">
                <strong>[email]</strong>
              </a>{" "}
              · Tél. : <strong>[téléphone]</strong>
              <br />
            </p>
          </section>

          <section id="acces">
            <h2>3. Accès au site</h2>
            <p>
              Le Site est accessible 24/7, sauf maintenance. L’éditeur ne peut
              être tenu responsable des interruptions indépendantes de sa
              volonté.
            </p>
          </section>

          <section id="compte">
            <h2>4. Compte client</h2>
            <p>
              L’achat peut nécessiter des informations exactes (nom, email,
              adresse de livraison). Vous êtes responsable des données fournies.
            </p>
          </section>

          <section id="produits">
            <h2>5. Produits</h2>
            <p>
              Ouvrage : <em>« Lettres de mon cabanon »</em>. Les photos n’ont
              pas de valeur contractuelle. Disponibilité selon stock.
            </p>
          </section>

          <section id="prix">
            <h2>6. Prix</h2>
            <p>
              Les prix sont indiqués en euros TTC, hors frais de port
              éventuellement ajoutés au panier. L’éditeur se réserve le droit de
              modifier les prix à tout moment ; le prix appliqué est celui en
              vigueur lors de la commande.
            </p>
          </section>

          <section id="garanties">
            <h2>10. Garanties</h2>
            <p>
              Les produits bénéficient des garanties légales de conformité et
              des vices cachés (C. conso. L217-3 s., C. civ. 1641 s.).
            </p>
          </section>

          <section id="ip">
            <h2>11. Propriété intellectuelle</h2>
            <p>
              Le Site, ses textes, images et le livre sont protégés. Toute
              reproduction ou utilisation non autorisée est interdite.
            </p>
          </section>

          <section id="responsabilite">
            <h2>12. Responsabilité</h2>
            <p>
              L’éditeur ne saurait être tenu responsable des dommages indirects,
              pertes de données ou préjudices liés à l’utilisation du Site.
            </p>
          </section>

          <section id="donnees">
            <h2>13. Données personnelles & cookies</h2>
            <p>
              Voir la{" "}
              <a href="/donnees-personnelles">
                Politique de protection des données
              </a>{" "}
              pour les modalités de collecte, de traitement, de conservation et
              vos droits (RGPD).
            </p>
          </section>

          <section id="liens">
            <h2>14. Liens externes</h2>
            <p>
              Le Site peut contenir des liens vers des sites tiers. L’éditeur
              n’est pas responsable de leur contenu.
            </p>
          </section>

          <section id="force-majeure">
            <h2>15. Force majeure</h2>
            <p>
              Aucune partie n’est responsable en cas d’événement imprévisible et
              irrésistible rendant impossible l’exécution de ses obligations.
            </p>
          </section>

          <section id="droit-litiges">
            <h2>16. Droit applicable – Litiges</h2>
            <p>
              Droit français. En cas de litige, vous pouvez recourir
              gratuitement à la médiation de la consommation :
              <strong> [Nom du médiateur / lien]</strong>. À défaut, compétence
              des tribunaux français.
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
