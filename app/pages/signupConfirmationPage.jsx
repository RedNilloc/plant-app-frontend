import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function SignupConfirmation() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E8ECF0" }}>
      <View style={styles.container}>
        <View style={styles.header}>  
          <Text style={styles.title}>Account successfully created!</Text>
          <Text style={styles.subtitle}>
            Click below to return to the welcome page:
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ marginTop: "auto" }}
            onPress={() => 
              router.push("/pages/welcomePage")
            }
          >
            <Text style={styles.formFooter}>
            <Text style={{ textDecorationLine: "underline" }}>Click me!</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
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
    backgroundColor: "#B5E48C",
    borderRadius: 8,
    borderWidth: 1,
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
