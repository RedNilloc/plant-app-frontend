import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"
import IndividualPlantsButtons from "../components/individualPlantsFolder/individualPlantsButtons"
import ExtraInfo from "../components/individualPlantsFolder/individualPlantsExtraInfo"
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
                console.log(response.data.plant)
                setPlant(response.data.plant)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
                setError("Failed to load plant")
            })
    }, [plantId])

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View styles={styles.container}>
            <Text style={styles.title}>
                {capitaliseFirstLetter(plant.common_name)}
            </Text>

            <Image source={{ uri: plant.default_image }} style={styles.image} />

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
        width: "80%",
        height: 200,
        marginBottom: 30,
        marginLeft: "auto",
        marginRight: "auto",
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
