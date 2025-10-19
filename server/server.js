// server/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Stripe from "stripe";
import bodyParser from "body-parser";

import Product from "./models/Product.js";
import Order from "./models/Order.js";

dotenv.config();

// --- Connexion MongoDB ---
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB Atlas"))
  .catch((err) => console.error("❌ Erreur connexion MongoDB :", err));

const app = express();
const PORT = process.env.PORT || 5000;
const FRONT_BASE_URL = process.env.FRONT_BASE_URL || "http://localhost:3000";
const ADMIN_KEY = process.env.ADMIN_KEY || "";

// --- Stripe ---
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

/**
 * ⚠️ Webhook Stripe (avant express.json())
 * On doit garder le body RAW pour vérifier la signature
 */
app.post(
  "/webhook/stripe",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("❌ Webhook signature verification failed.", err.message);
      return res.sendStatus(400);
    }

    if (event.type === "checkout.session.completed") {
      const s = event.data.object;

      // quantité commandée
      const qty = Number(s.metadata?.quantity || 1);

      // infos client
      const name =
        s.customer_details?.name ||
        s.shipping_details?.name ||
        s.metadata?.customerName ||
        "";
      const email =
        s.customer_details?.email || s.metadata?.customerEmail || "";

      // adresse
      const addr =
        s.customer_details?.address || s.shipping_details?.address || null;

      const shipping = addr
        ? {
            name,
            address: {
              line1: addr.line1 || "",
              line2: addr.line2 || "",
              postal_code: addr.postal_code || "",
              city: addr.city || "",
              state: addr.state || "",
              country: addr.country || "",
            },
          }
        : null;

      try {
        const product = await Product.findOne({ sku: "livre-001" });
        if (!product) throw new Error("Produit introuvable");

        if (product.stock >= qty) {
          product.stock -= qty;
          await product.save();

           const total = product.price * qty + product.shipping;
          await Order.create({
            provider: "stripe",
            status: "payé",
            qty,
            amount: total,
            customer: { name, email },
            shipping,
          });

          console.log("✅ Commande Stripe enregistrée:", { qty, name, email });
        } else {
          console.warn("❌ Stock insuffisant lors du webhook Stripe");
        }
      } catch (err) {
        console.error("❌ Erreur enregistrement commande:", err);
      }
    }

    res.json({ received: true });
  }
);

// --- Middlewares globaux après webhook ---
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  })
);
app.use(express.json());

// --- Admin: liste commandes ---
app.get("/api/admin/orders", async (req, res) => {
  if (ADMIN_KEY && req.headers["cabanon2025"] !== ADMIN_KEY) {
    return res.status(401).json({ error: "unauthorized" });
  }
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Erreur récupération commandes" });
  }
});
// DELETE /api/admin/orders/:id
app.delete("/api/admin/orders/:id", async (req, res) => {
  // sécurité: même clé que la liste
  if (ADMIN_KEY && req.headers["cabanon2025"] !== ADMIN_KEY) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid id" });
  }

  try {
    const doc = await Order.findByIdAndDelete(id);
    if (!doc) return res.status(404).json({ error: "not found" });
    return res.json({ ok: true });
  } catch (e) {
    console.error("DELETE /api/admin/orders/:id", e);
    return res.status(500).json({ error: "delete failed" });
  }
});

// --- Public: produit ---
app.get("/api/product", async (_req, res) => {
  try {
    let p = await Product.findOne({ sku: "livre-001" }).lean();
    if (!p) {
      p = await Product.create({
        sku: "livre-001",
        title: "Lettres de mon cabanon",
        price: 22, 
        shipping: 3,
        stock: 100,
        currency: "eur",
        active: true,
      });
       p = p.toObject();
    }

    res.json(p);
  } catch (e) {
    console.error("GET /api/product error:", e);
    res.status(500).json({ error: e.message });
  }
});

// --- Stripe checkout session ---
app.post("/api/checkout/stripe-session", async (req, res) => {
  try {
    const { quantity = 1, customerName = "", customerEmail = "" } = req.body;
    const qty = Math.max(1, Number(quantity));

   const product = await Product.findOne({ sku: "livre-001" });
    if (!product) return res.status(404).json({ error: "Produit introuvable" });
    if (qty> product.stock)
      return res.status(400).json({ error: "Stock insuffisant" });

   const total = product.price * qty + product.shipping;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      currency: "eur",
      customer_email: customerEmail || undefined,
      shipping_address_collection: {
        allowed_countries: ["FR", "BE", "CH", "LU", "DE", "ES", "IT", "NL"],
      },
      phone_number_collection: { enabled: true },
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: { name: `${product.title} (x${qty})` },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: qty,
        },
        {
          price_data: {
            currency: "eur",
            product_data: { name: "Frais de port" },
            unit_amount: Math.round(product.shipping * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${FRONT_BASE_URL}/merci?provider=stripe&qty=${qty}&name=${encodeURIComponent(
        customerName
      )}&email=${encodeURIComponent(customerEmail)}&amount=${total.toFixed(2)}`,
      cancel_url: `${FRONT_BASE_URL}/buy?cancelled=1`,
      metadata: {
        quantity: String(qty),
        productId: "book-001",
        customerName,
        customerEmail,
      },
    });

    res.json({ id: session.id, url: session.url });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Stripe session error" });
  }
});

// --- Healthcheck ---
app.get("/api/health", (_req, res) => res.json({ ok: true }));

// --- Start server ---
app.listen(PORT, () => {
  console.log(`✅ API http://localhost:${PORT}`);
});
