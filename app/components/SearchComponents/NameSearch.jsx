import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { useSearch } from "../../contexts/searchContext";

export default function NameSearch() {
  const [form, setForm] = useState({
    plantName: "",
  });
  const { params } = useSearch();
  return (
    <View>
      {/* <Text>
        Current params: name: {params.common_name}, indoor:
        {params.tropical}, maintenance:
        {params.maintenance},sunlight: {params.sunlight}, poisonous_to_pets:
        {params.poisonous_to_pets}, poisonous_to_humans:
        {params.poisonous_to_humans}, edible: {params.edible}, flowers:
        {params.flowers}
      </Text> */}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search by plant name.."
        placeholderTextColor="#6b7280"
        value={form.plantName}
        onChangeText={(plantName) => {
          (params.common_name = plantName), setForm({ ...form, plantName });
        }}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 0,
    borderColor: "#8EC255",
  },
});
