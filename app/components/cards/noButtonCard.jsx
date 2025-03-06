import { Text, View, StyleSheet, Image } from "react-native"
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one"
import { Inter_400Regular, Inter_300Light } from "@expo-google-fonts/inter"
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one"
import { useFonts } from "expo-font"
import testImage from "./test-sunflower.jpg"
import { Button } from "@react-navigation/elements"

function NoButtonCard({ contents, imgURL }) {
    // Handle Fonts
    const [fontsLoaded] = useFonts({
        Inter_300Light,
        FugazOne_400Regular,
        KronaOne_400Regular,
    })

    if (!fontsLoaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    const { title, lineOne, lineTwo, lineThree } = contents

    return (
        <View style={styles.container}>
            <Image style={styles.thumbnail} source={testImage} />
            <View style={styles.textContents}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.lineOne}>{lineOne}</Text>
                <Text style={styles.lineTwo}>{lineTwo}</Text>
                <Text style={styles.lineThree}>{lineThree}</Text>
            </View>
        </View>
    )
}

export default NoButtonCard

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#d9d9d9",
        width: "80%",
        Height: "5.5rem",
        marginBottom: "3%",
    },
    textContents: {
        flex: 2,
        flexDirection: "column",
        height: "100%",
        paddingTop: "1%",
        paddingBottom: "1%",
        paddingLeft: "2%",
    },

    titleText: {
        fontFamily: "KronaOne_400Regular",
        fontSize: 16,
    },
    lineOne: {
        fontFamily: "Inter_300Light",
        fontStyle: "italic",
        fontSize: 16,
    },
    lineTwo: {
        fontFamily: "Inter_300Light",
        fontStyle: "italic",
        fontSize: 16,
    },
    lineThree: {
        fontFamily: "Inter_300Light",
        fontSize: 16,
    },
    thumbnail: {
        flex: 1,
        maxWidth: "25%",
        minWidth: "25%",
        height: "100%",
    },
})
