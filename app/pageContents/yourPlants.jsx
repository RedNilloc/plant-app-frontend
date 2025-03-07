import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  PanResponder,
  Animated,
} from "react-native";
import Card from "../components/cards/genericCard";
import { useState } from "react";
import { useRouter } from "expo-router";
import useKeyboardUp from "../utility/keyboardVisible";

export default function YourPlants() {
  const router = useRouter();
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  const [zones, setZones] = useState([
    {
      //plants property should be an empty array. Fake data for viewing purposes
      name: "Balcony",
      plants: [
        { id: 1, title: "Roses", Sunlight: "Needs Sun", Water: "Once a day" },
        {
          id: 2,
          title: "Cactus",
          Sunlight: "Plenty of Sun required",
          Water: "Little bit",
        },
      ],
    },
    {
      //plants property should be an empty array. Fake data for viewing purposes
      name: "Garden",
      plants: [
        {
          id: 3,
          title: "Tomato",
          Sunlight: "Plenty of Sun required",
          Water: "Plenty of water",
        },
      ],
    },
    {
      name: "Indoor",
      plants: [],
    },
  ]);

  const [newZone, setNewZone] = useState("");
  const [swipedZone, setSwipedZone] = useState(null);

  const isKeyboardOpen = useKeyboardUp();

  const addZone = () => {
    if (newZone.trim() === "") return;
    setZones([...zones, { name: newZone, plants: [] }]);
    setNewZone("");
  };

  const deleteZone = (zoneName) => {
    const updatedZone = zones.filter((zone) => zone.name !== zoneName);
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

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}
      >
        <KeyboardAvoidingView
          style={styles.sav}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <FlatList
            data={zones}
            keyExtractor={(item) => item.name}
            onScroll={(e) => {
              scrollY.setValue(e.nativeEvent.contentOffset.y);
            }}
            contentContainerStyle={[
              styles.contentContainer,
              { paddingBottom: isKeyboardOpen ? 50 : 100 },
            ]}
            ListHeaderComponent={
              <Animated.View
                style={{
                  transform: [{ translateY: translateY }],
                }}
              ></Animated.View>
            }
            renderItem={({ item }) => {
              return (
                <View
                  style={styles.section}
                  {...panResponder(item.name).panHandlers}
                >
                  <Text style={styles.sectionTitle}>{item.name}</Text>

                  {swipedZone === item.name && (
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => deleteZone(item.name)}
                    >
                      <Text>Delete</Text>
                    </TouchableOpacity>
                  )}

                  {item.plants.length > 0 ? (
                    item.plants.map((plant) => (
                      <View key={`${plant.id}`} style={styles.cardContainer}>
                        <Card contents={plant} />
                      </View>
                    ))
                  ) : (
                    <Text style={styles.noPlantsText}>No plants added</Text>
                  )}

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      router.push("");
                    }}
                  >
                    <Text style={styles.textButton}>+ Find New Plant</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            ListFooterComponent={
              <View style={styles.addZoneContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Zone Name"
                  value={newZone}
                  onChangeText={setNewZone}
                />
                <TouchableOpacity style={styles.addButton} onPress={addZone}>
                  <Text style={styles.textButton}>+ Add Zone</Text>
                </TouchableOpacity>
              </View>
            }
          />
          {!isKeyboardOpen}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  sav: { flex: 1, backgroundColor: "#222926" },
  contentContainer: {
    paddingBottom: 80,
    backgroundColor: "#f9f9f9",
  },
  pageContent: {
    paddingTop: "10%",
    backgroundColor: "#ffffff",
    paddingBottom: "20%",
  },
  section: {
    width: "100%",
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: 30,
    margin: "20",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  cardContainer: {
    width: "100%",
    marginBottom: 5,
    alignItems: "center",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 0.3,
    borderColor: "#000",
    width: 200,
  },
  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  noPlantsText: {
    textAlign: "center",
    marginBottom: 15,
  },

  addZoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f9f9f9",
    paddingBottom: 50,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#8EC255",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  deleteButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 0.3,
    width: 80,
    right: -80,
    alignItems: "center",
    left: "40%",
    bottom: "5%",
  },
});
