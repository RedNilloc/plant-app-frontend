import { Text, View, StyleSheet, Button } from "react-native";
import IndoorOutdoor from "../components/SearchComponents/IndoorOutdoor";
import Checkboxes from "../components/SearchComponents/Checkboxes";
import CareLevel from "../components/SearchComponents/CareLevel";
import PZFooter from "../components/footer";
import PZHeader from "../components/header";

export default function Search() {
  return (
    <View style={styles.container}>
      <PZHeader></PZHeader>
      <Text style={styles.text}>Search for plants</Text>
      <Checkboxes></Checkboxes>
      <IndoorOutdoor></IndoorOutdoor>
      <CareLevel></CareLevel>
      <Button
        title="Submit"
        color="#8EC255"
        accessibilityLabel="Submit search parameters"
      />
      <PZFooter></PZFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
