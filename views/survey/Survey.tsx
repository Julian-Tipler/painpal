import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { Prompt } from "./Prompt";
import { useEffect, useState } from "react";
import { SurveyProvider, useSurveyContext } from "./SurveyContext";
import { Button } from "react-native-paper";
import { mockPrompts } from "./mockPrompts";

export function Survey() {
  const [promptIndex, setPromptIndex] = useState(0);
  const { prompts, setPrompts } = useSurveyContext();

  useEffect(() => {
    setPrompts(mockPrompts);
  }, []);

  const handleNavigateForward = () => {
    setPromptIndex((prevIndex) => (prevIndex += 1));
  };

  const handleNavigateBackward = () => {
    if (promptIndex === 0) {
      setPromptIndex(0);
    } else {
      setPromptIndex(promptIndex - 1);
    }
  };

  return (
    <SurveyProvider>
      <View style={styles.container}>
        <Prompt prompt={prompts[promptIndex]} setPromptIndex={setPromptIndex} />
      </View>
      {/* Previous and Next */}
      <View style={styles.navigationContainer}>
        <Button
          mode="contained"
          style={styles.navigationButton}
          onPress={handleNavigateForward}
        >
          Back
        </Button>
        <Button
          mode="contained"
          style={styles.navigationButton}
          onPress={handleNavigateBackward}
        >
          Next
        </Button>
      </View>
    </SurveyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
