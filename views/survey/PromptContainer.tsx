import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Prompt } from "../../entities/Prompt";
import { useSurveyContext } from "./SurveyContext";
import { Answer } from "../../entities/Answer";

export function PromptContainer({ prompt }: { prompt: Prompt }) {
  const { answers } = useSurveyContext();
  const promptsDisplayed: Prompt[] = [];

  const recursivelyDisplayPrompts = (prompt: Prompt, parentId?: string) => {
    // First push the current prompt
    promptsDisplayed.push(prompt);
    if (!prompt.followUpPrompts) return;

    const promptAnswer = answers.filter((answer: Answer) => {
      return answer.promptId === prompt.id;
    })[0];

    console.log("promptAnswer", promptAnswer);

    prompt.followUpPrompts.forEach((followUpPrompt: Prompt) => {
      if (!followUpPrompt.dependsValue) return;
      if (promptAnswer.options.includes(followUpPrompt.dependsValue))
        recursivelyDisplayPrompts(followUpPrompt, prompt.id);
    });
  };

  recursivelyDisplayPrompts(prompt);
  if (promptsDisplayed.length < 1) return <View>No prompts</View>;
  return (
    <>
      {promptsDisplayed.map((promptDisplayed) => {
        return (
          <View>
            <Text>{promptDisplayed.question}</Text>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
  },
  question: {
    alignSelf: "center",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexShrink: 0,
    paddingTop: 20,
    paddingBottom: 20,
  },
  navigationButton: {
    backgroundColor: "lightblue",
    textAlign: "center",
    marginBottom: 20,
  },
});
