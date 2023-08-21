import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Prompt } from "../../entities/Prompt";
import { AnswerWithoutId, useSurveyContext } from "./SurveyContext";
import { Answer } from "../../entities/Answer";
import { Button } from "react-native-paper";
import { YesNo } from "./OptionContainer/YesNo";
import { Multiple } from "./OptionContainer/Multiple";

export function PromptContainer({ prompt }: { prompt: Prompt }) {
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
    <View style={styles.content}>
      {promptsDisplayed.map((promptDisplayed, i) => {
        return displayPrompt(promptDisplayed, i);
      })}
    </View>
  );
}

const displayPrompt = (prompt: Prompt, i: number) => {
  switch (prompt.type) {
    case "yesNo":
      return <YesNo prompt={prompt} key={`prompt-${i}`} />;
    case "multiple":
      return <Multiple prompt={prompt} key={`prompt-${i}`} />;
  }
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  question: {
    alignSelf: "center",
  },
});
