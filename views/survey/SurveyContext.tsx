import React, { createContext, useContext, useState } from "react";
import { Prompt, mockPrompts } from "./mockPrompts";

const SurveyContext = createContext({} as SurveyContextChildren);

type SurveyContextChildren = {
  prompts: Prompt[];
  setPrompts: React.Dispatch<React.SetStateAction<Prompt[]>>;
  responses: {};
  setResponses: React.Dispatch<React.SetStateAction<{}>>;
};

export function SurveyProvider({ children }: { children: React.ReactNode }) {
  const [prompts, setPrompts] = useState(mockPrompts); // Will be fetched by a useEffect + firebase
  const [responses, setResponses] = useState({}); // Initialize answers as an empty object
  const value = { prompts, setPrompts, responses, setResponses };
  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  );
}

export function useSurveyContext() {
  return useContext(SurveyContext);
}
