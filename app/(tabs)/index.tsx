import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useEffect } from "react";

export default function HomeScreen() {
  useEffect(() => {
    fetch('http://localhost:4000/api/ ', {
      method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers you need (e.g., authentication token)
      },
      // Add request body for POST or PUT requests if needed
    }).then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
  }
    , [])
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
