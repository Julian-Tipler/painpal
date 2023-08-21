import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Slider() {
  return (
    <View>
      <Text>Slider</Text>
    </View>
  );
}

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
