import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import english_ivy from "../../assets/images/english-ivy.jpg";
import SignupForm from "../components/SignupForm";

const { width, height } = Dimensions.get("window");

export default function SignUp() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.margin}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create your account below!</Text>
        </View>
      </View>
      <SignupForm style={styles.margin}></SignupForm>
      <Image source={english_ivy} style={styles.bottomImg} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginBottom: 10,
  },
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
    color: "#8EC255",
  },
  bottomImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    height: height * 0.1,
    width: width * 0.9,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    color: "#1e1e1e",
    marginBottom: 6,
    textAlign: "center",
  },
});
