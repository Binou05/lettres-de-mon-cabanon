import React from "react";
import "./Home.css";

import heroImg from "../assets/images/Lettres-de-mon-cabanon1.png";
import photopapa from "../assets/images/photopapa.jpg";

function Home() {
  return (
    <>
      <header
        className="hero fullbleed between-nav-footer"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="papa-frame">
          <img
            src={photopapa}
            alt=""
            aria-hidden="true"
            className="papa-deco"
            loading="lazy"
          />
        </div>

        <div className="hero-overlay">
          <h1>
            <span>Richard ARNAUD</span>
            <br />
            <span className="couleur-accent line1">Lettres de mon cabanon</span>
            <br />
            <span className="couleur-accent line2">“Histoires d’eaux”</span>
          </h1>

          <div className="sous-titre">
            <span className="texte-accroche">
              Des récits aux parfums de vérité, des contes du Midi !
            </span>
          </div>
        </div>
      </header>
    </>
  );
}
export default Home;
