import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import axios, { Axios } from "axios"
import { useEffect, useState } from "react"
import SearchResultsModal from "../cards/cardComponents/SearchResultsModal"

export default function IndividualPlantsButtons({ userId, plantId }) {
    const [isFavourite, setIsFavourite] = useState(false)
    const [favouritePlantId, setFavouritePlantId] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        axios
            .get(
                `https://plant-app-backend-87sk.onrender.com/api/users/${userId}/fave_plants`
            )
            .then((res) => {
                res.data.plants.forEach((val) => {
                    if (val.plant_id === plantId) {
                        setIsFavourite(true)
                        setFavouritePlantId(val.favourite_plant_key)
                    }
                })
            })
    }, [isFavourite, modalVisible])

    function addToPlants() {
        setModalVisible(true)
    }

    function addToFavourites() {
        setIsFavourite(true)
        axios
            .post(
                `https://plant-app-backend-87sk.onrender.com/api/users/${userId}/fave_plants`,
                { user: userId, plant: plantId }
            )
            .then((res) => {
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
                setIsFavourite(false)
                setFavouritePlantId(false)
            })
    }

    function toggleFavourites() {

        if (isFavourite) {
            removeFromFavourites()
        } else {
            addToFavourites()
        }
    }

    return (
        <View style={styles.buttonContainer}>
            <SearchResultsModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            ></SearchResultsModal>
            <TouchableOpacity style={styles.button} onPress={addToPlants}>
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
