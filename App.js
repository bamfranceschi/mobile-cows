import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./Header";
import TabBar from "./TabBar";
import GameArea from "./GameArea";

export default function App() {
  const [lScore, setLScore] = useState(0);
  const [rScore, setRScore] = useState(0);

  const [team, setTeam] = useState("Left Team");

  const newGame = () => {
    setLScore(0);
    setRScore(0);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text role="img" aria-label="cow-emoji" style={styles.cowImage}>
        🐮
      </Text>
      <Button title="New game" onPress={newGame}></Button>
      <Text style={styles.scoreText}>{`Score: ${lScore} : ${rScore}`}</Text>
      <TabBar team={team} setTeam={setTeam} />
      <GameArea
        lScore={lScore}
        rScore={rScore}
        setLScore={setLScore}
        setRScore={setRScore}
        team={team}
      />
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
  scoreText: {
    fontSize: 40,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "200",
    color: "darkblue"
  }
});
