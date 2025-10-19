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
          <img src={logo} alt="Encre de sel logo" className="navbar__logo" />
          <span className="navbar__title">Encre de sel</span>
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
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">À propos</a>
          </li>
          <li>
            <a href="/book">Livre</a>
          </li>
          <li>
            <a href="/buy">Acheter</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
