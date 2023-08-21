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
      {["yes", "no"].map((option, i) => {
        return (
          <Button
            key={`button-${i}`}
            onPress={() => {
              setAnswers((prevAnswers) => {
                const newAnswers = { ...prevAnswers };

                const isSelected = prevAnswers[prompt.id]?.includes(option);

                if (isSelected) {
                  newAnswers[prompt.id] = newAnswers[prompt.id].filter(
                    (item) => item !== option
                  );
                } else {
                  newAnswers[prompt.id] = [
                    ...(newAnswers[prompt.id] || []),
                    option,
                  ];
                }
                return newAnswers;
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
    padding: 20,
  },
  singleSelectionButton: {
    backgroundColor: "purple",
    marginBottom: 20,
  },
});
