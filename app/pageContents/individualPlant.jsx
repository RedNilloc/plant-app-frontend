import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"
import IndividualPlantsButtons from "../components/individualPlantComponents/individualPlantsButtons"
import ExtraInfo from "../components/individualPlantComponents/individualPlantsExtraInfo"
import axios from "axios"

function capitaliseFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export default function IndividualPlant({ plantId }) {
    const [plant, setPlant] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
            .get(
                `https://plant-app-backend-87sk.onrender.com/api/plants/${plantId}`
            )
            .then((response) => {
                setPlant(response.data.plant)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
                setError("Failed to load plant")
            })
    }, [plantId])

    if (loading || plant === false) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    console.log(plant.default_image)
    return (
        <View styles={styles.container}>
            <Text style={styles.title}>
                {capitaliseFirstLetter(plant.common_name)}
            </Text>

            <Image style={styles.image} source={{ uri: plant.default_image }} />

            <IndividualPlantsButtons />

            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{plant.description}</Text>
            </View>

            <ExtraInfo />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 20,
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    image: {
        flex: 1,
        minWidth: "80%",
        height: 120,
        marginBottom: 30,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "red",
    },

    descriptionContainer: {
        marginTop: 20,
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
})
