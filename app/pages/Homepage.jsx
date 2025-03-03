import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomePage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome{"\n"}
        to the {"\n"}
        PlantZone
      </Text>

      <View style={styles.contentContainer}>
        <Image //PLACEHOLDER FOR OUR LOGO
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.textButton}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    margin: 25,
    color: "white",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 15,
    width: "50%",
    borderRadius: 5,
  },
  textButton: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
