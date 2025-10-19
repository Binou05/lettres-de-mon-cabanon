import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    provider: { type: String, required: true }, // stripe, paypal...
    status: { type: String, default: "payé" },
    qty: { type: Number, required: true },
    amount: { type: Number, required: true },
    customer: {
      name: String,
      email: String,
      phone: String,
    },
    shipping: {
      name: String,
      address: {
        line1: String,
        line2: String,
        postal_code: String,
        city: String,
        state: String,
        country: String,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
