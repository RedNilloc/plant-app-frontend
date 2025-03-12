import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { Inter_300Light } from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { useFonts } from "expo-font";
import { Button } from "react-native-elements";
import { useState } from "react";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIndividualPlant } from "../../contexts/individualPlantContext";

function capitaliseFirstLetter(text) {
  if (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

function WaterButtonCard({ contents }) {
  const currentDay = new Date();
  const lastWateredDate = new Date(contents.last_watered);
  const timeDifference = currentDay.getTime() - lastWateredDate.getTime();
  const dayDifference = timeDifference / (1000 * 3600 * 24);
  const plant = useIndividualPlant();

  const wateringThreshold = {
    Minimum: 10,
    Average: 7,
    Frequent: 4,
  };

  const [needsWatered, setNeedsWatered] = useState(
    dayDifference > wateringThreshold[contents.watering] ? true : false
  );

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    FugazOne_400Regular,
    KronaOne_400Regular,
  });

  function handlePress() {
    plant.id = contents.plant_id;
    router.push("/pages/individualPlantPage");
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <Image
        style={styles.thumbnail}
        source={{ uri: contents.default_image }}
      />
      <View style={styles.textContents}>
        <Text style={styles.titleText}>
          {capitaliseFirstLetter(contents.common_name)}
        </Text>
        <View>
          {needsWatered ? (
            <Text style={styles.info}>This plant needs water!</Text>
          ) : (
            <Text style={styles.info}>This plant is ok</Text>
          )}
        </View>
      </View>
      <View>
        <Button
          buttonStyle={styles.waterButton}
          title=""
          icon={
            needsWatered ? (
              <MaterialCommunityIcons
                name="water-alert-outline"
                size={50}
                color="black"
                backgroundColor="#f29d97"
                borderRadius="10%"
                style={styles.alert}
              />
            ) : (
              <MaterialCommunityIcons
                name="water-check"
                size={50}
                color="black"
                style={styles.tick}
              />
            )
          }
          onPress={() => setNeedsWatered(!needsWatered)}
          //   onPress={() => setNeedsWatered(false)}
        />
      </View>
    </TouchableOpacity>
  );
}

export default WaterButtonCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E8F3DD",
    width: "100%",
    marginBottom: "3%",
  },
  titleText: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 16,
    margin: 5,
    marginRight: 50,
  },
  thumbnail: {
    flex: 1,
    maxWidth: "25%",
    minWidth: "25%",
    height: "100%",
  },
  alert: {
    marginLeft: 5.5,
  },
  tick: {
    margin: 2.9,
  },
  waterButton: {
    borderRadius: 0,
    maxWidth: "100%",
    height: 100,
    backgroundColor: "#98b8e8",
  },
  info: { margin: 5 },
});
