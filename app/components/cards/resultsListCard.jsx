import {
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { Inter_300Light } from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { useFonts } from "expo-font";
import { Button } from "react-native-elements";
import { useEffect, useState } from "react";
import SearchResultsModal from "./cardComponents/SearchResultsModal";
import { router } from "expo-router";
import { useIndividualPlant } from "../../contexts/individualPlantContext";
import { useUser } from "../../contexts/userContext";
import axios from "axios";

function capitaliseFirstLetter(text) {
  if (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

function ResultsListCard({ contents, zones, favouriteIds }) {
  const { plant } = useIndividualPlant();
  const { user } = useUser();

  const [modalVisible, setModalVisible] = useState(false);
  const [liked, setLiked] = useState(favouriteIds.includes(contents.plant_id));
  const [favouritePlantId, setFavouritePlantId] = useState(false);

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    FugazOne_400Regular,
    KronaOne_400Regular,
  });

  function handlePress() {
    plant.id = contents.plant_id;
    router.push("/pages/individualPlantPage");
  }

  function getFavouritePlantId() {
    if (liked) {
      axios
        .get(
          `https://plant-app-backend-87sk.onrender.com/api/users/${user.id}/fave_plants`
        )
        .then((res) => {
          res.data.plants.forEach((val) => {
            if (val.plant_id === contents.plant_id) {
              setFavouritePlantId(val.favourite_plant_key);
            }
          });
        });
    }
  }

  useEffect(() => {
    getFavouritePlantId();
  }, []);

  function addToFavourites() {
    setLiked(true);
    axios
      .post(
        `https://plant-app-backend-87sk.onrender.com/api/users/${user.id}/fave_plants`,
        { user: user.id, plant: contents.plant_id }
      )
      .then((res) => {
        setIsFavourite(true);
        setFavouritePlantId(res.data.favePlant.favourite_plant_key);
      });
  }

  function removeFromFavourites() {
    setLiked(false);
    axios
      .delete(
        `https://plant-app-backend-87sk.onrender.com/api/users/fave_plants/${favouritePlantId}`
      )
      .then(() => {
        setIsFavourite(false);
        setFavouritePlantId(false);
      });
  }

  function toggleFavourites() {
    if (liked) {
      removeFromFavourites();
    } else {
      addToFavourites();
    }
  }

  function addFunc() {
    setModalVisible(true);
  }

  const { default_image, common_name, watering, price } = contents;

  if (contents.watering) {
    return (
      <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
        <SearchResultsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          userId={user.id}
          plantId={contents.plant_id}
          zones={zones}
        ></SearchResultsModal>
        <Image style={styles.thumbnail} source={{ uri: default_image }} />
        <View style={styles.textContents}>
          <Text style={styles.titleText}>
            {capitaliseFirstLetter(common_name)}
          </Text>
          <Text style={styles.lineOne}>Watering frequency: {watering}</Text>
          <Text style={styles.lineThree}>
            {price ? `Price: £${price}` : ""}
          </Text>
        </View>
        <View>
          <Button
            buttonStyle={styles.favButton}
            title=""
            icon={
              liked
                ? { name: "star", type: "font-awesome" }
                : { name: "star-o", type: "font-awesome" }
            }
            onPress={() => toggleFavourites()}
          />
          <Button
            buttonStyle={styles.addButton}
            title=""
            icon={{ name: "plus", type: "font-awesome" }}
            onPress={() => addFunc()}
          />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.textContents}>
        <Text style={styles.sorry}>Sorry, no plants match your filters</Text>
      </View>
    );
  }
}

export default ResultsListCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E8F3DD",
    width: "90%",
    marginBottom: "3%",
  },
  textContents: {
    flex: 2,
    flexDirection: "column",
    height: "100%",
    paddingTop: "2%",
    paddingBottom: "1%",
    paddingLeft: "2%",
  },
  titleText: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 16,
    marginBottom: 5,
  },
  sorry: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 26,
    margin: 18,
    textAlign: "center",
  },
  lineOne: {
    fontFamily: "Inter_300Light",
    fontSize: 15,
    marginBottom: 10,
  },
  lineTwo: {
    fontFamily: "Inter_300Light",
    fontStyle: "italic",
    fontSize: 16,
  },
  lineThree: {
    fontFamily: "Inter_300Light",
    fontSize: 16,
  },
  thumbnail: {
    flex: 1,
    maxWidth: "25%",
    minWidth: "25%",
    height: "100%",
  },
  favButton: {
    borderRadius: 0,
    flex: 3,
    maxWidth: "100%",
    height: 50,
    backgroundColor: "yellow",
  },
  addButton: {
    borderRadius: 0,
    flex: 3,
    maxWidth: "100%",
    height: 50,
    backgroundColor: "#8EC255",
  },
});
