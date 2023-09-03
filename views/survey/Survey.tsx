import { StyleSheet } from "react-native";

import { View } from "../../components/Themed";
import { PromptShell } from "./PromptShell";
import { useEffect, useState } from "react";
import { useSurveyContext } from "./SurveyContext";
import { Button } from "react-native-paper";
import { mockPrompts } from "./mockPrompts";
import { mockSurvey } from "./mockSurvey";
import { SurveyStart } from "./SurveyStart";
import { SurveyEnd } from "./SurveyEnd";
import { Prompt } from "../../entities/Prompt";

export function Survey() {
  const [promptIndex, setPromptIndex] = useState(0);
  const { survey, setSurvey, prompts, setPrompts } = useSurveyContext();

  useEffect(() => {
    setPrompts(mockPrompts);
    setSurvey(mockSurvey);
  }, []);

  if (!prompts || !prompts.length) return null;
  if (!survey) return null;

  const pages = [
    { type: "surveyStart", survey: survey },
    ...prompts,
    { type: "surveyEnd" },
  ];

  const handleNavigateBackward = () => {
    setPromptIndex((prevIndex) => {
      return prevIndex === 0 ? 0 : (prevIndex -= 1);
    });
  };

  const handleNavigateForward = () => {
    setPromptIndex((prevIndex) => {
      return prevIndex >= pages.length - 1
        ? pages.length - 1
        : (prevIndex += 1);
    });
  };

  const displayPage = () => {
    if (pages[promptIndex]["type"] === "surveyStart") {
      return <SurveyStart survey={survey} />;
    } else if (pages[promptIndex]["type"] === "surveyEnd") {
      return <SurveyEnd />;
    } else {
      return <PromptShell prompt={pages[promptIndex] as Prompt} />;
    }
  };
  return (
    <>
      {/* Prompt */}
      <View style={styles.content}>{displayPage()}</View>
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
        {promptIndex < prompts.length ? (
          <Button
            mode="contained"
            style={styles.navigationButton}
            onPress={handleNavigateForward}
          >
            Next
          </Button>
        ) : (
          <View></View>
        )}
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
    padding: 24,
  },
  navigationButton: {},
});
