import { Button } from "react-native-paper";
import { Text, View } from "../../../components/Themed";
import { useSurveyContext } from "../SurveyContext";
import { StyleSheet } from "react-native";

export const Multiple = ({ options, id }: { options: any; id: string }) => {
  const { responses, setResponses } = useSurveyContext();

  return (
    <View style={styles.optionContainer}>
      {options.map((selection: any, i: number) => (
        <Button
          mode="contained"
          style={styles.singleSelectionButton}
          key={`option ${i}`}
          onPress={() =>
            setResponses((prevAnswers: any) => {
              const currentAnswers = prevAnswers[id] || []; // Initialize with an empty array if undefined
              if (!currentAnswers.includes(selection.text)) {
                const updatedAnswers = {
                  ...prevAnswers,
                  [id]: [...currentAnswers, selection.text],
                };
                return updatedAnswers;
              }
              return prevAnswers;
            })
          }
        >
          <Text>{selection.text}</Text>
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
