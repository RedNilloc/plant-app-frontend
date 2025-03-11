import { Text, View, StyleSheet } from "react-native"
import { useSearch } from "../../contexts/searchContext"
import ResultsListCard from "../cards/resultsListCard"
import { useState, useEffect } from "react"
import axios from "axios"

TEST_USER_ID = 2

export default function SearchedPlantsList() {
    const { params } = useSearch()
    const [loading, setLoading] = useState(true)
    const [plantsList, setPlantsList] = useState([
        {
            id: 1,
            title: "Sorry, no plants fit your specifications",
        },
    ])
    const [zonesList, setZonesList] = useState("")

    function getZonesList() {
        axios
            .get(
                `https://plant-app-backend-87sk.onrender.com/api/zones/${TEST_USER_ID}`
            )
            .then((res) => {
                setZonesList(
                    res.data.zones.map((zone) => {
                        return {
                            label: zone.zone_name,
                            value: zone.zone_name,
                            id: zone.zone_id,
                        }
                    })
                )
            })
    }


    useEffect(() => {
        getZonesList()
    }, [])

    useEffect(() => {
        console.log(params.edible)
        let queryString =
            "https://plant-app-backend-87sk.onrender.com/api/plants?"
        let count = 0
        if (params.common_name) {
            count += 1
            queryString += `common_name=${params.common_name}`
        }
        if (params.tropical) {
            if (count === 0) {
                queryString += `tropical=${params.tropical}`
                count += 1
            } else {
                queryString += `&tropical=${params.tropical}`
                count += 1
            }
        }
        if (params.maintenance) {
            if (count === 0) {
                queryString += `maintenance=${params.maintenance}`
                count += 1
            } else {
                queryString += `&maintenance=${params.maintenance}`
                count += 1
            }
        }
        if (params.sunlight) {
            if (count === 0) {
                queryString += `sunlight=${params.sunlight}`
                count += 1
            } else {
                queryString += `&sunlight=${params.sunlight}`
                count += 1
            }
        }
        if (params.poisonous_to_pets) {
            if (count === 0) {
                queryString += `poisonous_to_pets=${params.poisonous_to_pets}`
                count += 1
            } else {
                queryString += `&poisonous_to_pets=${params.poisonous_to_pets}`
                count += 1
            }
        }
        if (params.poisonous_to_humans) {
            if (count === 0) {
                queryString += `poisonous_to_humans=${params.poisonous_to_humans}`
                count += 1
            } else {
                queryString += `&poisonous_to_humans=${params.poisonous_to_humans}`
                count += 1
            }
        }
        if (params.edible) {
            if (count === 0) {
                queryString += `edible=${params.edible}`
                count += 1
            } else {
                queryString += `&edible=${params.edible}`
                count += 1
            }
        }
        if (params.flowers) {
            if (count === 0) {
                queryString += `edible=${params.flowers}`
            } else {
                queryString += `&edible=${params.flowers}`
            }
        }
        console.log(queryString)
        axios
            .get(queryString)
            .then((response) => {
                setPlantsList(response.data.plants)
                setLoading(false)
            })
            .catch((error) => {
                setPlantsList([
                    {
                        id: 1,
                        common_name: "Sorry, no plants fit your specifications",
                    },
                ])
                setLoading(false)
                setError("Failed to load plant")
            })
    }, [])

    return (
        <View style={styles.container}>
            {loading === true ? (
                <Text style={styles.loading}>Plants are loading... 🌱 </Text>
            ) : (
                (console.log(plantsList.length),
                plantsList.map((plant, index) => (
                    <ResultsListCard
                        contents={plant}
                        zones={zonesList}
                        key={index}
                    />
                )))
            )}
        </View>
    )
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
