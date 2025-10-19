// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cgu from "./pages/Cgu";
import Mentions from "./pages/Mentions";
import Privacy from "./pages/Privacy";
import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Book";
import Buy from "./pages/Buy";
import ThankYou from "./pages/ThankYou";
import Contact from "./pages/Contact";
import AdminOrders from "./pages/AdminOrders";
import AdminLogin from "./pages/AdminLogin";

function RequireAdmin({ children }) {
  const key = localStorage.getItem("cabanon-admin-key") || "";
  return key ? children : <Navigate to="/admin" replace />;
}

function App() {
  return (
    <div className="page-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/merci" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/orders"
          element={
            <RequireAdmin>
              <AdminOrders />
            </RequireAdmin>
          }
        />
        <Route path="/cgu" element={<Cgu />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route path="/donnees-personnelles" element={<Privacy />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
