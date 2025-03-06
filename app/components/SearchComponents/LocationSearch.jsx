import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function LocationInput() {
  const [form, setForm] = useState({
    location: "",
  });

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Input location...(optional)"
        placeholderTextColor="#6b7280"
        value={form.plantName}
        onChangeText={(location) => setForm({ ...form, location })}
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
