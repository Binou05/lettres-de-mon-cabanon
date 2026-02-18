// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
useEffect(() => {
  const handleScroll = () => setOpen(false);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

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
            <Link to="/" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              À propos
            </Link>
          </li>
          <li>
            <Link to="/book" onClick={closeMenu}>
              Livre
            </Link>
          </li>
          <li>
            <Link to="/critiques" onClick={closeMenu}>
              Critiques
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
