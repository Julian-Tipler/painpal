import React, { createContext, useContext, useState } from "react";
import { mockPrompts } from "./mockPrompts";
import { Prompt } from "../../entities/prompt";
import { Answer } from "../../entities/Answer";

const SurveyContext = createContext({} as SurveyContextChildren);

type SurveyContextChildren = {
  prompts: Prompt[];
  setPrompts: React.Dispatch<React.SetStateAction<Prompt[]>>;
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
};

export function SurveyProvider({ children }: { children: React.ReactNode }) {
  const [prompts, setPrompts] = useState([]); // Will be fetched by a useEffect + firebase
  const [answers, setAnswers] = useState([]); // Initialize answers as an empty object
  console.log("context",prompts)
  const value = { prompts, setPrompts, answers, setAnswers };
  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
}

export function useSurveyContext() {
  return useContext(SurveyContext);
}
