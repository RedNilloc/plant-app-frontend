import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import poison_ivy from "../../assets/images/poison-ivy.png.png";
import { useRouter } from "expo-router";
import axios from "axios";
import { useUser } from "../contexts/userContext";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useUser();

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("https://plant-app-backend-87sk.onrender.com/api/users")
      .then((response) => {
        setUsersList(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleLogin() {
    if (!form) {
      Alert.alert("ERROR!", "Please enter details");
      return;
    }
    usersList.forEach((eachUser) => {
      if (form.email === eachUser.email) {
        user.user_id = eachUser.user_id;
        user.username = eachUser.username;
        user.email = eachUser.email;
        user.geolocation = eachUser.geolocation;
        //VERSION WITH STATE THAT I COULDN'T GET WORKING
        // setUser({
        //   user_id: eachUser.user_id,
        //   username: eachUser.username,
        //   email: eachUser.email,
        //   geolocation: eachUser.geolocation,
        // });
      }
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={poison_ivy} style={styles.headerImg} />
        <Text style={styles.title}>Sign-in to the Plant Zone!</Text>
        <Text style={styles.subtitle}>Why stop at a green thumb?</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Email address</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            style={styles.inputControl}
            placeholder="collin@coolmail.com"
            placeholderTextColor="#6b7280"
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
          ></TextInput>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.inputControl}
              placeholder="swordfish"
              placeholderTextColor="#6b7280"
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                handleLogin();
                Alert.alert("Successfully logged in!");
                router.push("../pages/homePage");
              }}
            >
              <View
                style={styles.button}
                onPress={() => router.push("../pages/homePage")}
              >
                <Text style={styles.buttonText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    color: "#1e1e1e",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
    borderRadius: 0,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fonrtSize: 15,
    fontWeight: "500",
    color: "#222",
    borderColor: "#8EC255",
    borderWidth: 1,
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  button: {
    backgroundColor: "#8EC255",
    borderRadius: 8,

    borderColor: "#075eec",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
