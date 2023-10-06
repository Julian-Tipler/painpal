import { Schema, model } from "mongoose";

const saleSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const Sale = model("Sale", saleSchema);
