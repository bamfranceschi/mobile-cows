import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Button, View, StyleSheet } from "react-native";
import LeftTeam from "./LeftTeam";
import RightTeam from "./RightTeam";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "darkblue",
        inactiveTintColor: "grey",
        style: { backgroundColor: "white" },
        labelStyle: { textAlign: "center" },
        indicatorStyle: { borderBottomColor: "red", borderBottomWidth: 2 },
      }}
    >
      <Tab.Screen
        name="LeftTeam"
        component={LeftTeam}
        options={{ tabBarLabel: "Left Team" }}
      />
      <Tab.Screen
        name="RightTeam"
        component={RightTeam}
        options={{ tabBarLabel: "Right Team" }}
      />
    </Tab.Navigator>
  );
}

function GameAreaTab() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LeftTeam">
        <Stack.Screen name="TabStack" component={TabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default GameAreaTab;

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
