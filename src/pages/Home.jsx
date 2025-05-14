import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import heroImg from "../assets/Lettres-de-mon-cabanon1.png"; 

function Home() {
  return (
    <>
      <Navbar />
      <header
        className="hero fullbleed h-100vh"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>
            <span>Richard Arnaud</span>
            <br />
            <span className="couleur-accent">
              Lettres de mon cabanon
              <br />
              “Histoires d’eaux”
            </span>
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
