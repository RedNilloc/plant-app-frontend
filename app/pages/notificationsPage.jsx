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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://plant-app-backend-87sk.onrender.com/api/users/${testUserId}/owned_plants`)
      .then((response) => {
        const currentDay = new Date();

        
        const plantsWithWateringInfo = response.data.plants.map((plant) => {
          const lastWateredDate = plant.last_watered ? new Date(plant.last_watered) : new Date("2025-02-01");
          const timeDifference = currentDay.getTime() - lastWateredDate.getTime();
          const dayDifference = timeDifference / (1000 * 3600 * 24);

          return {
            ...plant,
            last_watered: plant.last_watered || "2025-02-01",
            daysSinceWatered: Math.floor(dayDifference), 
          };
        });

        setOwnedPlants(plantsWithWateringInfo);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError("Failed to load plants");
      });
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView style={styles.sav}>
        <ScrollView bounces={false}>
          <PZHeader>Notifications</PZHeader>
          <View style={styles.pageContent}>
            <Text>This is a notifications page!</Text>

            {loading ? (
              <Text>Loading plants...</Text>
            ) : error ? (
              <Text style={{ color: "red" }}>{error}</Text>
            ) : (
              ownedPlants.map((plant, index) => (
                <NotificationsCard key={index} plant={plant} />
              ))
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