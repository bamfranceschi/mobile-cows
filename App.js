import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./Header";
import LeftTeam from "./LeftTeam";
import RightTeam from "./RightTeam";
import TabBar from "./TabBar";

export default function App() {
  const [lScore, setLScore] = useState(0);
  const [rScore, setRScore] = useState(0);

  const [team, setTeam] = useState("Left Team");

  const newGame = () => {
    setLScore(0);
    setRScore(0);
  };
  //+1 to my team
  const addLCows = () => {
    setLScore(lScore + 1);
  };
  const addRCows = () => {
    setRScore(rScore + 1);
  };
  //-1 to other team
  const minusLCows = () => {
    setLScore(lScore - 1);
  };
  const minusRCows = () => {
    setRScore(rScore - 1);
  };
  //-5 to my team
  const lNotACow = () => {
    setLScore(lScore - 5);
  };
  const rNotACow = () => {
    setRScore(rScore - 5);
  };

  const lReversal = () => {
    setLScore(lScore + 5);
  };

  const rReversal = () => {
    setRScore(rScore + 5);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text role="img" aria-label="cow-emoji" style={styles.cowImage}>
        🐮
      </Text>
      <Button title="New game"></Button>
      <TabBar team={team} setTeam={setTeam} />
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
