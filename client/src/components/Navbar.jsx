// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* marque (logo + titre) */}
        <div className="navbar__brand">
          <Link to="/" className="navbar__brand-link">
            <img src={logo} alt="Encre de sel logo" className="navbar__logo" />
            <span className="navbar__title">Encre de sel</span>
          </Link>
        </div>

        <button
          className={`navbar__burger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${open ? "open" : ""}`}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <li>
            <Link to="/book">Livre</Link>
          </li>
          <li>
            <Link to="/critiques">Critiques</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
