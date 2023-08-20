import React, { createContext, useContext, useState } from "react";
import { Prompt } from "../../entities/Prompt";
import { Answer } from "../../entities/Answer";
import { Survey } from "../../entities/Survey";

const SurveyContext = createContext({} as SurveyContextChildren);

export type AnswerWithoutId = Omit<Answer, "id">;

type SurveyContextChildren = {
  survey: Survey | null;
  setSurvey: React.Dispatch<React.SetStateAction<Survey | null>>;
  prompts: Prompt[] | null;
  setPrompts: React.Dispatch<React.SetStateAction<Prompt[] | null>>;
  answers: { [promptId: string]: AnswerWithoutId };
  setAnswers: React.Dispatch<
    React.SetStateAction<{ [promptId: string]: AnswerWithoutId }>
  >;
};

export function SurveyProvider({ children }: { children: React.ReactNode }) {
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [prompts, setPrompts] = useState<Prompt[] | null>(null); // Will be fetched by a useEffect + firebase
  const [answers, setAnswers] = useState<{
    [promptId: string]: AnswerWithoutId;
  }>({}); // Initialize answers as an empty array

  const value = {
    prompts,
    setPrompts,
    answers,
    setAnswers,
    survey,
    setSurvey,
  };
  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
}

export function useSurveyContext() {
  return useContext(SurveyContext);
}
