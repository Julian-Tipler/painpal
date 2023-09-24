import { StyleSheet } from "react-native";
import { Survey } from "../views/survey/Survey";
import { SurveyProvider } from "../views/survey/SurveyContext";

export default function SurveyScreen() {
  return (
    <SurveyProvider>
      <Survey />
    </SurveyProvider>
  );
}

const styles = StyleSheet.create({});
