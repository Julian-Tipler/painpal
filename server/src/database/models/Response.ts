import mongoose, { Schema, model } from "mongoose";

const responseSchema = new Schema({
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
  responses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Response",
    },
  ],
  createdAt: {
    type: Date,
    immutable: true,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    immutable: true,
    required: true,
    default: Date.now(),
  },
});

export const Response = model("Response", responseSchema);
