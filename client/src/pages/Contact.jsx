import React, { useState } from "react";
import Navbar from "../components/Navbar";

import "./Contact.css";
import bgImg from "../assets/images/img2-contact.webp";

export default function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "a573a783-747d-4380-8aa3-057fa40f430d");
    formData.append("subject", "Message depuis Encre de Sel");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message envoyé avec succès ✨");
      event.target.reset();
    } else {
      setResult("Une erreur est survenue. Veuillez réessayer.");
    }
  };

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
                  réflexions,<br/> naviguant sur les mers d’encre et de sel de ces
                  récits. <br/>Si vous êtes intéressé(e) par mon livre, n’hésitez pas à
                  me le faire savoir !
                </strong>
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
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

                {result && (
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "0.5rem",
                      fontWeight: "600",
                    }}
                  >
                    {result}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
