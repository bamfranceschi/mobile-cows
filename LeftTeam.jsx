import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

function LeftTeam({ lScore, rScore, setLScore, setRScore }) {
  const addLCows = () => {
    setLScore(lScore + 1);
  };
  const addRCows = () => {
    setRScore(rScore + 1);
  };
  const minusLCows = () => {
    setLScore(lScore - 1);
  };
  const minusRCows = () => {
    setRScore(rScore - 1);
  };
  const lNotACow = () => {
    setLScore(lScore - 5);
  };
  const lReversal = () => {
    setLScore(lScore + 5);
  };

  return (
    <View>
      <Button title="My Cows" onPress={addLCows}></Button>
      <Button title="JK" onPress={minusLCows}></Button>
      <Button title="Their Cows" onPress={minusRCows}></Button>
      <Button title="Oops" onPress={addRCows}></Button>
      <Button title="NOT A COW" onPress={lNotACow}></Button>
      <Button title="Totes was..." onPress={lReversal}></Button>
    </View>
  );
}

export default LeftTeam;
