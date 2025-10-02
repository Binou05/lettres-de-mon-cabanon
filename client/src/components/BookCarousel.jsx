// src/components/BookCarousel.jsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BookCarousel.css";

import coverVerso from "../assets/images/photo-verso-livre.jpg";
import coverRecto from "../assets/images/photo-recto-livre.jpg";

export default function BookCarousel({ startIndex, onClose }) {
  return (
    <div className="carousel-overlay" onClick={onClose}>
      <Carousel
        selectedItem={startIndex} // ← ici
        showArrows
        showStatus={false}
        showIndicators
        showThumbs={false}
        infiniteLoop
        emulateTouch
        useKeyboardArrows
        swipeable
        autoPlay={false}
        onClickItem={() => {}} // empêche la fermeture en cliquant l’image
      >
        <div key="verso">
          <img src={coverVerso} alt="Verso de la couverture" />
        </div>
        <div key="recto">
          <img src={coverRecto} alt="Recto de la couverture" />
        </div>
      </Carousel>
    </div>
  );
}
