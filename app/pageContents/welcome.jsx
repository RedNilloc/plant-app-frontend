import { View, StyleSheet } from "react-native";
import TitleArea from "../components/WelcomeComponents/TitleArea";
import SignUpButton from "../components/WelcomeComponents/SignupButton";
import LoginButton from "../components/WelcomeComponents/LoginButton";
import { useFonts } from "expo-font";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";

export default function Welcome() {
  const [fontsLoaded] = useFonts({
    FugazOne_400Regular,
  });
  return (
    <View style={styles.container}>
      <TitleArea></TitleArea>
      <SignUpButton></SignUpButton>
      <LoginButton></LoginButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F3DD",
    marginTop: 0,
  },
});
