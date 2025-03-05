import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import PZFooter from "../components/footer";
import PZHeader from "../components/header";
import Search from "../pageContents/search";

export default function searchPage() {
  const router = useRouter();
  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView>
        {/* <ScrollView bounces={false}> */}
        <PZHeader>Search</PZHeader>
        <View style={styles.container}>
          <Search />
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("./searchResults")}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
      <PZFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#8EC255",
    margin: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});
