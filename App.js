import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./Header";
import GameAreaTab from "./GameAreaTab";

export default function App() {
  const [lScore, setLScore] = useState(0);
  const [rScore, setRScore] = useState(0);

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
      <GameAreaTab
        lScore={lScore}
        setLScore={setLScore}
        rScore={rScore}
        setRScore={setRScore}
        addLCows={addLCows}
        addRCows={addRCows}
        minusLCows={minusLCows}
        minusRCows={minusRCows}
        lNotACow={lNotACow}
        rNotACow={rNotACow}
        newGame={newGame}
        lReversal={lReversal}
        rReversal={rReversal}
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
});
