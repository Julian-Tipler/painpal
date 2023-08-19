import React, { createContext, useContext, useState } from "react";
import { Prompt } from "../../entities/Prompt";
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
  const [answers, setAnswers] = useState([
    { id: "445", promptId: "123", options: ["no"] },
    { id: "667", promptId: "456", options: ["swim"] },
    { id: "889", promptId: "890", options: ["freestyle"] },
  ]); // Initialize answers as an empty object
  console.log("prompts", prompts);
  console.log("answers", answers)
  const value = { prompts, setPrompts, answers, setAnswers };
  return (  
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
}

export function useSurveyContext() {
  return useContext(SurveyContext);
}
