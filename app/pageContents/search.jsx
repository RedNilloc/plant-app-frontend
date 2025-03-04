import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import IndoorOutdoor from "../components/SearchComponents/IndoorOutdoor";
import Checkboxes from "../components/SearchComponents/Checkboxes";
import CareLevel from "../components/SearchComponents/CareLevel";
import SunlightLevel from "../components/SearchComponents/SunlightLevel";
import NameSearch from "../components/SearchComponents/NameSearch";

export default function Search() {
  return (
    <View style={styles.container}>
      <NameSearch></NameSearch>
      <Checkboxes></Checkboxes>
      <IndoorOutdoor></IndoorOutdoor>
      <CareLevel></CareLevel>
      <SunlightLevel></SunlightLevel>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    maxHeight: 800,
  },
});
