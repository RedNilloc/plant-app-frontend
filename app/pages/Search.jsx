import { Text, View, StyleSheet, Button } from "react-native";
import IndoorOutdoor from "../components/SearchComponents/IndoorOutdoor";
import Checkboxes from "../components/SearchComponents/Checkboxes";
import CareLevel from "../components/SearchComponents/CareLevel";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search for plants</Text>

      <Checkboxes></Checkboxes>
      <IndoorOutdoor></IndoorOutdoor>
      <CareLevel></CareLevel>
      <Button
        title="Placeholder Submit Button"
        color="green"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
