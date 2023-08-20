import { Button } from "react-native-paper";
import { Text, View } from "../../../components/Themed";
import { StyleSheet } from "react-native";
import { useSurveyContext } from "../SurveyContext";
import { Prompt } from "../../../entities/Prompt";

export const YesNo = ({ prompt }: { prompt: Prompt }) => {
  const { answers, setAnswers } = useSurveyContext();

  return (
    <View style={styles.optionContainer}>
      <Text>{prompt.question}</Text>
      <Button
        onPress={() => {
          setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [prompt.id]: {
              promptId: prompt.id,
              options: ["yes"],
            },
          }));
        }}
      >
        Yes
      </Button>
      <Button
        onPress={() => {
          setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [prompt.id]: {
              promptId: prompt.id,
              options: ["no"],
            },
          }));
        }}
      >
        No
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    padding: 20,
  },
  singleSelectionButton: {
    backgroundColor: "purple",
    marginBottom: 20,
  },
});
