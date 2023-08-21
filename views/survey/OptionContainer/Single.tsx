import { Button } from "react-native-paper";
import { Text, View } from "../../../components/Themed";
import { StyleSheet } from "react-native";
import { useSurveyContext } from "../SurveyContext";

export const Single = ({ options, id }: { options: any; id: string }) => {
  const { answers, setAnswers } = useSurveyContext();

  return (
    <View style={styles.optionContainer}>
      {options.map((option: any, i: number) => (
        <Button
          mode="contained"
          style={styles.singleSelectionButton}
          key={`option ${i}`}
          onPress={() =>
            setAnswers((prevAnswers: any) => {
              return { ...prevAnswers, [id]: [option.text] };
            })
          }
        >
          <Text>{option.text}</Text>
        </Button>
      ))}
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
