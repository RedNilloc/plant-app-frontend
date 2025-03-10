import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSearch } from "../../contexts/searchContext";

const Checkboxes = () => {
  const [filterToxicToPets, setFilterToxicToPets] = useState(false);
  const [filterToxicToHumans, setFilterToxicToHumans] = useState(false);
  const [filterEdible, setFilterEdible] = useState(false);
  const [filterFlowering, setFilterFlowering] = useState(false);
  const { params } = useSearch();

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        isChecked={filterToxicToPets}
        fillColor="#8EC255"
        unFillColor="#FFFFFF"
        size={25}
        useBuiltInState={false}
        text="Non-toxic for pets"
        marginTop="5"
        iconStyle={{ borderColor: "#8EC255" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          fontFamily: "JosefinSans-Regular",
          textDecorationLine: "none",
          fontSize: 17,
        }}
        onPress={(checked) => {
          setFilterToxicToPets(!filterToxicToPets);
          params.poisonous_to_pets = filterToxicToPets.toString();
        }}
      />
      <BouncyCheckbox
        isChecked={filterToxicToHumans}
        fillColor="#8EC255"
        unFillColor="#FFFFFF"
        size={25}
        useBuiltInState={false}
        text="Non-toxic for humans"
        marginTop="5"
        iconStyle={{ borderColor: "#8EC255" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          fontFamily: "JosefinSans-Regular",
          textDecorationLine: "none",
          fontSize: 17,
        }}
        onPress={(checked) => {
          setFilterToxicToHumans(!filterToxicToHumans);
          params.poisonous_to_humans = filterToxicToHumans.toString();
        }}
      />
      <BouncyCheckbox
        isChecked={filterEdible}
        fillColor="#8EC255"
        unFillColor="#FFFFFF"
        size={25}
        useBuiltInState={false}
        text="Edible"
        marginTop="5"
        iconStyle={{ borderColor: "#8EC255" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          fontFamily: "JosefinSans-Regular",
          textDecorationLine: "none",
          fontSize: 17,
        }}
        onPress={(checked) => {
          setFilterEdible(!filterEdible);
          params.edible = (!filterEdible).toString();
        }}
      />
      <BouncyCheckbox
        isChecked={filterFlowering}
        fillColor="#8EC255"
        unFillColor="#FFFFFF"
        size={25}
        useBuiltInState={false}
        text="Flowering"
        marginTop="5"
        iconStyle={{ borderColor: "#8EC255" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          fontFamily: "JosefinSans-Regular",
          textDecorationLine: "none",
          fontSize: 17,
        }}
        onPress={(checked) => {
          setFilterFlowering(!filterFlowering);
          params.flowers = (!filterFlowering).toString();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    marginTop: 15,
    maxHeight: 150,
  },
});

export default Checkboxes;
