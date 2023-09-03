// We are doing this with one question

import { Prompt } from "../../entities/Prompt";

// Will have to handle the object structure recursively in the resolver
// It may make more sense for visibleIf to actually include the id of the parent Prompt

const promptOne: Prompt = {
  id: "001",
  question: "What score would you give your pain",
  options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  type: "painScale",
};

const promptTwo: Prompt = {
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
      visibleIf: "yes",
      followUpPrompts: [
        {
          id: "890",
          question: "What stroke?",
          options: ["breast", "freestyle"],
          type: "multiple",
          visibleIf: "swim",
        },
      ],
    },
    {
      id: "789",
      question: "Why not?",
      options: ["tired", "busy"],
      type: "multiple",
      visibleIf: "no",
    },
  ],
};

// I could get more explicit with the "depends" condition, perhaps having it include
// multiple Prompt ids and required answer for each one. Not for MVP though

const promptThree: Prompt = {
  id: "234",
  question: "Where is your pain",
  options: ["head", "stomach", "back"],
  type: "single",
};

export const mockPrompts = [promptOne, promptTwo, promptThree];
