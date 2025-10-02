// src/pages/Book.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCarousel from "../components/BookCarousel";
import "./Book.css";

import coverVerso from "../assets/images/photo-verso-livre.jpg";
import coverRecto from "../assets/images/photo-recto-livre.jpg";
import imagePapa from "../assets/images/Image-papa.jpg";

export default function Book() {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  return (
    <>
      <Navbar />

      {/* 1) Hero full-bleed pour le background dégradé */}
      <div className="book-hero" />

      {/* 2) Contenu scrollable */}
      <main className="page-content book-content">
        <div className="book-frame">
          <h2 className="books-title">Mon livre</h2>

          <div className="book-covers">
            <figure
              className="book-cover"
              onClick={() => {
                setStartIndex(0);
                setOpen(true);
              }}
            >
              <img src={coverVerso} alt="Verso de la couverture" />
            </figure>

            <figure
              className="book-cover"
              onClick={() => {
                setStartIndex(1);
                setOpen(true);
              }}
            >
              <img src={coverRecto} alt="Recto de la couverture" />
            </figure>
          </div>

          <section className="book-about">
            <h1 className="titre-apropos">À propos</h1>
            <div className="separator" />

            <div className="about-intro">
              <img
                className="image-papa"
                src={imagePapa}
                alt="Portrait de l'auteur"
              />
              <p className="intro-text">
                Lettres de mon Cabanon
                <br />« Histoires d’eaux »
              </p>
            </div>

            <div className="about-text">
              <p>
                Des histoires de pêche aux parfums savoureux de contes de
                Provence…
              </p>
              <p>
                Des histoires de pêche aux parfums savoureux de contes de
                Provence où la scoumougne s’acharne, accrochée aux basques de
                Claude, personnage central du livre, et s’invite dans tous les
                lieux où le poisson frétille. Qu’elle soit douce, saumâtre ou
                salée, l’eau tout au long de notre vie nous cligne de l’œil et
                nous attire à elle avec le charme et la grâce d’une sirène.
                Comme deux poissons nous sommes souvent pris dans ses filets et
                tous ces récits naissent dans les mailles de sa complicité.
              </p>
              <p>
                Ces histoires se racontent par tradition orale lors de veillées
                ou de repas entre amis et famille ; elles déclenchent souvent
                des éclats de rire dans l’auditoire, même quand elles frôlent le
                drame humain.
              </p>
              <p>
                C’est depuis mon petit Cabanon familial ancré sur le They de
                Brûle-Tabac à Port-Saint-Louis-du-Rhône, que, pour éviter que
                toutes ces histoires authentiques ne se perdent dans la nuit des
                temps, je les ai couchées sur le papier sans prétention
                littéraire par devoir de mémoire.
              </p>
              <p>
                Je remercie chaleureusement le regretté Yvan AUDOUARD qui, au
                cours de « journées de cœur et d’amitié », me suggéra d’écrire
                mes petites histoires d’eaux.
              </p>
              <div className="nom-auteur">Richard ARNAUD</div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {open && (
        <BookCarousel startIndex={startIndex} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
