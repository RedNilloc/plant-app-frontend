import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";
import PZFooter from "../components/footer";
import PZHeader from "../components/header";
import Search from "../pageContents/search";
import { useFonts } from "expo-font";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";

export default function searchPage() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    FugazOne_400Regular,
  });
  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView>
        <KeyboardAvoidingView>
          {/* <ScrollView style={styles.scroll} bounces={false}> */}
          <PZHeader>Search</PZHeader>
          <View style={styles.container}>
            <Search />
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("./searchResults")}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <PZFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
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
    fontSize: 30,
  },
  scroll: {
    minHeight: 1500,
  },
});
