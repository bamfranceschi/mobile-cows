// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./Header";
import LeftTeam from "./LeftTeam";
import RightTeam from "./RightTeam";
import TabBar from "./TabBar";

// const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator();

// function TabStack() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: "darkblue",
//         inactiveTintColor: "grey",
//         style: { backgroundColor: "white" },
//         labelStyle: { textAlign: "center" },
//         indicatorStyle: { borderBottomColor: "red", borderBottomWidth: 2 },
//       }}
//     >
//       <Tab.Screen
//         name="LeftTeam"
//         component={LeftTeam}
//         options={{ tabBarLabel: "Left Team" }}
//       />
//       <Tab.Screen
//         name="RightTeam"
//         component={RightTeam}
//         options={{ tabBarLabel: "Right Team" }}
//       />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  const [lScore, setLScore] = useState(0);
  const [rScore, setRScore] = useState(0);

  const [team, setTeam] = useState();

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
    // <NavigationContainer>
    // <AppNavigator>
    <View style={styles.container}>
      <Header />
      <Text role="img" aria-label="cow-emoji" style={styles.cowImage}>
        🐮
      </Text>
      <Button title="New game"></Button>
      <TabBar team={team} setTeam={setTeam} />
      {/* <GameAreaTab
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
        /> */}
    </View>
    // </AppNavigator>

    //   <Stack.Navigator initialRouteName="LeftTeam">
    //     <Stack.Screen name="TabStack" component={TabStack} />
    //   </Stack.Navigator>
    // </NavigationContainer>
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
