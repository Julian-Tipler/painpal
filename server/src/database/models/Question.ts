import { Schema, model } from "mongoose";

const questionsSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    default: [],
  },
  followUpQuestions: {
    
  },
});
