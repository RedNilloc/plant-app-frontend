import { Text, View, StyleSheet, TouchableOpacity } from "react-native"

export default function IndividualPlantsButtons() {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Plants</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to Favourites</Text>
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
