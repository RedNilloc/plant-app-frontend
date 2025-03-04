import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkboxes = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={20}
        fillColor="#8EC255"
        unFillColor="#FFFFFF"
        text="Non-toxic for pets"
        marginTop="5"
        iconStyle={{ borderColor: "#8EC255" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          fontFamily: "JosefinSans-Regular",
          textDecorationLine: "none",
        }}
        onPress={setSelection}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#8EC255"
        unFillColor="#FFFFFF"
        text="Non-toxic for humans"
        marginTop="5"
        iconStyle={{ borderColor: "#8EC255" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          fontFamily: "JosefinSans-Regular",
          textDecorationLine: "none",
        }}
        onPress={setSelection2}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#8EC255"
        unFillColor="#FFFFFF"
        text="Edible"
        marginTop="5"
        iconStyle={{ borderColor: "#8EC255" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          fontFamily: "JosefinSans-Regular",
          textDecorationLine: "none",
        }}
        onPress={setSelection3}
      />
      <BouncyCheckbox
        size={20}
        fillColor="#8EC255"
        unFillColor="#FFFFFF"
        text="Flowering"
        marginTop="5"
        iconStyle={{ borderColor: "#8EC255" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          fontFamily: "JosefinSans-Regular",
          textDecorationLine: "none",
        }}
        onPress={setSelection4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    maxHeight: 150,
    // backgroundColor: "lightgrey",
  },
});

export default Checkboxes;

// size={20}
// fillColor="green"
// unFillColor="#FFFFFF"
// text="Custom Checkbox"
// iconStyle={{ borderColor: "green" }}
// innerIconStyle={{ borderWidth: 2 }}
// textStyle={{ fontFamily: "JosefinSans-Regular" }}
// onPress={setSelection}
