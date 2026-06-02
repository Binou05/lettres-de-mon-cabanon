// src/App.js
import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cgu from "./pages/Cgu";
import Mentions from "./pages/Mentions";

import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Book";
import Critiques from "./pages/Critiques";
import Contact from "./pages/Contact";

import Salons from "./pages/Salons";
import Galerie2026 from "./pages/Galerie2026";


function App() {
  return (
    <div className="page-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/critiques" element={<Critiques />} />
        <Route path="/salons" element={<Salons />} />
        <Route path="/galerie-2026" element={<Galerie2026 />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/cgu" element={<Cgu />} />
        <Route path="/mentions-legales" element={<Mentions />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
