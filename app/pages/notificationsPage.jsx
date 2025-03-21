import { Text, View, SafeAreaView, ScrollView } from "react-native";
import PZHeader from "../components/header";
import PZFooter from "../components/footer";
import { StyleSheet } from "react-native";
import NotificationsCard from "../components/cards/NotificationsCard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../contexts/userContext.jsx";

export default function NotificationsPage() {
  const { user } = useUser();
  const [ownedPlants, setOwnedPlants] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const key = "c8fd269cfa37496d886101905251203";

  const wateringThreshold = {
    Minimum: 10,
    Average: 7,
    Frequent: 4,
  };

  useEffect(() => {
    const currentDay = new Date().toISOString().split("T")[0];

    axios
      .get(
        `https://plant-app-backend-87sk.onrender.com/api/users/${user.id}/owned_plants`
      )
      .then((response) => {
        const plantsWithWateringInfo = response.data.plants.map((plant) => {
          const lastWateredDate = new Date(plant.last_watered);

          const timeDifference =
            new Date().getTime() - lastWateredDate.getTime();

          const dayDifference = timeDifference / (1000 * 3600 * 24);

          const threshold = wateringThreshold[plant.watering];

          return {
            ...plant,
            last_watered: plant.last_watered || "2025-03-10",
            daysSinceWatered: Math.floor(dayDifference),
            wateringThreshold: threshold,
          };
        });

        setOwnedPlants(plantsWithWateringInfo);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError("Failed to load your plants :(");
        console.error("Error loading plants:", error);
      });

    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=London&days=1&aqi=no&alerts=no`
      )
      .then((response) => {
        setWeatherData(response.data);
        const rainToday =
          response.data.forecast.forecastday[0].day.daily_will_it_rain;

        if (rainToday === 1) {
          ownedPlants.forEach((plant) => {
            axios
              .patch(
                `https://plant-app-backend-87sk.onrender.com/api/users/${testUserId}/water`,
                { plant_id: plant.plant_id, date: currentDay }
              )
              .then(() => {
                setOwnedPlants((prevPlants) =>
                  prevPlants.map((newPlant) =>
                    newPlant.plant_id === plant.plant_id
                      ? { ...newPlant, last_watered: currentDay }
                      : newPlant
                  )
                );
              })
              .catch((error) => {
                console.error("Unable to update plant watering:", error);
              });
          });
        }
      })
      .catch((error) => {
        setError("Failed to load weather data :(");
        console.error("Error loading weather data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView style={styles.sav}>
        <ScrollView bounces={false}>
          <PZHeader>Notifications</PZHeader>
          <View style={styles.pageContent}>
            {loading ? (
              <Text>Loading plants...</Text>
            ) : error ? (
              <Text style={{ color: "red" }}>{error}</Text>
            ) : (
              <>
                {ownedPlants.map((plant, index) => (
                  <NotificationsCard key={index} plant={plant} />
                ))}
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
      <PZFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  sav: { flex: 1, backgroundColor: "#FFF" },
  pageContent: {
    paddingTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: "20%",
  },
});
