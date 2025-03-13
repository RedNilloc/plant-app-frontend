import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useUser } from "../../contexts/userContext";
import axios from "axios";
import { useRouter } from "expo-router";

export default function AddZoneToYourPlants() {
  const [openLight, setOpenLight] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [sunLightValue, setSunLightValue] = useState(null);
  const [locationValue, setlocationValue] = useState(null);
  const [zoneName, setZoneName] = useState(null);
  const [sunLightItems, setSunLightItems] = useState([
    { label: "Full sun", value: "full sun" },
    { label: "Deep shade", value: "deep shade" },
    { label: "Part shade", value: "part shade" },
  ]);
  const [optimisticZone, setOptimisticZone] = useState(false);

  const [locationItems, setlocationItems] = useState([
    { label: "Indoor", value: "true" },
    { label: "Outdoor", value: "false" },
  ]);
  const [error, setError] = useState(null);
  const { user } = useUser();
  const router = useRouter();

  const handleSunLevel = (value) => {
    setSunLightValue(value);
  };

  const handleIndoorOutdoor = (value) => {
    setlocationValue(value);
  };

  const handleZoneName = (text) => {
    setZoneName(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("button clicked");

    const newZone = {
      user: user.id,
      is_outdoor: locationValue,
      sun_level: sunLightValue,
      zone_name: zoneName,
    };

    axios
      .post(`https://plant-app-backend-87sk.onrender.com/api/zones`, newZone)
      .then((response) => {
        const createdZone = response.data.zone;
        setZoneName(createdZone.zone_name);
        setOptimisticZone(true);
        setlocationValue(null);
        setSunLightValue(null);
        setError(null);
      })
      .catch((error) => {
        setError("Error Adding Zone");
      });
  };

  return (
    <View style={styles.addZoneContainer}>
      {optimisticZone ? (
        <View style={styles.headerRow}>
          <Text style={styles.textSectionHeader}>{zoneName}</Text>
          <View style={styles.line} />
          <View style={styles.addZoneContent}>
            <Text style={styles.noPlantsText}>No plants added</Text>
            <TouchableOpacity
              style={styles.newPlantButton}
              onPress={() => router.push("/pages/searchPage")}
            >
              <Text style={styles.textButton}>+ Find New Plant</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        ""
      )}
      <Text style={styles.addZoneHeaderText}>Add A New Zone</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Zone..."
        value={zoneName}
        onChangeText={handleZoneName}
      />
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          placeholder="Select light level"
          style={styles.dropdown}
          open={openLight}
          value={sunLightValue}
          items={sunLightItems}
          setOpen={setOpenLight}
          setValue={setSunLightValue}
          setItems={setSunLightItems}
          zIndex={3000}
          zIndexInverse={1000}
          dropDownDirection="BOTTOM"
          dropDownContainerStyle={{
            backgroundColor: "#FFFFFF",
            marginLeft: 50,
            marginRight: 50,
            width: 290,
            borderRadius: 0,
          }}
          textStyle={{
            fontSize: 16,
          }}
          onChangeValue={handleSunLevel}
          listMode="SCROLLVIEW"
        />
      </View>
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          placeholder="Indoor or Outdoor?"
          style={styles.dropdown}
          open={openLocation}
          value={locationValue}
          items={locationItems}
          setOpen={setOpenLocation}
          setValue={setlocationValue}
          setItems={setlocationItems}
          zIndex={1000}
          zIndexInverse={1000}
          dropDownDirection="BOTTOM"
          textStyle={{
            fontSize: 16,
          }}
          onChangeValue={handleIndoorOutdoor}
          listMode="SCROLLVIEW"
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.textButton}>+ Add Zone</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  dropdownContainer: {
    margin: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  dropdown: {
    marginLeft: 30,
    marginRight: 30,
    width: 290,
    backgroundColor: "#FFFFFF",
    borderColor: "#8EC255",
    paddingTop: "0%",
    paddingBottom: "0%",
    borderRadius: 0,
  },
  input: {
    flex: 1,
    borderColor: "#8EC255",
    borderWidth: 1,
    padding: 15,
    width: "74.6%",
    marginLeft: 50,
  },
  addButton: {
    backgroundColor: "#8EC255",
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    width: "30%",
    justifyContent: "center",
    alignSelf: "center",
  },
  sectionHeader: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerRow: {
    marginVertical: 10,
  },
  textSectionHeader: {
    fontSize: 24,
    fontWeight: "500",
    marginLeft: 10,
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
  addZoneContent: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
    marginHorizontal: 8,
  },
  addZoneHeaderText: {
    fontSize: 24,
    textAlign: "center",
    margin: 25,
    color: "#8EC255",
    fontWeight: "700",
    marginTop: 70,
  },
});
