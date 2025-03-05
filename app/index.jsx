import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Temporary navigation</Text>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/pages/welcomePage")}
        >
          <Text style={styles.buttonText}>Welcome page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/pages/loginPage")}
        >
          <Text style={styles.buttonText}>Login page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/pages/homePage")}
        >
          <Text style={styles.buttonText}>Home page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/pages/searchPage")}
        >
          <Text style={styles.buttonText}>Search page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/pages/yourPlantsPage")}
        >
          <Text style={styles.buttonText}>Your Plants page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
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
