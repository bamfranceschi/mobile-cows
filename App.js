import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text role="img" aria-label="cow-emoji" style={styles.cowImage}>
        🐮
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 80,
  },
  cowImage: {
    fontSize: 100,
  },
});
