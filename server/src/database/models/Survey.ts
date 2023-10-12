import {Schema, model} from "mongoose";

const questionSchema = new Schema({
  text: String,
  type: String, 
  options: [String],
});

const surveySchema = new Schema({
  title: String,
  questions: [questionSchema], 
});

export const Survey = model("Survey", surveySchema);