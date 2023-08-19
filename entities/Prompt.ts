export type Prompt = {
  id: string;
  question: string;
  options: Option[];
  type: PromptType;
  dependsValue?: string;
  followUpPrompts?: Prompt[];
};

export type PromptType = "single" | "multiple" | "yesNo";

export type Option = "yes" | "no" | string;
