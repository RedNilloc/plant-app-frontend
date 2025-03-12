import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one"
import { useFonts } from "expo-font"

export default function LoginButton() {
    const router = useRouter()

    const [fontsLoaded] = useFonts({
        FugazOne_400Regular,
    })

    if (fontsLoaded) {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/pages/loginPage")}
            >
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        )
    } else return <></>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        margin: 25,
        color: "white",
    },
    button: {
        backgroundColor: "#8EC255",
        margin: 20,
        paddingTop: 5,
        width: 220,
        alignSelf: "center",
        height: 55,
    },
    text: {
        color: "#ffffff",
        alignSelf: "center",
        fontFamily: "FugazOne_400Regular",
        fontSize: 30,
    },
})
