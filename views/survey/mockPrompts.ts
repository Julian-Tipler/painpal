// We are doing this with one question

import { Prompt } from "../../entities/Prompt";

const prompt: Prompt = {
  id: "123",
  question: "Did you exercise today",
  options: ["yes", "no"],
  type: "yesNo",
  followUpPrompts: [
    {
      id: "456",
      question: "What exercise did you do?",
      options: ["run", "bike", "swim"],
      type: "multiple",
      dependsValue: "yes",
      followUpPrompts: [
        {
          id: "890",
          question: "What stroke?",
          options: ["breast", "freestyle"],
          type: "multiple",
          dependsValue: "swim",
        },
      ],
    },
    {
      id: "789",
      question: "Why not?",
      options: ["tired", "busy"],
      type: "multiple",
      dependsValue: "no",
    },
  ],
};

// I could get more explicit with the "depends" condition, perhaps having it include
// multiple Prompt ids and required answer for each one. Not for MVP though

const promptTwo: Prompt = {
  id: "123",
  question: "Did you exercise today",
  options: ["yes", "no"],
  type: "single",
};

export const mockPrompts = [prompt, promptTwo];
