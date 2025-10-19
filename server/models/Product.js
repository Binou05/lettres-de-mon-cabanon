import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    sku: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true }, 
    shipping: { type: Number, default: 0 }, 
    stock: { type: Number, default: 0 },
    currency: { type: String, default: "eur" },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
