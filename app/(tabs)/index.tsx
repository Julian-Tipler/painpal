import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GET_SURVEY } from "../../graphql/getSurvey";

export default function HomeScreen() {
  const { loading, error, data } = useQuery(GET_SURVEY);
  console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
