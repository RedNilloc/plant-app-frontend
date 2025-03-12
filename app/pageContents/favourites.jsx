import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import NoButtonCard from "../components/cards/favouritesCard"
import { useEffect, useState } from "react"
import axios from "axios"
import convertToBinomial from "../utility/formatBinomialNames"
import { useUser } from "../contexts/userContext"

export default function Favourites() {
    const [favouritePlants, setFavouritePlants] = useState(false)
    const { user } = useUser()

    function getFavourites() {
        axios
            .get(
                `https://plant-app-backend-87sk.onrender.com/api/users/${user.id}/fave_plants`
            )
            .then((res) => {
                setFavouritePlants(res.data.plants)
            })
    }

    useEffect(() => {
        getFavourites()
    }, [])

    if (favouritePlants === false) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    } else if (favouritePlants.length === 0) {
        return (
            <View>
                <Text>No Plants Favourited!</Text>
            </View>
        )
    } else {
        const cardContents = favouritePlants.map((plant) => {
            const cardContent = {}

            cardContent.title = plant.common_name
            cardContent.lineOne = convertToBinomial(plant.sci_name)

            plant.type
                ? (cardContent.lineTwo = `${
                      plant.maintenance
                  } maintenance ${plant.type.toLowerCase()}`)
                : (cardContent.lineTwo = `${plant.maintenance} maintenance`)

            cardContent.imgUrl = plant.default_image
            cardContent.plantId = plant.plant_id

            return cardContent
        })

        return (
            <View>
                {cardContents.map((content, index) => (
                    <NoButtonCard key={index} contents={content} />
                ))}
            </View>
        )
    }
}
