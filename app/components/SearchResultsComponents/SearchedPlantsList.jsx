import { Text, View, StyleSheet } from "react-native";

import ResultsListCard from "../cards/resultsListCard";
import { useState } from "react";

export default function SearchedPlantsList() {
  const [plantsList, setPlantsList] = useState({
    plants: [
      {
        id: 1,
        title: "Sunflowers",
        Sunlight: "Needs Sun",
        Water: "Once a day",
      },
      {
        id: 2,
        title: "Sunflowers",
        Sunlight: "Plenty of Sun required",
        Water: "Hardly any",
      },
    ],
  });

  return (
    <View style={styles.container}>
      {plantsList.plants.map((plant) => (
        <View key={plant.id}>
          <ResultsListCard contents={plant} />;
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
});
