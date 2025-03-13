import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { Inter_300Light } from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

export default function NotificationsCard({ plant }) {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    FugazOne_400Regular,
    KronaOne_400Regular,
  });
  const router = useRouter();
  const needsWater = plant.daysSinceWatered > plant.wateringThreshold;
  return (
    <TouchableOpacity
      onPress={() => router.push("../../pages/yourPlantsPage")}
      style={needsWater ? styles.containerYellow : styles.containerGreen}
    >
      <Image style={styles.thumbnail} source={{ uri: plant.default_image }} />
      <View style={styles.textContents}>
        
        <Text style={styles.titleText}>
          {needsWater ? "Important!" : "This plant is okay"}
        </Text>
        <Text style={styles.lineOne}>
          {needsWater
            ? `Oh no! You haven't watered your ${plant.common_name} since ${plant.last_watered}. Your ${plant.common_name} needs water.`
            : `Your ${plant.common_name} is all good for now!`}
        </Text>
        <Text style={styles.lineTwo}>
          Press here to see your plants.
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerYellow: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFEB99",
    width: "80%",
    marginBottom: "3%",
  },
  containerGreen: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#DFFFD6",
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
  lineTwo: {
    fontFamily: "Inter_300Light",
    fontStyle: "italic",
    fontSize: 12,
  },
  thumbnail: {
    flex: 1,
    maxWidth: "25%",
    minWidth: "25%",
    height: "100%",
  },
});
