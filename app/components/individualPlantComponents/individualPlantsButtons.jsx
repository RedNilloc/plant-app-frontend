import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import axios, { Axios } from "axios"
import { useEffect, useState } from "react"

export default function IndividualPlantsButtons({ userId, plantId }) {
    //Need to check if favourited already.

    const [isFavourite, setIsFavourite] = useState(false)
    const [favouritePlantId, setFavouritePlantId] = useState(false)

    useEffect(() => {
        axios
            .get(
                `https://plant-app-backend-87sk.onrender.com/api/users/${userId}/fave_plants`
            )
            .then((res) => {
                res.data.plants.forEach((val) => {
                    console.log(val.plant_id)
                    if (val.plant_id === plantId) {
                        setIsFavourite(true)
                        setFavouritePlantId(val.favourite_plant_key)
                    }
                })
            })
    }, [isFavourite])

    function addToPlants() {}

    function addToFavourites() {
        console.log("adding")
        setIsFavourite(true)
        axios
            .post(
                `https://plant-app-backend-87sk.onrender.com/api/users/${userId}/fave_plants`,
                { user: userId, plant: plantId }
            )
            .then((res) => {
                console.log("Posted!")

                setIsFavourite(true)
                setFavouritePlantId(res.data.favePlant.favourite_plant_key)
            })
    }

    function removeFromFavourites() {
        setIsFavourite(false)

        axios
            .delete(
                `https://plant-app-backend-87sk.onrender.com/api/users/fave_plants/${favouritePlantId}`
            )
            .then(() => {
                console.log("Removed!")
                setIsFavourite(false)
                setFavouritePlantId(false)
            })
    }

    function toggleFavourites() {
        console.log(isFavourite)

        if (isFavourite) {
            removeFromFavourites()
        } else {
            addToFavourites()
        }
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Plants</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toggleFavourites}>
                <Text style={styles.buttonText}>
                    {isFavourite ? "Favourited" : "Add to Favourites"}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#8EC255",
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
})
