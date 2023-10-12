import mongoose, { Schema, model } from "mongoose";

const questionSchema = new Schema({
  text: String,
  type: String,
  options: [String],
});

const surveySchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  questions: [questionSchema],
});

export const Survey = model("Survey", surveySchema);
