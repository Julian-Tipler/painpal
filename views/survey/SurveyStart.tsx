import { View, Text } from "../../components/Themed";
import React from "react";
import { Survey } from "../../entities/Survey";

export function SurveyStart({ survey }: { survey: Survey }) {
  return (
    <View>
      <Text>Welcome to your survey</Text>
    </View>
  );
}
