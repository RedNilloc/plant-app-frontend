import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  PanResponder,
} from "react-native";
import Card from "../components/cards/genericCard";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {useUser} from "../contexts/userContext"

export default function YourPlants() {
  const {user} = useUser()
  const router = useRouter();
  const [zones, setZones] = useState([{
    is_outdoor: true,
    sun_level:"full sun",
    user_key: 2,
    zone_id:1,
    zone_name: "balcony"}]);
  const [newZone, setNewZone] = useState("");
  const [swipedZone, setSwipedZone] = useState(null);
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (user) {
        fetchZones();
      }
    }, [user]);
  
    const fetchZones = async () => {
      try {
        const response = await fetch(`https://plant-app-backend-87sk.onrender.com/api/zones/${user.user_id}`);
        if (!response.ok) throw new Error("Failed to fetch zones");
        const data = await response.json();
        console.log(data)
        setZones(data);
      } catch (error) {
        console.error("Error fetching zones:", error);
      }
    };

  const addZone = () => {
    if (newZone.trim() === "") return;
    setZones([...zones, { zoneName: newZone, plants: [] }]);
    setNewZone("");
  };

  const deleteZone = (zoneName) => {
    const updatedZone = zones.filter((zone) => zone.zoneName !== zoneName);
    setZones(updatedZone);
  };

  const panResponder = (zoneName) => {
    let dx = 0;

    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        dx = gestureState.dx;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (dx < -50) {
          setSwipedZone(zoneName);
        } else {
          setSwipedZone(null);
        }
      },
    });
  };
  if(loading){
    return "Loading..."
  }
else {
  return (
    <View style={styles.container} >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          setSwipedZone(null);
        }}
        accessible={false}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          {zones.map(({ zoneName, plants }) => (
            <View style={styles.section} key={zoneName}>
              <View
                style={styles.sectionHeader}
                {...panResponder(zoneName).panHandlers }
              >
                <View style={styles.headerRow}>
                  <Text style={styles.textSectionHeader}>{zoneName}</Text>

                  {swipedZone === zoneName && (
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => deleteZone(zoneName)}
                    >
                      <FontAwesome6 name="trash-can" size={26} color="red" />
                    </TouchableOpacity>
                  )}
                  
                </View>
              </View>

              {/* <View style={styles.sectionBody}>
                {plants.length > 0 ? (
                  plants.map((plant) => (
                    <View style={styles.cardContainer} key={plant.id}>
                      <Card contents={plant} />
                    </View> */}
                  {/* ))
                ) : (
                  <Text style={styles.noPlantsText}>No plants added</Text>
                )} */}

                <TouchableOpacity
                  style={styles.newPlantButton}
                  onPress={() => router.push("/pages/searchPage")}
                >
                  <Text style={styles.textButton}>+ Find New Plant</Text>
                </TouchableOpacity>
              </View>
            // </View>
        
          ))}

          <View style={styles.addZoneContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Zone..."
              value={newZone}
              onChangeText={setNewZone}
            />
            <TouchableOpacity style={styles.addButton} onPress={addZone}>
              <Text style={styles.textButton}>+ Add Zone</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  section: {
    marginBottom: 30,
    width: "100%",
  },
  sectionHeader: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
    marginBottom: 10,
  },
  textSectionHeader: {
    fontSize: 24,
    fontWeight: "500",
  },
  sectionBody: {
    width: "100%",
    alignItems: "center",
  },
  cardContainer: {
    alignSelf: "center",
    marginBottom: 15,
  },
  noPlantsText: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
    color: "#a7a7a7",
  },
  newPlantButton: {
    backgroundColor: "#8EC255",
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  addZoneContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
    width: "70%",
  },
  addButton: {
    backgroundColor: "#8EC255",
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    width: "30%",
  },
  deleteButton: {
    marginRight: 20,
  },
});