import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LoginForm></LoginForm>
      <Text style={styles.formFooter}>
        {" "}
        Don't have an account yet?{" "}
        <Text
          style={{ textDecorationLine: "underline" }}
          onPress={() => router.push("../pages/signupPage")}
        >
          Click here to sign-up!
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginBottom: 50,
    flex: 1,
  },

  formFooter: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
  },
});
