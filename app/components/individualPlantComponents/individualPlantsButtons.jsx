import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import SearchResultsModal from "../cards/cardComponents/SearchResultsModal";

export default function IndividualPlantsButtons({ userId, plantId }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouritePlantId, setFavouritePlantId] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [zonesList, setZonesList] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function getZonesList() {
    axios
      .get(`https://plant-app-backend-87sk.onrender.com/api/zones/${userId}`)
      .then((res) => {
        setZonesList(
          res.data.zones.map((zone) => {
            return {
              label: zone.zone_name,
              value: zone.zone_name,
              id: zone.zone_id,
            };
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }

  function getFavouritePlantId() {
    axios
      .get(
        `https://plant-app-backend-87sk.onrender.com/api/users/${userId}/fave_plants`
      )
      .then((res) => {
        res.data.plants.forEach((val) => {
          if (val.plant_id === plantId) {
            setIsFavourite(true);
            setFavouritePlantId(val.favourite_plant_key);
          }
        });
      });
  }

  useEffect(() => {
    getFavouritePlantId();
    getZonesList();
  }, [isFavourite, modalVisible]);

  function addToPlants() {
    setModalVisible(true);
  }

  function addToFavourites() {
    setIsFavourite(true);
    axios
      .post(
        `https://plant-app-backend-87sk.onrender.com/api/users/${userId}/fave_plants`,
        { user: userId, plant: plantId }
      )
      .then((res) => {
        setIsFavourite(true);
        setFavouritePlantId(res.data.favePlant.favourite_plant_key);
      });
  }

  function removeFromFavourites() {
    setIsFavourite(false);

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
    if (isFavourite) {
      removeFromFavourites();
    } else {
      addToFavourites();
    }
  }

  if (loading) {
    return (
      <View style={styles.buttonContainer}>
        <Text>Loading</Text>
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.buttonContainer}>
        <>
          <TouchableOpacity style={styles.buttonGrey}>
            <Text style={styles.buttonText}>Unable to add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleFavourites}>
            <Text style={styles.buttonText}>
              {isFavourite ? "Favourited" : "Add to Favourites"}
            </Text>
          </TouchableOpacity>
        </>
      </View>
    );
  } else {
    return (
      <View style={styles.buttonContainer}>
        <SearchResultsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          zones={zonesList}
          plantId={plantId}
          userId={userId}
        ></SearchResultsModal>
        <TouchableOpacity style={styles.button} onPress={addToPlants}>
          <Text style={styles.buttonText}>Add to Plants +</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleFavourites}>
          <Text style={styles.buttonText}>
            {isFavourite ? "Favourited ★" : "Favourite ☆"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#8EC255",
    paddingVertical: 15,
    alignItems: "center",
    width: "45%",
  },
  buttonGrey: {
    alignItems: "center",
    backgroundColor: "#3b3b3b",
    paddingVertical: 15,
    alignItems: "center",
    width: "45%",
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
