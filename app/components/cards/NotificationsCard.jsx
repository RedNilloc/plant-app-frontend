import { Text, View, StyleSheet, Image, SafeAreaView } from "react-native";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { Inter_400Regular, Inter_300Light } from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { useFonts } from "expo-font";
import { Button } from "@react-navigation/elements";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NotificationsCard({
  user_id,
  user,
  plant,
  zone,
  last_watered,
}) {
  const [ownedPlants, setOwnedPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    FugazOne_400Regular,
    KronaOne_400Regular,
  });

  useEffect(() => {
    axios
      .get(
        `https://plant-app-backend-87sk.onrender.com/api/users/${user_id}/owned_plants`
      )
      .then((response) => {
        const currentDay = new Date();
        const testWateredDatePlants = response.data.plants.map((plant) => {
          const lastWateredDate = new Date(plant.last_watered) || "2025-02-01";
          const timeDifference = currentDay.getTime() - lastWateredDate.getTime();
          const dayDifference = timeDifference / (1000 * 3600 * 24);

          return {
            ...plant,
            last_watered: plant.last_watered || "2025-02-01",
            daysSinceWatered: dayDifference,
          };
        });
        setOwnedPlants(testWateredDatePlants);
        console.log(testWateredDatePlants);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError("Failed to load plants");
      });
  }, [user_id]);

  console.log(ownedPlants);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContents}>
        <Text style={styles.titleText}>Important!</Text>
        {ownedPlants.length > 0 ? (
          ownedPlants.map((plant, index) => {
            const needsWater = plant.daysSinceWatered > 7;
            console.log(
              `Plant: ${plant.common_name}, Last Watered: ${plant.last_watered}, Days Since: ${plant.daysSinceWatered}`
            );
            return (
              <Text key={index} style={styles.lineOne}>
                {needsWater
                  ? `Oh no! I'm afraid you haven't watered your ${plant.common_name} since ${plant.last_watered}!`
                  : `${plant.common_name} is allllllright!`}
              </Text>
            );
          })
        ) : (
          <Text style={styles.lineOne}>
            You've not selected any plants yet, so no notification 4 u, fwiend!
          </Text>
        )}
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
