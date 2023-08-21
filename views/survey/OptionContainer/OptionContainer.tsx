import { Button } from "react-native-paper";
import { Text, View } from "../../../components/Themed";
import { useSurveyContext } from "../SurveyContext";
import { StyleSheet } from "react-native";
import { Prompt } from "../../../entities/Prompt";
import { handleOptionSelect } from "./helpers/handleOptionSelect";

export const OptionContainer = ({ prompt }: { prompt: Prompt }) => {
  const { setAnswers } = useSurveyContext();

  return (
    <View>
      <Text>{prompt.question}</Text>
      {prompt.options.map((option, i) => {
        return (
          <Button
            key={`button-${i}`}
            onPress={handleOptionSelect({ prompt, setAnswers, option })}
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
