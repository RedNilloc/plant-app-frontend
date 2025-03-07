import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { Inter_400Regular, Inter_300Light } from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { useFonts } from "expo-font";
import { Button } from "@react-navigation/elements";

export default function NotificationsCard({
  plantName,
  lastWatered,
  needsWatered,
  plantImage,
}) {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    FugazOne_400Regular,
    KronaOne_400Regular,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.thumbnail} source={plantImage} /> 
      <View style={styles.textContents}>
        <Text style={styles.titleText}>Important!</Text>
        <Text style={styles.lineOne}>
          Oh no! I'm afraid it's been {lastWatered - needsWatered} day(s) since
          you watered your {plantName}!
        </Text>
      </View>
      <Button style={styles.button}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#d9d9d9",
    width: "80%",
    Height: "5.5rem",
    marginBottom: "3%",
  },
  textContents: {
    flex: 2,
    flexDirection: "column",
    height: "100%",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "2%",
  },

  titleText: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 16,
  },
  lineOne: {
    fontFamily: "Inter_300Light",
    fontStyle: "italic",
    fontSize: 16,
  },
  lineTwo: {
    fontFamily: "Inter_300Light",
    fontStyle: "italic",
    fontSize: 16,
  },
  lineThree: {
    fontFamily: "Inter_300Light",
    fontSize: 16,
  },
  thumbnail: {
    flex: 1,
    // maxWidth: "25%",
    // minWidth: "25%",
    width: 100,
    height: 100,
  },
  button: {
    borderRadius: 0,
    flex: 3,
    maxWidth: "5%",
    height: "100%",
  },
});
