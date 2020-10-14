import React from "react";
import { Text, TouchableHeighlight, StyleSheet } from "react-native";

function TabBarItem({ title, team, setTeam, border, selected }) {
  return (
    <TouchableHeighlight
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
    </TouchableHeighlight>
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

export default TabBarItem;
