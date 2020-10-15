import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements"

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
    <View style={styles.container}>
      <View style={styles.buttonCont}>
        <Button buttonStyle={{width:130}} raised={true} type="outline" title="My Cows" onPress={addLCows}/>
        <Button buttonStyle={{width:130}} raised={true} type="outline"  title="JK" onPress={minusLCows}/>
      </View>
      <View style={styles.buttonCont}>
        <Button buttonStyle={{width:130}} raised={true} type="outline"  title="Their Cows" onPress={minusRCows}/>
        <Button buttonStyle={{width:130}} raised={true} type="outline"  title="Oops" onPress={addRCows}></Button>
      </View>
      <View style={styles.buttonCont}>
        <Button buttonStyle={{width:130}} raised={true} type="outline"  title="NOT A COW" onPress={lNotACow}></Button>
        <Button buttonStyle={{width:130}} raised={true} type="outline"  title="Totes was..." onPress={lReversal}></Button>
      </View>
    </View>
  );
}

export default LeftTeam;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "purple",
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
