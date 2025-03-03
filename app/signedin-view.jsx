import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function SignedInView() {
  const router = useRouter();

  const pages = [
    {
      title: "View Your Plants",
      path: "/plants",
      image: require("../assets/images/pinkgreenplant.jpg"),
    },
    {
      title: "Search For Plants",
      path: "/search",
      image: require("../assets/images/bluegreenplant.jpg"),
    },
    {
      title: "Favourites",
      path: "/favourites",
      image: require("../assets/images/flowers.jpg"),
    },
    {
      title: "Community",
      path: "/community",
      image: require("../assets/images/redpetalplant.jpg"),
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={pages}
        keyExtractor={(item) => item.path}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "white",
  },
  button: {
    height: "25%",
    width: "100%",
    marginVertical: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontFamily: "Fugaz One",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.2)",
    //opacity: 0.7,
  },
});
