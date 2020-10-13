import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import RulesModal from "./Rules";

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text>Cows On My Side!</Text>{" "}
      </Text>
      <Button title="Rules" style={styles.rulesButton} onPress={handleToggle} />
      {toggle && <RulesModal toggle={toggle} setToggle={setToggle} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    flex: 2,
    color: "darkblue",
    fontSize: 25,
  },

  rulesButton: {
    flex: 1,
    fontSize: 30,
  },
});

export default Header;
