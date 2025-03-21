import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import useGeolocation from "../utility/geolocation";

const { width, height } = Dimensions.get("window");

export default function SignupForm() {
  const router = useRouter();
  const location = useGeolocation();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSignUp = () => {
    const email = form.email;
    const username = form.username;
    const password = form.password;
    const passwordConfirm = form.passwordConfirm;

    if (!email || !username || !password || !passwordConfirm) {
      Alert.alert("ERROR!", "Please fill in all fields");
      return;
    }

    if (password !== passwordConfirm) {
      Alert.alert("ERROR!", "Passwords do not match");
      return;
    }

    let geolocation = "NotProvided";

    if (location) {
      geolocation = `${location.coords.latitude}, ${location.coords.longitude}`;
    }

    const newUserInfo = { username, email, geolocation };

    axios
      .post(
        `https://plant-app-backend-87sk.onrender.com/api/users`,
        newUserInfo
      )
      .then((response) => {
        const { user_id } = response.data.user;
        Alert.alert(
          "SUCCESS!",
          "Account created successfully! Let's get you into the Plant Zone!"
        );
        router.push("/pages/signupConfirmationPage");
      })
      .catch((error) => {
        Alert.alert("ERROR!", "Unable to create an account! Please try again");
      });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.inputLabel}>
        Please provide a valid e-mail address:
      </Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        style={styles.inputControl}
        placeholder="yourname@somethingmail.com"
        placeholderTextColor="#6b7280"
        value={form.email}
        onChangeText={(email) => setForm({ ...form, email })}
      ></TextInput>

      <Text style={styles.inputLabel}>Please create your username:</Text>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="default"
        style={styles.inputControl}
        placeholder="username"
        placeholderTextColor="#6b7280"
        value={form.username}
        onChangeText={(username) => setForm({ ...form, username })}
      ></TextInput>

      <Text style={styles.inputLabel}>
        Please come up with a unique but memorable password:
      </Text>

      <TextInput
        secureTextEntry
        style={styles.inputControl}
        placeholder="password"
        placeholderTextColor="#6b7280"
        value={form.password}
        onChangeText={(password) => setForm({ ...form, password })}
      />

      <Text style={styles.inputLabel}>Please confirm your password:</Text>

      <TextInput
        secureTextEntry
        style={styles.inputControl}
        placeholder="password confirmation"
        placeholderTextColor="#6b7280"
        value={form.passwordConfirm}
        onChangeText={(passwordConfirm) =>
          setForm({ ...form, passwordConfirm })
        }
      />

      <View style={styles.formAction}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.text}>Create Account!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
    color: "#8EC255",
  },
  form: {
    margin: 24,
    flex: 1,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    marginBottom: 20,
    height: 44,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    borderWidth: 1,
    borderColor: "#8EC255",
  },
  formAction: {
    marginVertical: 24,
  },
  button: {
    backgroundColor: "#8EC255",
    margin: 20,
    padding: 10,
    width: 220,
    alignSelf: "center",
  },
  text: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "FugazOne_400Regular",
    fontSize: 22,
  },
});
