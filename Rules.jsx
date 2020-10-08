import React from "react";
import { Modal, View, Text, StyleSheet, Button } from "react-native";

function Rules(props) {
  const handleClose = () => {
    props.setToggle(!props.toggle);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.toggle}
        style={styles.container}
      >
        <Text>
          Split the car lengthways: you've got a Left team and a Right team.
          Awkward middle seat must choose sides. Choose wisely.
        </Text>
        <Text>
          Each team has their territory, corresponding with their side of the
          car. Left team, you get the left side of the road. Right team, you get
          right.
        </Text>
        <Text>
          You must claim herds of cattle that appear in your territory before
          the other team claims them. If you claim yours first, you score a
          point. Should you fail, you lose a point.
        </Text>
        <Text>
          If you think you saw a cow, but it was in fact a horse, bale of hay,
          old tractor, UFO, etc., your team loses 5 points.
        </Text>
        <Text>
          Herds are divided by fences. Like Highlander, THERE CAN BE ONLY ONE
          herd per fenced field. Insert bad highland cow pun here.
        </Text>
        <Text>Don't crash.</Text>
        <Button title="Close" onPress={handleClose} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default Rules;
