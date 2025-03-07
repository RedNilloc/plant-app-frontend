import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

export default function IndividualPlantsButtons() {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Plants</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Favourite</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#6CA431",
        paddingVertical: 15,
        marginHorizontal: 30,
        alignItems: "center",
        width: "30%",
    },
    buttonText: {
        fontSize: 14,
    },
})
