import React from "react";
import { View, StyleSheet } from "react-native";
import TabBarItem from "./TabBarItem";

export default function TabBar({ team, setTeam }) {
  return (
    <View style={styles.container}>
      <TabBarItem
        team={team}
        title="Left Team"
        setTeam={() => setTeam("Left Team")}
      />
      <TabBarItem
        team={team}
        border
        title="Right Team"
        setTeam={() => setTeam("Right Team")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
});
