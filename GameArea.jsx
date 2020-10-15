import React from "react";
import { View } from "react-native";
import LeftTeam from "./LeftTeam";
import RightTeam from "./RightTeam";

function GameArea({ team, ...rest }) {
  return (
    <View>
      {team === "Left Team" ? <LeftTeam {...rest} /> : <RightTeam {...rest} />}
    </View>
  );
}

export default GameArea;
