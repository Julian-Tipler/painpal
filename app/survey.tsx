import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Prompt } from "../views/survey/Prompt";
import { Survey } from "../views/survey/Survey";

export default function SurveyScreen() {
  return <Survey />;
}

const styles = StyleSheet.create({});
