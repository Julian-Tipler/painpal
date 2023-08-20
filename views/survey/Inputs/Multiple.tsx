import { Button } from "react-native-paper";
import { Text, View } from "../../../components/Themed";
import { useSurveyContext } from "../SurveyContext";
import { StyleSheet } from "react-native";
import { Prompt } from "../../../entities/Prompt";

export const Multiple = ({ prompt }: { prompt: Prompt }) => {
  const { answers, setAnswers } = useSurveyContext();

  return (
    <View>
      <Text>{prompt.question}</Text>
      {prompt.options.map((option, i) => {
        return (
          <Button
            key={`button-${i}`}
            onPress={() => {
              setAnswers((prevAnswers) => {
                // Makes sure each answer only appears once
                const prevOptions = prevAnswers[prompt.id]?.options || [];
                const newOptions = [...new Set([...prevOptions, option])];
                return {
                  ...prevAnswers,
                  [prompt.id]: {
                    promptId: prompt.id,
                    options: newOptions,
                  },
                };
              });
            }}
          >
            {option}
          </Button>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flex: 1,
    padding: 20,
  },
  singleSelectionButton: {
    backgroundColor: "purple",
    marginBottom: 20,
  },
});
