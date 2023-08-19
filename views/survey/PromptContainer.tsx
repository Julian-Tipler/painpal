import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { Prompt } from "../../entities/prompt";

export function PromptContainer({ prompt }: { prompt: Prompt }) {
  const promptsDisplayed: Prompt[] = [];

  let i = 0;

  const recursivelyDisplayPrompts = (prompts: Prompt[]) => {
    prompts.forEach((prompt: Prompt) => {
      promptsDisplayed.push(prompt);
      prompt.followUpQuestions &&
        recursivelyDisplayPrompts([...prompt.followUpQuestions]);
    });
    //This part below will also have to check if the question is answered with the trigger answer
  };

  recursivelyDisplayPrompts([prompt]);
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
