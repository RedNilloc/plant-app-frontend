import { Text, View, StyleSheet } from "react-native";

export default function ExtraInfo({ plantPrice }) {
  return (
    <View style={styles.extraInfoContainer}>
      <Text>
        <Text style={styles.textPriceBold}>Price:</Text> £{plantPrice}
      </Text>
      <Text>
        <Text style={styles.textAvailableFromBold}>Available From: {"\n"}</Text>
        Notcutts
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  extraInfoContainer: {
    backgroundColor: "#d6d4d4",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    width: "80%",
    marginTop: 20,
    marginBottom: 120,
  },
  textPriceBold: {
    fontWeight: "bold",
  },
  textAvailableFromBold: {
    fontWeight: "bold",
  },
});
