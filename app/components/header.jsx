import { Text, View, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one"
import { LinearGradient } from "expo-linear-gradient"

function PZHeader({ children }) {
    const [fontsLoaded] = useFonts({
        FugazOne_400Regular,
    })

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>
    }

    return (
        <LinearGradient
            colors={["#6CA431", "#8EC255"]}
            start={{ x: -0.5, y: 0.05 }}
            style={styles.linearGradient}
        >
            <View style={styles.container}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </LinearGradient>
    )
}

export default PZHeader

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
    },
    text: {
        color: "#ffffff",
        fontFamily: "FugazOne_400Regular",
        fontSize: 50,
    },
    linearGradient: {
        padding: "10px",
        marginBottom: "5rem",
    },
})
