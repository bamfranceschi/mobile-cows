import React from "react";
import { Modal, View, Text, StyleSheet, Button } from "react-native";
import Unorderedlist from "react-native-unordered-list";

function RulesModal(props) {
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
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.rules}>Them's the rules:</Text>
            <Text>{""}</Text>
            <Unorderedlist>
              <Text>
                Split the car lengthways: you've got a Left team and a Right
                team. Awkward middle seat must choose sides. Choose wisely.
              </Text>
            </Unorderedlist>
            <Text>{""}</Text>
            <Unorderedlist>
              <Text>
                Each team has their territory, corresponding with their side of
                the car. Left team, you get the left side of the road. Right
                team, you get right.
              </Text>
            </Unorderedlist>
            <Text>{""}</Text>
            <Unorderedlist>
              <Text>
                You must claim herds of cattle that appear in your territory
                before the other team claims them. If you claim yours first, you
                score a point. Should you fail, you lose a point.
              </Text>
            </Unorderedlist>
            <Text>{""}</Text>
            <Unorderedlist>
              <Text>
                You must claim herds of cattle that appear in your territory
                before the other team claims them. If you claim yours first, you
                score a point. Should you fail, you lose a point.
              </Text>
            </Unorderedlist>
            <Text>{""}</Text>
            <Unorderedlist>
              <Text>
                If you think you saw a cow, but it was in fact a horse, bale of
                hay, old tractor, UFO, etc., your team loses 5 points.
              </Text>
            </Unorderedlist>
            <Text>{""}</Text>
            <Unorderedlist>
              <Text>
                Herds are divided by fences. Like Highlander, THERE CAN BE ONLY
                ONE herd per fenced field. Insert bad highland cow pun here.
              </Text>
            </Unorderedlist>
            <Text>{""}</Text>
            <Unorderedlist>
              <Text>Don't crash.</Text>
            </Unorderedlist>

            <Button title="Close" onPress={handleClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rules: {
    fontSize: 20,
  },
});

export default RulesModal;
