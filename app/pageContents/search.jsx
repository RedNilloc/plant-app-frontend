import { Text, View, StyleSheet, Button } from "react-native";
import IndoorOutdoor from "../components/SearchComponents/IndoorOutdoor";
import Checkboxes from "../components/SearchComponents/Checkboxes";
import CareLevel from "../components/SearchComponents/CareLevel";

export default function Search() {
  return (
    <View style={styles.container}>
      <Checkboxes></Checkboxes>
      <IndoorOutdoor></IndoorOutdoor>
      <CareLevel></CareLevel>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
});
