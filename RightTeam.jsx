import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

function RightTeam({ lScore, rScore, setLScore, setRScore }) {
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
  const rNotACow = () => {
    setRScore(rScore - 5);
  };
  const rReversal = () => {
    setRScore(rScore + 5);
  };
  return (
    <View>
      <Button title="My Cows" onPress={addRCows}></Button>
      <Button title="JK" onPress={minusRCows}></Button>
      <Button title="Their Cows" onPress={minusLCows}></Button>
      <Button title="Oops" onPress={addLCows}></Button>
      <Button title="NOT A COW" onPress={rNotACow}></Button>
      <Button title="Totes was..." onPress={rReversal}></Button>
    </View>
  );
}

export default RightTeam;
