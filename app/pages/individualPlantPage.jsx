import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import PZHeader from "../components/header";
import PZFooter from "../components/footer";
import { useEffect, useState } from "react";
//import axios from "axios";

export default function IndividualPlant({ plantId }) {
  const [plant, setPlant] = useState({
    //  plant data for viewing purposes

    common_name: "anthurium",
    type: "Flower",
    hardiness: { min: "11", max: "12" },
    watering: "Average",
    sunlight: ["part sun/part shade"],
    default_image: {
      medium_url:
        "https://perenual.com/storage/species_image/855_anthurium_andraeanum/medium/49388458462_0ef650db39_b.jpg",
    },
    description: `Anthurium andraeanum is an amazing plant species for many reasons. 
      It has a brightly coloured spathe, which can be orange, white and yellow, as well as long-lasting flowering. 
      It is a long-lived species, and its blooms can remain intact for several months.
    This attractive plant is also easy to care for and can thrive in indirect light and humid environments. 
      Its flowers bloom regularly and even if the plant is not fertilised, it can still keep thriving. Furthermore, 
      the Anthurium andraeanum is perfect for those looking for a unique, eye-catching houseplant to add to their home. 
      In conclusion, Anthurium andraeanum is a stunning and resilient species with distinctively vibrant flowers.`,
  });

  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     axios      MAYBE AXIOS have their own file (api.js). To action later when backend is complete
  //       .get(`https://backend-project-FAKEURL.onrender.com/api/${plantId}`)
  //       .then((response) => {
  //         setPlant(response.data.plant);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setLoading(false);
  //         setError("Failed to load plant");
  //       });
  //   }, [plantId]);

  //   if (loading) {
  //     return (
  //       <View>
  //         <Text>Loading...</Text>
  //       </View>
  //     );
  //   }

  function capitaliseFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView style={styles.sav}>
        <ScrollView bounces={false}>
          <PZHeader>Plant details</PZHeader>
          <View style={styles.pageContent}>
            <Text style={styles.title}>
              {capitaliseFirstLetter(plant.common_name)}
            </Text>

            <Image
              source={{ uri: plant.default_image.medium_url }}
              style={styles.image}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Plants</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Favourite</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{plant.description}</Text>
            </View>

            <View style={styles.extraInfoContainer}>
              <Text style={styles.textPrice}>
                <Text style={styles.textPriceBold}>Price:</Text> £5.55
              </Text>
              <Text style={styles.textAvailableFrom}>
                <Text style={styles.textAvailableFromBold}>
                  Available From: {"\n"}
                </Text>
                Dobbies
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <PZFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  sav: { flex: 0, backgroundColor: "#222926" },
  pageContent: {
    paddingTop: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: "20%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: "80%",
    height: 200,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6CA431",
    paddingVertical: 15,
    marginHorizontal: 30,
    alignItems: "center",
    width: "30%",
  },
  buttonText: {
    fontSize: 14,
  },
  descriptionContainer: {
    width: "85%",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  extraInfoContainer: {
    backgroundColor: "#d6d4d4",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    width: "80%",
    marginTop: 20,
  },
  textPriceBold: {
    fontWeight: "bold",
  },
  textAvailableFromBold: {
    fontWeight: "bold",
  },
});
