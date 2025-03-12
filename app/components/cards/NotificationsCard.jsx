import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { Inter_300Light } from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { useFonts } from "expo-font";
import { Button } from "@react-navigation/elements";

export default function NotificationsCard({ plant }) {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    FugazOne_400Regular,
    KronaOne_400Regular,
  });

  const needsWater = plant.daysSinceWatered > plant.wateringThreshold
  // console.log(plant.daysSinceWatered, "pllLLLLLLEEEEEEEAAAASSSE")

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContents}>  
        <Text style={styles.titleText}>Important!</Text>
        <Text style={styles.lineOne}>
          <Text>{console.log(plant.daysSinceWatered, "EEEEEEEEE")}</Text>
          {needsWater
            ? `Oh no! You haven't watered your ${plant.common_name} since ${plant.last_watered}! ${plant.common_name} needs water badly!`
            : `Your ${plant.common_name} is all good for now!`}
        </Text>
      </View>
    </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#d9d9d9",
    width: "80%",
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
  button: {
    borderRadius: 0,
    flex: 3,
    maxWidth: "5%",
    height: "100%",
  },
});