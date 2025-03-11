// import {
//     Text,
//     View,
//     StyleSheet,
//     TouchableOpacity,
//     TextInput,
//     KeyboardAvoidingView,
//     Platform,
//     Keyboard,
//     TouchableWithoutFeedback,
//     FlatList,
//   } from "react-native";
//   import Card from "../components/cards/genericCard";
//   import { useState, useEffect } from "react";
//   import { useRouter } from "expo-router";
//   // import { useAuth } from "../context/AuthContext"; // is this what hanna is using?
//   import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
  
//   export default function YourPlants() {
//     const router = useRouter();
//     // const { user } = useAuth(); // ????????
//     const user_id = 1
//     const user = user_id
//     const [zones, setZones] = useState([]);
//     const [newZone, setNewZone] = useState("");
  
//     // useEffect(() => {
//     //   if (user) {
//     //     fetchZones();
//     //   }
//     // }, [user]);
  
//     useEffect(() => {
//       fetchZones();
//     }, []);
  
//     const fetchZones = async () => {
//       try {
//         const response = await fetch(`https://plant-app-backend-87sk.onrender.com/api/zones/${user_key}`);
//         if (!response.ok) throw new Error("Failed to fetch zones");
//         const data = await response.json();
//         console.log("fetching data")
//         setZones(data);
//       } catch (error) {
//         console.error("Error fetching zones:", error);
//       }
//     };
  
//     const addZone = async () => {
//       if (newZone.trim() === "") return;
//       try {
//         const response = await fetch(`https://plant-app-backend-87sk.onrender.com/api/zones/${user_key}`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ user_key: user_key, zone_name: newZone }), //should I add in the other table titles ????
//         });
//         if (!response.ok) throw new Error("Failed to add zone");
//         const newZoneData = await response.json();
//         setZones([...zones, newZoneData]);
//         setNewZone("");
//       } catch (error) {
//         console.error("Error adding zone:", error);
//       }
//     };
  
//     const deleteZone = async (zone_id) => {
//       try {
//         const response = await fetch(`https://plant-app-backend-87sk.onrender.com/api/zones/${zone_id}`, { method: "DELETE" });
//         if (!response.ok) throw new Error("Failed to delete zone");
//         setZones(zones.filter((zone) => zone.zone_id !== zone_id));
//       } catch (error) {
//         console.error("Error deleting zone:", error);
//       }
//     };
  
//     const deletePlant = async (plant_id) => {
//       try {
//         const response = await fetch(`https://plant-app-backend-87sk.onrender.com/api/users/owned_plants/${owned_plant_key}`, { method: "DELETE" });
//         if (!response.ok) throw new Error("Failed to delete plant");
//         setZones(zones.map((zone) => ({
//           ...zone,
//           plants: zone.plants.filter((plant) => plant.plant_id !== plant_id),
//         })));
//       } catch (error) {
//         console.error("Error deleting plant:", error);
//       }
//     };