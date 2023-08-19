// We are doing this with one question

import { Prompt } from "../../entities/prompt";

const prompt: Prompt = {
  id: "123",
  question: "Did you exercise today",
  options: ["yes", "no"],
  type: "single",
  followUpQuestions: [
    {
      id: "456",
      question: "What exercise did you do?",
      options: ["run", "bike", "swim"],
      type: "multiple",
      dependsValue: "yes",
    },
  ],
};

const promptTwo: Prompt = {
  id: "123",
  question: "Did you exercise today",
  options: ["yes", "no"],
  type: "single",
};

export const mockPrompts = [prompt,promptTwo];
