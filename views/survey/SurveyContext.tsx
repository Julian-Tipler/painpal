import React, { createContext, useContext, useState } from "react";
import { Prompt } from "../../entities/Prompt";
import { Answer } from "../../entities/Answer";

const SurveyContext = createContext({} as SurveyContextChildren);

export type AnswerWithoutId = Omit<Answer, "id">;

type SurveyContextChildren = {
  prompts: Prompt[];
  setPrompts: React.Dispatch<React.SetStateAction<Prompt[]>>;
  answers: { [promptId: string]: AnswerWithoutId };
  setAnswers: React.Dispatch<
    React.SetStateAction<{ [promptId: string]: AnswerWithoutId }>
  >;
};

export function SurveyProvider({ children }: { children: React.ReactNode }) {
  const [prompts, setPrompts] = useState([]); // Will be fetched by a useEffect + firebase
  const [answers, setAnswers] = useState({}); // Initialize answers as an empty array

  const value = { prompts, setPrompts, answers, setAnswers };
  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
}

export function useSurveyContext() {
  return useContext(SurveyContext);
}
