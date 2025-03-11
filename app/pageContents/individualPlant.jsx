import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import IndividualPlantsButtons from "../components/individualPlantComponents/individualPlantsButtons";
import ExtraInfo from "../components/individualPlantComponents/individualPlantsExtraInfo";
import axios from "axios";
import convertToBinomial from "../utility/formatBinomialNames";
import { useFonts } from "expo-font";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { Inter_400Regular, Inter_300Light } from "@expo-google-fonts/inter";

function capitaliseFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function IndividualPlant({ plantId, userId }) {
  const [plant, setPlant] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [fontsLoaded] = useFonts({
    KronaOne_400Regular,
    Inter_400Regular,
    Inter_300Light,
  });

  useEffect(() => {
    axios
      .get(`https://plant-app-backend-87sk.onrender.com/api/plants/${plantId}`)
      .then((response) => {
        setPlant(response.data.plant);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError("Failed to load plant");
      });
  }, [plantId]);

  if (loading || !fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.title}>
        {capitaliseFirstLetter(plant.common_name)}
      </Text>

      <Image style={styles.image} source={{ uri: plant.default_image }} />

      <Text style={styles.binomialName}>
        {convertToBinomial(plant.sci_name)}
      </Text>

      <IndividualPlantsButtons userId={userId} plantId={plantId} />

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{plant.description}</Text>
      </View>

      <ExtraInfo plantPrice={plant.price} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "KronaOne_400Regular",
    borderBottomWidth: 4,
    borderBottomColor: "black",
    textAlign: "center",
  },
  image: {
    flex: 1,
    minWidth: "80%",
    height: 120,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },

  descriptionContainer: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "Inter_400Regular",
  },
  binomialName: {
    fontFamily: "Inter_300Light",
    fontStyle: "italic",
    fontSize: 16,
    marginBottom: 30,
  },
});
