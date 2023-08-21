import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { Prompt } from "../../entities/Prompt";
import { useSurveyContext } from "./SurveyContext";
import { SinglePrompt } from "./SinglePrompt/SinglePrompt";

export function DisplayPrompts({ prompt }: { prompt: Prompt }) {
  const { answers, setAnswers } = useSurveyContext();
  const promptsDisplayed: Prompt[] = [];

  const recursivelyDisplayPrompts = (prompt: Prompt, parentId?: string) => {
    // First push the current prompt
    promptsDisplayed.push(prompt);

    if (!prompt.followUpPrompts) return;

    const promptAnswer = answers[prompt.id];
    if (!promptAnswer || !promptAnswer.length) return;

    prompt.followUpPrompts.forEach((followUpPrompt: Prompt) => {
      if (!followUpPrompt.dependsValue) return;
      if (promptAnswer.includes(followUpPrompt.dependsValue)) {
        recursivelyDisplayPrompts(followUpPrompt, prompt.id);
      }
    });
  };

  recursivelyDisplayPrompts(prompt);
  if (promptsDisplayed.length < 1) return <View>No prompts</View>;

  return (
    <>
      {promptsDisplayed.map((promptDisplayed, i) => {
        return <SinglePrompt prompt={promptDisplayed} key={`option-${i}`} />;
      })}
    </>
  );
}

const styles = StyleSheet.create({});
