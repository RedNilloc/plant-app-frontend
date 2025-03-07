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
import { useFonts } from "expo-font";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";

const { width, height } = Dimensions.get("window");

export default function SignedInView() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    FugazOne_400Regular,
  });

  const pages = [
    {
      title: "View Your Plants",
      path: "./yourPlantsPage",
      image: require("../../assets/images/pinkgreenplant.jpg"),
    },
    {
      title: "Search For Plants",
      path: "./searchPage",
      image: require("../../assets/images/bluegreenplant.jpg"),
    },
    {
      title: "Favourites",
      path: "./favouritesPage",
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sav: { flex: 1, backgroundColor: "#222926" },
  container: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  button: {
    height: height * 0.2,
    width: width,
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
    fontFamily: "FugazOne_400Regular",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
