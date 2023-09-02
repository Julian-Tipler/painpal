import { StyleSheet } from "react-native";
import React from "react";
import { Prompt } from "../../../entities/Prompt";
import { useSurveyContext } from "../SurveyContext";
import { Text, View } from "../../../components/Themed";
import { Button } from "react-native-paper";

export function PainScale({ prompt }: { prompt: Prompt }) {
  const { answers, setAnswers } = useSurveyContext();
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
          newAnswers[prompt.id] = [option];
        }
        return newAnswers;
      });
    };
  return (
    <View style={styles.container}>
      <Text>{prompt.question}</Text>
      <View style={styles.numberButtonsContainer}>
        {prompt.options.map((option, i) => {
          return (
            <Button
              key={`button-${i}`}
              onPress={createOptionSelect({ option })}
              style={[
                styles.numberButton,
                answers[prompt.id]?.includes(option) ? styles.selected : null,
              ]}
              mode="contained"
              contentStyle={{ height: 50, width: 10 }}
            >
              {option}
            </Button>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  optionContainer: {
    flex: 1,
    padding: 20,
  },
  numberButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  numberButton: {
    minWidth: 0,
    minHeight: 0,
    height: 30,
    backgroundColor: "purple",
    marginBottom: 20,
    borderRadius: 5,
  },
  selected: {
    backgroundColor: "white",
  },
});
