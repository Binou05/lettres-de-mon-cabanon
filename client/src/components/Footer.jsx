// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="copyright">
          © {new Date().getFullYear()} Encre de sel. Tous droits réservés.
        </p>

        <nav aria-label="Liens légaux" className="footer-legal">
          <Link to="/cgu">CGU</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/mentions-legales">Mentions légales</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/donnees-personnelles">Politique de confidentialité</Link>
        </nav>
      </div>
    </footer>
  );
}
