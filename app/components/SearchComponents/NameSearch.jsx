import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function NameSearch() {
  const [form, setForm] = useState({
    plantName: "",
  });

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search by plant name.."
        placeholderTextColor="#6b7280"
        value={form.plantName}
        onChangeText={(plantName) => setForm({ ...form, plantName })}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 0,
    borderColor: "#8EC255",
  },
});
