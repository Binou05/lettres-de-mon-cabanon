// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Encre de sel. Tous droits réservés.
        </p>
       
      </div>
    </footer>
  );
}
