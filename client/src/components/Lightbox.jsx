import React from "react";
import "./Lightbox.css";

export default function Lightbox({ src, onClose }) {
  if (!src) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <img src={src} alt="Zoom" className="lightbox__img" />
    </div>
  );
}
