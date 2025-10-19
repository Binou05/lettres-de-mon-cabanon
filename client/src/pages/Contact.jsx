import React from "react";
import Navbar from "../components/Navbar";

import "./Contact.css";
import bgImg from "../assets/images/img2-contact.webp"; // ton fond

export default function Contact() {
  return (
    <>
      <Navbar />

      <section
        className="contactus fullbleed h-94vh"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="overlay">
          <div className="contactusframe">
            <div className="contact-card">
              <h2 className="titre-contact">
                Prêt à voyager au fil des mots ?
              </h2>
              <p className="text-contact">
                <strong>
                  Contactez-moi pour plonger ensemble dans les vagues de nos
                  réflexions, naviguant sur les mers d’encre et de sel de ces
                  récits.
                </strong>
              </p>

              <form className="contact-form">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Prénom"
                  required
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Nom de famille"
                  required
                />
                <input type="email" name="email" placeholder="Email" required />

                <label htmlFor="message">Votre message</label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-textarea"
                  rows="6"
                  placeholder="Écrivez votre message ici…"
                  required
                />
                <div className="button-frame">
                  <button type="submit" className="boutoncontact">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
