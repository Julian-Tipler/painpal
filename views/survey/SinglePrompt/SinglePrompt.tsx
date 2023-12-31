import { Button } from "react-native-paper";
import { Text, View } from "../../../components/Themed";
import { useSurveyContext } from "../SurveyContext";
import { StyleSheet } from "react-native";
import { Prompt } from "../../../entities/Prompt";

export const SinglePrompt = ({ prompt }: { prompt: Prompt }) => {
  const { answers, setAnswers } = useSurveyContext();

  const options = prompt.type === "yesNo" ? ["yes", "no"] : prompt.options;
  const multiSelect = prompt.type === "multiple";

  const createOptionSelect =
    ({ option }: { option: string }) =>
    () => {
      setAnswers((prevAnswers) => {
        const newAnswers = { ...prevAnswers };

        const isSelected = prevAnswers[prompt.id]?.includes(option);

        if (isSelected) {
          newAnswers[prompt.id] = newAnswers[prompt.id].filter(
            (item) => item !== option
          );
        } else {
          if (multiSelect) {
            newAnswers[prompt.id] = [...(newAnswers[prompt.id] || []), option];
          } else {
            newAnswers[prompt.id] = [option];
          }
        }
        return newAnswers;
      });
    };

  return (
    <View>
      <Text>{prompt.question}</Text>
      {options.map((option, i) => {
        return (
          <Button
            key={`button-${i}`}
            onPress={createOptionSelect({ option })}
            style={[
              styles.singleSelectionButton,
              answers[prompt.id]?.includes(option) ? styles.selected : null,
            ]}
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
    backgroundColor: "blue",
    marginBottom: 20,
  },
  selected: {
    backgroundColor: "orange",
  },
});
