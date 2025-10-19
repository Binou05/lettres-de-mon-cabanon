// server/seedProduct.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connecté à MongoDB");

    // On upsert (crée si absent, met à jour sinon) TON unique produit
    const product = await Product.findOneAndUpdate(
      {}, // premier doc (tu n'as qu'un produit)
      {
        title: "Lettres de mon cabanon",
        unitPrice: 22, // ✅ prix correct
        shipping: 3, // ✅ port correct
        stock: 100, // ✅ stock correct
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log("📘 Produit en base :", product);
  } catch (err) {
    console.error("❌ Erreur seed :", err);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
