import { StyleSheet } from "react-native";
import React from "react";
import { Prompt } from "../../../entities/Prompt";
import { useSurveyContext } from "../SurveyContext";
import { Text, View } from "../../../components/Themed";
import { Button } from "react-native-paper";
import { Sizes, Spacer } from "../../../components/Spacer";
// import LinearGradient from "react-native-linear-gradient";

const gradientColors = ["#FF5733", "#FFA500", "#FFFF00", "#90EE90", "#008000"];

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
      <Spacer size={"md"} />
      <View style={styles.numberButtonsContainer}>
        {prompt.options.map((option, i) => {
          const colorIndex = Math.floor(
            (i / prompt.options.length) * gradientColors.length
          );

          return (
            // <LinearGradient
            //   key={`button-${i}`}
            //   colors={[
            //     gradientColors[colorIndex],
            //     gradientColors[colorIndex + 1],
            //   ]}
            //   start={{ x: 0, y: 0 }}
            //   end={{ x: 1, y: 0 }}
            //   style={[
            //     styles.numberButton,
            //     answers[prompt.id]?.includes(option) ? styles.selected : null,
            //   ]}
            // >
              <Button
                key={`button-${i}`}
                onPress={createOptionSelect({ option })}
                style={[
                  styles.numberButton,
                  answers[prompt.id]?.includes(option) ? styles.selected : null,
                ]}
                mode="contained"
              >
                {option}
              </Button>
            // </LinearGradient>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  optionContainer: {
    flex: 1,
    padding: 20,
  },
  numberButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  numberButton: {
    minWidth: 0,
    minHeight: 0,
    height: 30,
    backgroundColor: "purple",
    marginBottom: 20,
    borderRadius: 5,
    width: 30,
  },
  selected: {
    backgroundColor: "white",
  },
});
