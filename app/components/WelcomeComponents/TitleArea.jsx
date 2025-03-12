import { Text, View, ImageBackground, StyleSheet } from "react-native"
import { useFonts } from "expo-font"
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one"

export default function TitleArea() {
    const [fontsLoaded] = useFonts({
        FugazOne_400Regular,
    })
    const image = require("../../../assets/images/growing-plant.jpg")

    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Start growing with the Plant Zone!
                </Text>

                <View style={styles.contentContainer}>
                    <ImageBackground source={image} style={styles.image} />
                </View>
            </View>
        )
    } else {
        return <></>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8F3DD",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        margin: 10,
        marginTop: 30,
        marginBottom: 10,
        color: "#80AF4D",
        fontFamily: "FugazOne_400Regular",
        textAlign: "center",
        height: 130,
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 220,
        height: 220,
        margin: 15,
    },
    button: {
        backgroundColor: "white",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 15,
        width: "50%",
        borderRadius: 5,
    },
    textButton: {
        fontSize: 25,
        fontWeight: "bold",
    },
})
