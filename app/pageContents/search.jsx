import { View, StyleSheet } from "react-native";
import IndoorOutdoor from "../components/SearchComponents/IndoorOutdoor";
import Checkboxes from "../components/SearchComponents/Checkboxes";
import CareLevel from "../components/SearchComponents/CareLevel";
import SunlightLevel from "../components/SearchComponents/SunlightLevel";
import NameSearch from "../components/SearchComponents/NameSearch";
import LocationInput from "../components/SearchComponents/LocationSearch";

export default function Search() {
  return (
    <View style={styles.container}>
      <NameSearch></NameSearch>
      <LocationInput></LocationInput>
      <View style={styles.dropdowns}>
        <IndoorOutdoor></IndoorOutdoor>
        <CareLevel></CareLevel>
        <SunlightLevel></SunlightLevel>
      </View>
      <Checkboxes></Checkboxes>
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
    width: 200,
  },
});
