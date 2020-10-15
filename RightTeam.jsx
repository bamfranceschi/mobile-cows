import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements"

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
    <View style={styles.container}>
      <View style={styles.buttonCont}>
        <Button buttonStyle={{width:130}} raised={true} type="outline" title="My Cows" onPress={addRCows}></Button>
        <Button buttonStyle={{width:130}} raised={true} type="outline" title="JK" onPress={minusRCows}></Button>
      </View>
      <View style={styles.buttonCont}>
        <Button buttonStyle={{width:130}} raised={true} type="outline" title="Their Cows" onPress={minusLCows}></Button>
        <Button buttonStyle={{width:130}} raised={true} type="outline" title="Oops" onPress={addLCows}></Button>
      </View>
      <View style={styles.buttonCont}>
        <Button buttonStyle={{width:130}} raised={true} type="outline" title="NOT A COW" onPress={rNotACow}></Button>
        <Button buttonStyle={{width:130}} raised={true} type="outline" title="Totes was..." onPress={rReversal}></Button>
      </View>
    </View>
  );
}

export default RightTeam;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "teal",
    width: 350
  },
  buttonCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    marginBottom: 30,
    
  },
})
