import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import PZHeader from "../components/header";
import PZFooter from "../components/footer";

const { width, height } = Dimensions.get("window");

export default function SignedInView() {
  const router = useRouter();

  const pages = [
    {
      title: "View Your Plants",
      path: "/plants",
      image: require("../../assets/images/pinkgreenplant.jpg"),
    },
    {
      title: "Search For Plants",
      path: "/Search",
      image: require("../../assets/images/bluegreenplant.jpg"),
    },
    {
      title: "Favourites",
      path: "/favourites",
      image: require("../../assets/images/flowers.jpg"),
    },
    {
      title: "Community",
      path: "/community",
      image: require("../../assets/images/redpetalplant.jpg"),
    },
  ];
  return (
    <SafeAreaView style={styles.sav}>
      <PZHeader>Home</PZHeader>
      <View style={styles.content}>
        <FlatList
          data={pages}
          keyExtractor={(item) => item.path}
          contentContainerStyle={styles.container}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(item.path)}
              >
                <ImageBackground source={item.image} style={styles.image}>
                  <Text style={styles.text}>{item.title}</Text>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <PZFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sav: { flex: 1, backgroundColor: "#222926" },
  container: {
    alignItems: "center",
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  button: {
    height: height * 0.2,
    width: width * 0.9,
    marginVertical: 8,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
  },
  text: {
    color: "white",
    fontSize: width * 0.06,
    fontFamily: "Fugaz One",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
