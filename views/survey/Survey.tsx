import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { DisplayPrompts } from "./DisplayPrompts";
import { useEffect, useState } from "react";
import { useSurveyContext } from "./SurveyContext";
import { Button } from "react-native-paper";
import { mockPrompts } from "./mockPrompts";

export function Survey() {
  const [promptIndex, setPromptIndex] = useState(0);
  const { prompts, setPrompts } = useSurveyContext();

  useEffect(() => {
    setPrompts(mockPrompts);
  }, []);

  if (!prompts || !prompts.length) return null;

  const handleNavigateBackward = () => {
    if (promptIndex === 0) {
      return;
    } else {
      setPromptIndex((prevIndex) => {
        return (prevIndex -= 1);
      });
    }
  };

  const handleNavigateForward = () => {
    if (promptIndex === prompts.length - 1) {
      return;
    } else {
      setPromptIndex((prevIndex) => {
        return (prevIndex += 1);
      });
    }
  };

  console.log(prompts);

  const prompt = prompts[promptIndex];
  return (
    <>
      {/* Prompt */}
      <View style={styles.content}>
        <DisplayPrompts prompt={prompt} />
      </View>
      {/* Previous and Next Buttons*/}
      <View style={styles.navigationContainer}>
        {promptIndex > 0 ? (
          <Button
            mode="contained"
            style={styles.navigationButton}
            onPress={handleNavigateBackward}
          >
            Back
          </Button>
        ) : (
          <View></View>
        )}
        <Button
          mode="contained"
          style={styles.navigationButton}
          onPress={handleNavigateForward}
        >
          Next
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexShrink: 0,
    paddingTop: 20,
    paddingBottom: 20,
    height: 100,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  navigationButton: {},
});
