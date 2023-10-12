import {Schema, model} from "mongoose";

const questionSchema = new Schema({
  _id: String,
  text: String,
  type: String, 
  options: [String],
});

const surveySchema = new Schema({
  title: String,
  questions: [questionSchema], 
});

export const Survey = model("Survey", surveySchema);