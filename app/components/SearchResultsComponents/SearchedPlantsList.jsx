import { Text, View } from "react-native";

import Card from "../cards/genericCard";
import { useState } from "react";

export default function SearchedPlantsList() {
  const [plantsList, setPlantsList] = useState({
    plants: [
      { id: 1, title: "Roses", Sunlight: "Needs Sun", Water: "Once a day" },
      {
        id: 2,
        title: "Cactus",
        Sunlight: "Plenty of Sun required",
        Water: "Hardly any",
      },
    ],
  });

  return (
    <View>
      {plantsList.plants.forEach((plant) => {
        <View>
          <Text>Here should be a plant</Text>
          <Card contents={plant} />;
        </View>;
      })}
    </View>
  );
}
