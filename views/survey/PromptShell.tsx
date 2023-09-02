import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Prompt } from "../../entities/Prompt";
import { useSurveyContext } from "./SurveyContext";
import { SinglePrompt } from "./SinglePrompt/SinglePrompt";
import { useEffect } from "react";
import { PainScale } from "./SinglePrompt/PainScale";

export function PromptShell({ prompt }: { prompt: Prompt }) {
  const { answers } = useSurveyContext();
  const promptsDisplayed: Prompt[] = [];

  useEffect(() => {}, []);

  const recursivelyDisplayPrompts = (prompt: Prompt, parentId?: string) => {
    // First push the current prompt
    promptsDisplayed.push(prompt);

    if (!prompt.followUpPrompts) return;

    const promptAnswer = answers[prompt.id];
    if (!promptAnswer || !promptAnswer.length) return;

    prompt.followUpPrompts.forEach((followUpPrompt: Prompt) => {
      if (!followUpPrompt.visibleIf) return;
      if (promptAnswer.includes(followUpPrompt.visibleIf)) {
        recursivelyDisplayPrompts(followUpPrompt, prompt.id);
      }
    });
  };

  recursivelyDisplayPrompts(prompt);

  if (promptsDisplayed.length < 1) {
    return (
      <View>
        <Text> No prompts</Text>
      </View>
    );
  }

  return (
    <>
      {promptsDisplayed.map((promptDisplayed, i) => {
        switch (promptDisplayed.type) {
          case "yesNo":
          case "multiple":
          case "single":
            return (
              <SinglePrompt prompt={promptDisplayed} key={`option-${i}`} />
            );
          case "painScale":
            return <PainScale prompt={promptDisplayed} key={`option-${i}`} />;
          default:
            return <Text>Error</Text>;
        }
      })}
    </>
  );
}

const styles = StyleSheet.create({});
