// src/pages/About.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
import background from "../assets/images/background-bio.png";
import photoRichard from "../assets/images/Image-papa.jpg";
import photoRichardEcrivain from "../assets/images/photo-richard-ecrivain.jpg";
import articleArnaud from "../assets/images/article-24-12-26-richard-arnaud.png";
import articleProv from "../assets/images/article-la-provence.jpg";
import afficheMiramas from "../assets/images/affiche-Miramas-galerie.jpg";
import afficheVieuxMiramas from "../assets/images/affiche-vieux-miramas.jpg";
import afficheStAndiol from "../assets/images/afficheStAndiol.png";
import photoDiscours from "../assets/images/photo-discours-galerie.jpg";
import photoDedicasse from "../assets/images/photo-écrivain-dédicaces.jpg";
import photoVieux from "../assets/images/photo-vieux-miramas-auteur.jpg";
import photoStAndiol from "../assets/images/photoSt-andiol-.jpg";
import dedicaces1 from "../assets/images/Dédicaces1.jpg";
import dedicaces2 from "../assets/images/Dédicaces2.jpg";
import dedicaces3 from "../assets/images/Dédicaces3.jpg";
import photogaleriemiramas from "../assets/images/photogaleriemiramas.jpg";
import photogaleriePaulette from "../assets/images/photogaleriePaulette.jpg";
import photomiramasvernissage from "../assets/images/photomiramasvernissage.jpg";
import photogaleriemaire from "../assets/images/photogaleriemaire.jpg";
import photostandiolAnne from "../assets/images/photostandiolAnne.jpg";
import photovieuxmiramasécrivain from "../assets/images/photovieuxmiramasécrivain.jpg";
import photovieuxmiramasgalerie from "../assets/images/photovieuxmiramasgalerie.jpg";
import photovieuxmiramasprovençale from "../assets/images/photovieuxmiramasprovençale.jpg";
import videoStAndiol from "../assets/videos/StAndiol.mp4";
import videoVieuxMiramas from "../assets/videos/VieuxMiramas.mp4";


export default function About() {

  const [tab, setTab] = useState("bio");
  const [modalImg, setModalImg] = useState(null);
  const [scale, setScale] = useState(1);

  const [vieuxAffiche, vieuxPhoto] = [
    afficheVieuxMiramas,
    photoVieux,
    photoDedicasse,
    photovieuxmiramasécrivain,
    photovieuxmiramasgalerie,
    photovieuxmiramasprovençale,
  ];
  const [miramasAffiche, miramasDiscours] = [
    afficheMiramas,
    photogaleriemaire,
    photoDiscours,
    photogaleriemiramas,
    photogaleriePaulette,
    photomiramasvernissage,
  ];
  
  const [stAndiolAffiche, stAndiolPhoto] = [
    afficheStAndiol,
    photoStAndiol,
    photostandiolAnne,
  ];

 
  const articles = [
    { src: articleArnaud, caption: "La Provence, 24 déc. 2024" },
    { src: articleProv, caption: "La Provence, 30 avr. 2025" },
    { src: dedicaces1, caption: "Les dédicaces" },
    { src: dedicaces2, caption: "Les dédicaces" },
    { src: dedicaces3, caption: "Les dédicaces" },
  ];
  const openModal = (src) => {
    setModalImg(src);
    setScale(1); // reset du zoom
  };
  const closeModal = () => setModalImg(null);

  const zoomIn = () => setScale((s) => Math.min(s + 0.2, 3));
  const zoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));
  return (
    <>
      <Navbar />

      <main
        className={`page-content 
          ${tab !== "gallery" ? "fullbleed" : ""}
       ${tab === "gallery" ? "gallery-bg" : ""} `
        }
        style={
          tab !== "gallery"
            ? { backgroundImage: `url(${background})` }
            : {}
        }
      >
        {/* On décale la carte plus haut */}
        <div className="about__card" style={{ marginTop: "30vh" }}>
          <div className="about__tabs">
            {[
              { id: "bio", label: "Bio" },
              { id: "articles", label: "Presse et Dédicaces" },
              { id: "gallery", label: "Affiches" },
            ].map(({ id, label }) => (
              <button
                key={id}
                className={tab === id ? "active" : ""}
                onClick={() => setTab(id)}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === "bio" && (
            <section className="about__bio">
              <h2 className="about__bio-title">Biographie de l’auteur</h2>
              <div className="about__bio-photos">
                <img src={photoRichard} alt="Richard Arnaud" />
              </div>

              <div className="about__bio-text">
                <p>
                  Richard Arnaud est né à Marseille d’un père camarguais et
                  d’une mère marseillaise. Très jeune, il baigne dans la langue
                  provençale familiale et se nourrit des comptines (« Anatole »
                  à Marseille, « La Rato-penado » à Port-Saint-Louis) qui
                  résonnent encore dans sa mémoire.
                </p>
                <p>
                  Chaque été, après « prendre le frais » sur la plage Nord du
                  They de Brûle-Tabac, les pas-de-portes se muent en Agora : au
                  coin des cabanons, il découvre récits rocambolesques et faits
                  divers toujours certifiés vrais… même quand ils défient
                  l’entendement !
                </p>
                <p>
                  Admirateur de Mistral, Daudet, Pagnol et des félibres, il
                  puise aussi son inspiration auprès de René Bruni, Jean-Claude
                  Rey ou du Grand Yvan Audouard, ami et mentor.
                </p>
                <p>
                  Pour que ses « histoires d’eaux », mêlant vérité, humour et
                  légende, ne s’évanouissent pas, Richard les couche sur le
                  papier : ses récits invitent à plonger dans les parfums iodés
                  de la Méditerranée, la douceur des veillées et l’éternelle
                  quête du merveilleux.
                </p>
              </div>
              <img
                src={photoRichardEcrivain}
                alt="Richard Arnaud et Yvan Audouard"
              />
            </section>
          )}

          {tab === "articles" && (
            <section className="about__articles">
              <h2>Dans la presse</h2>
              <div className="articles-grid">
                {articles.map(({ src, caption }, i) => (
                  <figure key={i} className="article-thumb">
                    <img
                      src={src}
                      alt={caption}
                      onClick={() => openModal(src)}
                    />
                    <figcaption>{caption}</figcaption>
                  </figure>
                ))}
              </div>

              {modalImg && (
                <div className="modal-overlay" onClick={closeModal}>
                  <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={modalImg}
                      alt=""
                      style={{ transform: `scale(${scale})` }}
                    />
                    <div className="modal-controls">
                      <button onClick={zoomOut}>
                        <i className="fa-solid fa-magnifying-glass-minus"></i>
                      </button>
                      <button onClick={zoomIn}>
                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                      </button>
                      <button onClick={closeModal}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {tab === "gallery" && (
            <section className="about__gallery">
              <h2>Affiches & Photos</h2>
              {/* Bloc Vieux Miramas */}
              <div className="gallery-block">
                <img
                  className="block-main"
                  src={
                    afficheVieuxMiramas /* remplace par vraie image VieuxMiramas si différente */
                  }
                  alt="Image Vieux Miramas"
                />
                <div className="block-subs">
                  <img
                    className="block-sub"
                    src={photoVieux}
                    alt=" Vieux Miramas"
                  />
                  <img
                    className="block-sub"
                    src={photoDedicasse}
                    alt="Vieux Miramas dédicaces"
                  />
                  <img
                    className="block-sub"
                    src={photovieuxmiramasécrivain}
                    alt="Vieux Miramas auteur"
                  />
                  <img
                    className="block-sub"
                    src={photovieuxmiramasgalerie}
                    alt="Vieux Miramas galerie"
                  />
                  <img
                    className="block-sub"
                    src={photovieuxmiramasprovençale}
                    alt="Vieux Miramas provençale"
                  />
                  <video
                    className="block-video"
                    src={videoVieuxMiramas}
                    controls
                    muted
                    loop
                  />
                </div>
              </div>
              {/* Bloc Miramas */}
              <div className="gallery-block">
                <img
                  className="block-main"
                  src={afficheMiramas}
                  alt="Image Miramas"
                />
                <div className="block-subs">
                  <img
                    className="block-sub"
                    src={photoDiscours}
                    alt="Discours Galerie"
                  />
                  <img
                    className="block-sub"
                    src={photogaleriemaire}
                    alt="Discours Maire"
                  />
                  <img
                    className="block-sub"
                    src={photogaleriemiramas}
                    alt="galerie"
                  />
                  <img
                    className="block-sub"
                    src={photogaleriePaulette}
                    alt="Discours Paulette"
                  />
                  <img
                    className="block-sub"
                    src={photomiramasvernissage}
                    alt="Discours vernissage"
                  />
                </div>
              </div>
              {/* Bloc St Andiol */}
              <div className="gallery-block">
                <img
                  className="block-main"
                  src={afficheStAndiol}
                  alt="Image St Andiol"
                />
                <div className="block-subs">
                  <img
                    className="block-sub"
                    src={photoStAndiol}
                    alt="St Andiol"
                  />
                  <img
                    className="block-sub"
                    src={photostandiolAnne}
                    alt="St Andiol Anne"
                  />
                  <video
                    className="block-video"
                    src={videoStAndiol}
                    controls
                    muted
                    loop
                  />
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
