import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function SignUpButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.push("/pages/signupPage")}
    >
      <Text style={styles.text}>Sign Up</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8EC255",
    marginTop: 20,
    padding: 5,
    width: 220,
    alignSelf: "center",
    height: 55,
  },
  text: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "FugazOne_400Regular",
    fontSize: 30,
  },
});
