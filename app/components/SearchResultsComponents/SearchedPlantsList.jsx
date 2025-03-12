import { Text, View, StyleSheet } from "react-native";
import { useSearch } from "../../contexts/searchContext";
import ResultsListCard from "../cards/resultsListCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../../contexts/userContext";

export default function SearchedPlantsList() {
  const { params } = useSearch();
  const { user } = useUser();

  const [loading, setLoading] = useState(true);
  const [plantsList, setPlantsList] = useState([
    {
      id: 1,
      title: "Sorry, no plants fit your specifications",
    },
  ]);
  const [zonesList, setZonesList] = useState("");
  const [favouritesIdList, setFavouritesIdList] = useState([]);

  //   function getZonesList() {
  //     axios
  //       .get(`https://plant-app-backend-87sk.onrender.com/api/zones/${user.id}`)
  //       .then((res) => {
  //         setZonesList(
  //           res.data.zones.map((zone) => {
  //             return {
  //               label: zone.zone_name,
  //               value: zone.zone_name,
  //               id: zone.zone_id,
  //             };
  //           })
  //         );
  //       });
  //   }

  function getFavouritesIdList() {
    axios
      .get(
        `https://plant-app-backend-87sk.onrender.com/api/users/${user.id}/fave_plants`
      )
      .then((res) => {
        setFavouritesIdList(res.data.plants.map((plant) => plant.plant_id));
      });
  }

  useEffect(() => {
    // getZonesList();
    getFavouritesIdList();
  }, []);

  useEffect(() => {
    let queryString = "https://plant-app-backend-87sk.onrender.com/api/plants?";
    let count = 0;
    if (params.common_name) {
      count += 1;
      queryString += `common_name=${params.common_name}`;
    }
    if (params.tropical && params.tropical != "any") {
      if (count === 0) {
        queryString += `tropical=${params.tropical}`;
        count += 1;
      } else {
        queryString += `&tropical=${params.tropical}`;
        count += 1;
      }
    }
    if (params.maintenance && params.maintenance != "any") {
      if (count === 0) {
        queryString += `maintenance=${params.maintenance}`;
        count += 1;
      } else {
        queryString += `&maintenance=${params.maintenance}`;
        count += 1;
      }
    }
    if (params.sunlight && params.sunlight != "any") {
      if (count === 0) {
        queryString += `sunlight=${params.sunlight}`;
        count += 1;
      } else {
        queryString += `&sunlight=${params.sunlight}`;
        count += 1;
      }
    }
    if (params.poisonous_to_pets) {
      if (count === 0) {
        queryString += `poisonous_to_pets=${params.poisonous_to_pets}`;
        count += 1;
      } else {
        queryString += `&poisonous_to_pets=${params.poisonous_to_pets}`;
        count += 1;
      }
    }
    if (params.poisonous_to_humans) {
      if (count === 0) {
        queryString += `poisonous_to_humans=${params.poisonous_to_humans}`;
        count += 1;
      } else {
        queryString += `&poisonous_to_humans=${params.poisonous_to_humans}`;
        count += 1;
      }
    }
    if (params.edible) {
      if (count === 0) {
        queryString += `edible=${params.edible}`;
        count += 1;
      } else {
        queryString += `&edible=${params.edible}`;
        count += 1;
      }
    }
    if (params.flowers) {
      if (count === 0) {
        queryString += `edible=${params.flowers}`;
      } else {
        queryString += `&edible=${params.flowers}`;
      }
    }
    axios
      .get(queryString)
      .then((response) => {
        setPlantsList(response.data.plants);
        setLoading(false);
      })
      .catch((error) => {
        setPlantsList([
          {
            id: 1,
            common_name: "Sorry, no plants fit your specifications",
          },
        ]);
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>
        Current params: name: {params.common_name}, indoor:
        {params.tropical}, maintenance:
        {params.maintenance},sunlight: {params.sunlight}, poisonous_to_pets:
        {params.poisonous_to_pets}, poisonous_to_humans:
        {params.poisonous_to_humans}, edible: {params.edible}, flowers:
        {params.flowers}
      </Text> */}
      {loading === true ? (
        <Text style={styles.loading}>Plants are loading... 🌱 </Text>
      ) : (
        plantsList.map((plant, index) => (
          <ResultsListCard
            contents={plant}
            zones={zonesList}
            favouriteIds={favouritesIdList}
            key={index}
          />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  loading: {
    fontSize: 20,
    marginTop: 20,
  },
});

{
  /* <Text>
                Current params: name: {params.common_name}, indoor:
                {params.tropical}, maintenance:
                {params.maintenance},sunlight: {params.sunlight},
                poisonous_to_pets:
                {params.poisonous_to_pets}, poisonous_to_humans:
                {params.poisonous_to_humans}, edible: {params.edible}, flowers:
                {params.flowers}
            </Text> */
}
