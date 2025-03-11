import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import IndoorOutdoor from "../components/SearchComponents/IndoorOutdoor";
import Checkboxes from "../components/SearchComponents/Checkboxes";
import CareLevel from "../components/SearchComponents/CareLevel";
import SunlightLevel from "../components/SearchComponents/SunlightLevel";
import NameSearch from "../components/SearchComponents/NameSearch";
import LocationInput from "../components/SearchComponents/LocationSearch";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { useEffect } from "react";
import { useSearch } from "../contexts/searchContext";

export default function Search() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    FugazOne_400Regular,
  });
  const { params } = useSearch();
  useEffect(() => {
    delete params.sunlight;
    delete params.common_name;
    delete params.tropical;
    delete params.maintenance;
    delete params.poisonous_to_pets;
    delete params.poisonous_to_humans;
    delete params.edible;
    delete params.flowers;
  }, []);

  return (
    <View style={styles.container}>
      <NameSearch></NameSearch>
      {/* <LocationInput></LocationInput> */}
      <View style={styles.dropdowns}>
        <IndoorOutdoor></IndoorOutdoor>
        <CareLevel></CareLevel>
        <SunlightLevel></SunlightLevel>
      </View>
      <Checkboxes></Checkboxes>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("../pages/searchResults")}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    maxHeight: 800,
  },
  dropdowns: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#8EC255",
    margin: 20,
    padding: 10,
    width: 220,
    alignSelf: "center",
  },
  text: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "FugazOne_400Regular",
    fontSize: 30,
  },
});
