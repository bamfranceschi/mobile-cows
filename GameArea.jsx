import React from "react";
import { Button, View, StyleSheet } from "react-native";

function GameArea() {
  return (
    <View>
      {/* I will have two buttons horizontally level and spaced-between with margins */}
      <View style={styles.buttonCont}>
        <Text style={styles.teamButton}>L Team</Text>
        <Text style={styles.teamButton}>R Team</Text>
      </View>
      {/* Each button will correspond with a team. When pressed, the team selected will be highlighted, the team not selected will be greyed out*/}
      {/* When pressed, the corresponding team card will be rendered with buttons below*/}
    </View>
  );
}

export default GameArea;

const styles = StyleSheet.create({
  buttonCont: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
  },
  teamButton: {
    flex: 1,
    fontSize: 30,
  },
});
