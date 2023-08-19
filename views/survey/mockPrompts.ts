// We are doing this with one question

export type Prompt = {
  id: string;
  question: string;
  options: string[];
  style: PromptStyle;
  dependsValue?: string;
  followUpQuestions?: Prompt[];
};

export type PromptStyle = "single" | "multiple";

const promptSingle: Prompt = {
  id: "123",
  question: "Did you exercise today",
  options: ["yes", "no"],
  style: "single",
  followUpQuestions: [
    {
      id: "456",
      question: "What exercise did you do?",
      options: ["run", "bike", "swim"],
      style: "multiple",
      dependsValue: "yes",
    },
  ],
};

export const mockPrompts = [promptSingle];
