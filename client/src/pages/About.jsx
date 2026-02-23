// src/pages/About.jsx
import React, { useState } from "react";
import Lightbox from "../components/Lightbox";
import "./About.css";
import background from "../assets/images/background-bio.png";
import photoRichard from "../assets/images/Image-papa.jpg";


import articleArnaud from "../assets/images/article-24-12-26-richard-arnaud.png";
import articleProv from "../assets/images/article-la-provence.jpg";

import afficheMiramas from "../assets/images/affiche-Miramas-galerie.jpg";
import afficheVieuxMiramas from "../assets/images/affiche-vieux-miramas.jpg";
import afficheStAndiol from "../assets/images/afficheStAndiol.png";
import afficheFontvieille from "../assets/images/afficheFontvieille.jpg";
import AfficheBalaruc from "../assets/images/AfficheBalaruc.jpg";
import Affichecamargue from "../assets/images/Affichecamargue.jpg";
import Affichelamartre from "../assets/images/Affichelamartre.jpg";
import AfficheSault from "../assets/images/AfficheSault.jpg";
import AfficheLardier from "../assets/images/AfficheLardier.jpg";
import affichestvictoret from "../assets/images/affichestvictoret.jpg";

import photoDiscours from "../assets/images/photo-discours-galerie.jpg";
import photoDedicasse from "../assets/images/photo-écrivain-dédicaces.jpg";
import photoVieux from "../assets/images/photo-vieux-miramas-auteur.jpg";
import photoStAndiol from "../assets/images/photoSt-andiol-.jpg";

import lesamis from "../assets/images/lesamis.jpg";
import lesamis2 from "../assets/images/lesamis2.jpg";
import photoauteuretclaude from "../assets/images/photoauteuretclaude.jpg";

import dedicaces1 from "../assets/images/Dédicaces1.jpg";
import dedicaces2 from "../assets/images/Dédicaces2.jpg";
import dedicaces3 from "../assets/images/Dédicaces3.jpg";

import photogaleriemiramas from "../assets/images/photogaleriemiramas.jpg";
import photogaleriePaulette from "../assets/images/photogaleriePaulette.jpg";
import photomiramasvernissage from "../assets/images/photomiramasvernissage.jpg";
import photogaleriemaire from "../assets/images/photogaleriemaire.jpg";
import photostandiolAnne from "../assets/images/photostandiolAnne.jpg";
import miramasexpo3mai from "../assets/images/miramasexpo3mai.jpg";

import photovieuxmiramasécrivain from "../assets/images/photovieuxmiramasécrivain.jpg";
import photovieuxmiramasgalerie from "../assets/images/photovieuxmiramasgalerie.jpg";
import photovieuxmiramasprovençale from "../assets/images/photovieuxmiramasprovençale.jpg";

import photofontvieille from "../assets/images/photofontvieille.jpg";
import photofontvieille2 from "../assets/images/photofontvieille2.jpg";

import photoLamartre from "../assets/images/photoLamartre.jpg";
import photoLamartre2 from "../assets/images/photoLamartre2.jpg";
import photoLamartre3 from "../assets/images/photoLamartre3.jpg";

import photolardier from "../assets/images/photolardier.jpg";
import photolardier2 from "../assets/images/photolardier2.jpg";
import photolardier3 from "../assets/images/photolardier3.jpg";
import photolardier4 from "../assets/images/photolardier4.jpg";
import photolardier5 from "../assets/images/photolardier5.jpg";
import photolardier6 from "../assets/images/photolardier6.jpg";

import photoportStlouis from "../assets/images/photoportStlouis.jpg";
import photoportStlouis2 from "../assets/images/photoportStlouis2.jpg";
import photoportStlouis3 from "../assets/images/photoportStlouis3.jpg";
import photoCamarguesPLS from "../assets/images/photoCamarguesPSL.jpg";
import photoCamarguesPLS2 from "../assets/images/photoCamarguesPSL2.jpg";
import photoCamarguesPLS3 from "../assets/images/photoCamarguesPSL3.jpg";

import photoSault from "../assets/images/photoSault.jpg";
import photoSault2 from "../assets/images/photoSault2.jpg";
import photoSault3 from "../assets/images/photoSault3.jpg";

import photostvictoret from "../assets/images/photostvictoret.jpg";
import photostvictoret2 from "../assets/images/photostvictoret2.jpg";
import photostvictoret3 from "../assets/images/photostvictoret3.jpg";

import PrésentationDassault from "../assets/images/PrésentationDassault.jpg";
import PhotoDassault from "../assets/images/PhotoDassault.jpg";
import PhotoDassault2 from "../assets/images/PhotoDassault2.jpg";

import videoStAndiol from "../assets/videos/StAndiol.mp4";
import videoVieuxMiramas from "../assets/videos/VieuxMiramas.mp4";

import affichelecastelet from "../assets/images/affichelecastelet.jpg";
import Journal_le_castelet from "../assets/images/Journal_le_castelet.jpg";
import Salon_le_castelet from "../assets/images/Salon_le_castelet.jpg";
import photolecastelet from "../assets/images/photolecastelet.jpg";
import photoLecastelet3 from "../assets/images/photoLecastelet3.jpg";

import Dédicace_dassault from "../assets/images/Dédicace_dassault.jpg";
import Dédicace_dassault2 from "../assets/images/Dédicace_dassault2.jpg";
import Dédicace_dassault3 from "../assets/images/Dédicace_dassault3.jpg";
import dédicaceBallaruc from "../assets/images/dédicaceBallaruc.jpg";
import photobalaruc from "../assets/images/photobalaruc.jpg";
import photobalaruc2 from "../assets/images/photobalaruc2.jpg";
import photobalaruc3 from "../assets/images/photobalaruc3.jpg";

import Expomiramasdéc25 from "../assets/images/Expomiramasdéc25.jpg";
import Expomiramas2 from "../assets/images/Expomiramas2.jpg";
import Expomiramas3 from "../assets/images/Expomiramas3.jpg";
import Expomiramas4 from "../assets/images/Expomiramas4.jpg";
import Expomiramas5 from "../assets/images/Expomiramas5.jpg";
import photoexpomiramas from "../assets/images/photoexpomiramas.jpg";
import photoexpomiramasbis from "../assets/images/photoexpomiramasbis.jpg";

export default function About() {
  const [tab, setTab] = useState("bio");
  const [modalImg, setModalImg] = useState(null);
  const [scale, setScale] = useState(1);
  const [zoomImage, setZoomImage] = useState(null);

  const articles = [
    { src: articleArnaud, caption: "La Provence, 24 déc. 2024" },
    { src: articleProv, caption: "La Provence, 30 avr. 2025" },
    { src: Journal_le_castelet, caption: "Le Castelet, 7 déc 2025" },
    { src: dedicaces1, caption: "Les dédicaces" },
    { src: dedicaces2, caption: "Les dédicaces" },
    { src: dedicaces3, caption: "Les dédicaces" },
  ];

  const openModal = (src) => {
    setModalImg(src);
    setScale(1);
  };

  const closeModal = () => setModalImg(null);
  const zoomIn = () => setScale((s) => Math.min(s + 0.2, 3));
  const zoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));

  return (
    <main
      className={`page-content about ${tab === "bio" ? "is-bio" : ""} ${
        tab === "gallery" ? "gallery-bg" : ""
      }`}
      style={
        tab === "bio"
          ? {
              backgroundImage: `url(${background})`,
              backgroundColor: "#E8D8BD",
            }
          : {}
      }
    >
      <div className="about__card" style={{ marginTop: "19vh" }}>
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
              type="button"
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
                Richard Arnaud est né à Marseille d’un père camarguais et d’une
                mère marseillaise. Très jeune, il baigne dans la langue
                provençale et le parler marseillais de ses grands-parents <br />
              </p>
              <p>
                Chaque été pendant toute son adolescence, lors des vacances
                scolaires, sur les pas-de-portes à Marseille, sur la plage
                devant les cabanons à Port Saint Louis du Rhône, lieux se
                transformant en véritable agoras, il va s'imprégner de l'art
                oral de l'histoire drôle, du fait divers rocambolesque, du conte
                incroyable, tous certifiés vrais par les rapporteurs d'un soir
                même quand ils défient l'entendement !
              </p>
              <p>
                Admirateur des auteurs de culture provençale et méridionale, à
                qui il rend hommage dans son "A propos de l'auteur" du livre, il
                y puise son inspiration...
              </p>
              <p>
                Pour que ses « Lettres de mon cabanon », mêlant vérité, humour
                et légende, ne se perdent dans la nuit des temps, Richard les
                couche sur le papier sans prétention littéraire mais par devoir
                de mémoire ! Ses récits invitent à plonger dans les parfums
                iodés de la Méditerranée, la douceur des veillées...
              </p>
              <p>
                Une éternelle et affectueuse Amitié lit l'auteur avec Claude le
                personnage central du livre, son ami de toujours.
                <br />
                Claude dit souvent: " Avec Richard nous nous sommes connus avant
                de naître ! "
              </p>
            </div>
          </section>
        )}

        {tab === "articles" && (
          <section className="about__articles">
            <h2>Dans la presse</h2>

            <div className="articles-grid">
              {articles.map(({ src, caption }, i) => (
                <figure key={i} className="article-thumb">
                  <img src={src} alt={caption} onClick={() => openModal(src)} />
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
                    <button type="button" onClick={zoomOut}>
                      <i className="fa-solid fa-magnifying-glass-minus"></i>
                    </button>
                    <button type="button" onClick={zoomIn}>
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </button>
                    <button type="button" onClick={closeModal}>
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

            <h2>
              Amis depuis plus de 60 ans l’histoire continue, écrite par les
              souvenirs, l’amitié sincère et cette étrange magie qui fait que
              certains liens défient le temps qui passe.
            </h2>
            {/* Bloc les amis*/}

            <div className="block-subs">
              <img
                className="block-sub"
                src={lesamis}
                alt="les amis"
                onClick={() => setZoomImage(lesamis)}
              />

              <img
                className="block-sub"
                src={photoauteuretclaude}
                alt="Auteur et Claude"
                onClick={() => setZoomImage(photoauteuretclaude)}
              />
              <img
                className="block-sub"
                src={lesamis2}
                alt="Auteur et Claude"
                onClick={() => setZoomImage(lesamis2)}
              />
            </div>
            <br />
            <br />
            {/* Bloc St Andiol */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={afficheStAndiol}
                alt="Salon St Andiol"
                onClick={() => setZoomImage(afficheStAndiol)}
              />
              <div className="block-subs">
                <img
                  className="block-sub"
                  src={photoStAndiol}
                  alt="St Andiol"
                  onClick={() => setZoomImage(photoStAndiol)}
                />
                <img
                  className="block-sub"
                  src={photostandiolAnne}
                  alt="St Andiol Anne"
                  onClick={() => setZoomImage(photostandiolAnne)}
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

            {/* Bloc Miramas */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={afficheMiramas}
                alt="Exposition à Miramas"
                onClick={() => setZoomImage(afficheMiramas)}
              />
              <div className="block-subs">
                <img
                  className="block-sub"
                  src={photoDiscours}
                  alt="Discours Galerie"
                  onClick={() => setZoomImage(photoDiscours)}
                />
                <img
                  className="block-sub"
                  src={photogaleriemaire}
                  alt="Discours Maire"
                  onClick={() => setZoomImage(photogaleriemaire)}
                />
                <img
                  className="block-sub"
                  src={photogaleriemiramas}
                  alt="Galerie"
                  onClick={() => setZoomImage(photogaleriemiramas)}
                />
                <img
                  className="block-sub"
                  src={photogaleriePaulette}
                  alt="Discours Paulette"
                  onClick={() => setZoomImage(photogaleriePaulette)}
                />
                <img
                  className="block-sub"
                  src={photomiramasvernissage}
                  alt="Discours vernissage"
                  onClick={() => setZoomImage(photomiramasvernissage)}
                />
                <img
                  className="block-sub"
                  src={miramasexpo3mai}
                  alt="Discours vernissage"
                  onClick={() => setZoomImage(miramasexpo3mai)}
                />
              </div>
            </div>

            {/* Bloc Vieux Miramas */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={afficheVieuxMiramas}
                alt="Salon Vieux Miramas"
                onClick={() => setZoomImage(afficheVieuxMiramas)}
              />
              <div className="block-subs">
                <img
                  className="block-sub"
                  src={photoVieux}
                  alt="Vieux Miramas"
                  onClick={() => setZoomImage(photoVieux)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photoDedicasse}
                  alt="Vieux Miramas dédicaces"
                  onClick={() => setZoomImage(photoDedicasse)}
                />
                <img
                  className="block-sub"
                  src={photovieuxmiramasécrivain}
                  alt="Vieux Miramas auteur"
                  onClick={() => setZoomImage(photovieuxmiramasécrivain)}
                />
                <img
                  className="block-sub"
                  src={photovieuxmiramasgalerie}
                  alt="Vieux Miramas galerie"
                  onClick={() => setZoomImage(photovieuxmiramasgalerie)}
                />
                <img
                  className="block-sub"
                  src={photovieuxmiramasprovençale}
                  alt="Vieux Miramas provençale"
                  onClick={() => setZoomImage(photovieuxmiramasprovençale)}
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
            {/* Bloc Fontvieille */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={afficheFontvieille}
                alt="Dédicace Fontvieille"
                onClick={() => setZoomImage(afficheFontvieille)}
              />
              <div className="block-subs">
                <img
                  className="block-sub block-sub--contain"
                  src={photofontvieille}
                  alt="Fontvieille"
                  onClick={() => setZoomImage(photofontvieille)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photofontvieille2}
                  alt="Fontvieille 2"
                  onClick={() => setZoomImage(photofontvieille2)}
                />
              </div>
            </div>

            {/* Bloc Camargue */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={Affichecamargue}
                alt="Dédicace Camargue"
                onClick={() => setZoomImage(Affichecamargue)}
              />
              <div className="block-subs">
                <img
                  className="block-sub block-sub--contain"
                  src={photoportStlouis}
                  alt="Port St Louis"
                  onClick={() => setZoomImage(photoportStlouis)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photoportStlouis2}
                  alt="Port St Louis 2"
                  onClick={() => setZoomImage(photoportStlouis2)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photoportStlouis3}
                  alt="Port St Louis 3"
                  onClick={() => setZoomImage(photoportStlouis3)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photoCamarguesPLS}
                  alt="Camargues PSL"
                  onClick={() => setZoomImage(photoCamarguesPLS)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photoCamarguesPLS2}
                  alt="Camargues PSL 2"
                  onClick={() => setZoomImage(photoCamarguesPLS2)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photoCamarguesPLS3}
                  alt="Camargues PSL 3"
                  onClick={() => setZoomImage(photoCamarguesPLS3)}
                />
              </div>
            </div>
            {/* Bloc Dassault */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={Dédicace_dassault2}
                alt="Dédicace Dassault"
                onClick={() => setZoomImage(Dédicace_dassault2)}
              />
              <div className="block-subs">
                <img
                  className="block-sub block-sub--contain"
                  src={PrésentationDassault}
                  alt="Dassault"
                  onClick={() => setZoomImage(PrésentationDassault)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={PhotoDassault}
                  alt="Dassault"
                  onClick={() => setZoomImage(PhotoDassault)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={PhotoDassault2}
                  alt="Dassault"
                  onClick={() => setZoomImage(PhotoDassault2)}
                />
              </div>
            </div>
            {/* Bloc Lamartre */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={Affichelamartre}
                alt="Dédicace Lamartre"
                onClick={() => setZoomImage(Affichelamartre)}
              />
              <div className="block-subs">
                <img
                  className="block-sub block-sub--contain"
                  src={photoLamartre}
                  alt="Lamartre"
                  onClick={() => setZoomImage(photoLamartre)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photoLamartre2}
                  alt="Lamartre 2"
                  onClick={() => setZoomImage(photoLamartre2)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photoLamartre3}
                  alt="Lamartre 3"
                  onClick={() => setZoomImage(photoLamartre3)}
                />
              </div>
            </div>
            {/* Bloc Sault */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={AfficheSault}
                alt="Dédicace Sault"
                onClick={() => setZoomImage(AfficheSault)}
              />
              <div className="block-subs">
                <img
                  className="block-sub block-sub--contain"
                  src={photoSault}
                  alt="Sault"
                  onClick={() => setZoomImage(photoSault)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photoSault2}
                  alt="Sault 2"
                  onClick={() => setZoomImage(photoSault2)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photoSault3}
                  alt="Sault 3"
                  onClick={() => setZoomImage(photoSault3)}
                />
              </div>
            </div>
            {/* Bloc Lardier */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={AfficheLardier}
                alt="Dédicace Lardier"
                onClick={() => setZoomImage(AfficheLardier)}
              />
              <div className="block-subs">
                <img
                  className="block-sub block-sub--contain"
                  src={photolardier}
                  alt="Lardier"
                  onClick={() => setZoomImage(photolardier)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photolardier2}
                  alt="Lardier 2"
                  onClick={() => setZoomImage(photolardier2)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photolardier3}
                  alt="Lardier 3"
                  onClick={() => setZoomImage(photolardier3)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photolardier4}
                  alt="Lardier 4"
                  onClick={() => setZoomImage(photolardier4)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photolardier5}
                  alt="Lardier 5"
                  onClick={() => setZoomImage(photolardier5)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photolardier6}
                  alt="Lardier 6"
                  onClick={() => setZoomImage(photolardier6)}
                />
              </div>
            </div>
            {/* Bloc St Victoret */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={affichestvictoret}
                alt="Dédicace St Victoret"
                onClick={() => setZoomImage(affichestvictoret)}
              />
              <div className="block-subs">
                <img
                  className="block-sub block-sub--contain"
                  src={photostvictoret}
                  alt="St Victoret"
                  onClick={() => setZoomImage(photostvictoret)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photostvictoret2}
                  alt="St Victoret 2"
                  onClick={() => setZoomImage(photostvictoret2)}
                />
                <img
                  className="block-sub block-sub--contain"
                  src={photostvictoret3}
                  alt="St Victoret 3"
                  onClick={() => setZoomImage(photostvictoret3)}
                />
              </div>
            </div>
            {/* Bloc Balaruc */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={AfficheBalaruc}
                alt="Exposition Balaruc"
                onClick={() => setZoomImage(AfficheBalaruc)}
              />
              <div className="block-subs">
                <img
                  className="block-sub"
                  src={dédicaceBallaruc}
                  alt="Balaruc"
                  onClick={() => setZoomImage(dédicaceBallaruc)}
                />
                <img
                  className="block-sub"
                  src={Dédicace_dassault3}
                  alt="Balaruc"
                  onClick={() => setZoomImage(Dédicace_dassault3)}
                />
                <img
                  className="block-sub"
                  src={Dédicace_dassault}
                  alt="Balaruc"
                  onClick={() => setZoomImage(Dédicace_dassault)}
                />
                <img
                  className="block-sub"
                  src={photobalaruc}
                  alt="Balaruc"
                  onClick={() => setZoomImage(photobalaruc)}
                />
                <img
                  className="block-sub"
                  src={photobalaruc2}
                  alt="Balaruc"
                  onClick={() => setZoomImage(photobalaruc2)}
                />
                <img
                  className="block-sub"
                  src={photobalaruc3}
                  alt="Balaruc"
                  onClick={() => setZoomImage(photobalaruc3)}
                />
              </div>
            </div>
            {/* Bloc Le Castelet */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={affichelecastelet}
                alt="Exposition Le Castelet"
                onClick={() => setZoomImage(affichelecastelet)}
              />
              <div className="block-subs">
                <img
                  className="block-sub"
                  src={photolecastelet}
                  alt="Le Castelet"
                  onClick={() => setZoomImage(photolecastelet)}
                />
                <img
                  className="block-sub"
                  src={Salon_le_castelet}
                  alt="Le Castelet"
                  onClick={() => setZoomImage(Salon_le_castelet)}
                />
                <img
                  className="block-sub"
                  src={photoLecastelet3}
                  alt="Le Castelet"
                  onClick={() => setZoomImage(photoLecastelet3)}
                />
              </div>
            </div>
            {/* Bloc Expo Miramas */}
            <div className="gallery-block">
              <img
                className="block-main"
                src={Expomiramas3}
                alt="Exposition Miramas"
                onClick={() => setZoomImage(Expomiramas3)}
              />
              <div className="block-subs">
                <img
                  className="block-sub"
                  src={Expomiramasdéc25}
                  alt="Miramas"
                  onClick={() => setZoomImage(Expomiramasdéc25)}
                />
                <img
                  className="block-sub"
                  src={Expomiramas2}
                  alt="Miramas"
                  onClick={() => setZoomImage(Expomiramas2)}
                />
                <img
                  className="block-sub"
                  src={photoexpomiramas}
                  alt="Miramas"
                  onClick={() => setZoomImage(photoexpomiramas)}
                />
                <img
                  className="block-sub"
                  src={Expomiramas4}
                  alt="Miramas"
                  onClick={() => setZoomImage(Expomiramas4)}
                />
                <img
                  className="block-sub"
                  src={Expomiramas5}
                  alt="Miramas"
                  onClick={() => setZoomImage(Expomiramas5)}
                />
                <img
                  className="block-sub"
                  src={photoexpomiramasbis}
                  alt="Miramas"
                  onClick={() => setZoomImage(photoexpomiramasbis)}
                />
              </div>
            </div>
          </section>
        )}
        <Lightbox src={zoomImage} onClose={() => setZoomImage(null)} />
      </div>
    </main>
  );
}
