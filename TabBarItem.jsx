import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

export default function TabBarItem({ title, team, setTeam, border, selected }) {
  return (
    <TouchableHighlight
      underlayColor="#efefef"
      onPress={setTeam}
      style={[
        styles.item,
        team === title ? styles.selected : null,
        selected ? styles.selected : null,
        border ? styles.border : null,
      ]}
    >
      <Text style={[styles.itemText, team === title ? styles.bold : null]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: "#dddddd",
  },
  itemText: {
    color: "#777777",
    fontSize: 16,
  },
  selected: {
    backgroundColor: "#ffffff",
  },
  bold: {
    fontWeight: "bold",
  },
});
