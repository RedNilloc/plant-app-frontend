import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"
import IndividualPlantsButtons from "../components/individualPlantsFolder/individualPlantsButtons"
import ExtraInfo from "../components/individualPlantsFolder/individualPlantsExtraInfo"

function capitaliseFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export default function IndividualPlant() {
    const [plant, setPlant] = useState({
        //  plant data for viewing purposes
        common_name: "anthurium",
        type: "Flower",
        hardiness: { min: "11", max: "12" },
        watering: "Average",
        sunlight: ["part sun/part shade"],
        default_image:
            "https://perenual.com/storage/species_image/855_anthurium_andraeanum/medium/49388458462_0ef650db39_b.jpg",
        description: `Anthurium andraeanum is an amazing plant species for many reasons. 
      It has a brightly coloured spathe, which can be orange, white and yellow, as well as long-lasting flowering. 
      It is a long-lived species, and its blooms can remain intact for several months.
    This attractive plant is also easy to care for and can thrive in indirect light and humid environments. 
      Its flowers bloom regularly and even if the plant is not fertilised, it can still keep thriving. Furthermore, 
      the Anthurium andraeanum is perfect for those looking for a unique, eye-catching houseplant to add to their home. 
      In conclusion, Anthurium andraeanum is a stunning and resilient species with distinctively vibrant flowers.`,
    })

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
