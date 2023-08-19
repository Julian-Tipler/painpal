import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

export function Prompt({
  prompt,
  setPromptIndex,
}: {
  prompt: any;
  setPromptIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const question = prompt.question;

  return (
    <View style={styles.content}>
      <Text style={styles.question}>{question}</Text>
    </View>
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
