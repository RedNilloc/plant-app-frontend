import { Text, View, SafeAreaView, ScrollView } from "react-native";
import PZHeader from "../components/header";
import PZFooter from "../components/footer";
import { StyleSheet } from "react-native";
import NotificationsCard from "../components/cards/NotificationsCard.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NotificationsPage() {
  const testUserId = 2;
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
    const currentDay = new Date().toISOString().split("T")[0]; //correct date format

    axios
      .get(
        `https://plant-app-backend-87sk.onrender.com/api/users/${testUserId}/owned_plants`
      )
      .then((response) => {
        console.log(response.data, "This is the response data");
        const plantsWithWateringInfo = response.data.plants.map((plant) => {
          const lastWateredDate = new Date(plant.last_watered);
          console.log(lastWateredDate, "This is the lastWateredDate");
          // ? lastWateredDate
          // : new Date("2025-03-03");
          const timeDifference = new Date().getTime() - lastWateredDate.getTime();
          console.log(timeDifference, "This is the timeDifference");
          const dayDifference = timeDifference / (1000 * 3600 * 24);
          console.log(dayDifference, "This is the dayDifference");

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
  useEffect(() => {
    console.log(ownedPlants); // This will log when ownedPlants updates
  }, [ownedPlants]);

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
                <Text>
                  Current Temperature: {weatherData?.current?.temp_c}°C
                </Text>
                <Text>
                  Will it Ra?{" "}
                  {
                    weatherData?.forecast?.forecastday?.[0]?.day
                      ?.daily_will_it_rain
                  }
                </Text>
                <Text>Hnnnrgh? {weatherData?.current?.temp_f}F</Text>
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
  sav: { flex: 1, backgroundColor: "#222926" },
  pageContent: {
    paddingTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: "20%",
  },
});
