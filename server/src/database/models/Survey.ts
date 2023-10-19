import mongoose, { Schema, model } from "mongoose";

const surveySchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
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

export const Survey = model("Survey", surveySchema);
