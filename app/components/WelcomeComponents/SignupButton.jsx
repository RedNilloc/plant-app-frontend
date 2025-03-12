import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one"
import { useFonts } from "expo-font"

export default function SignUpButton() {
    const router = useRouter()

    const [fontsLoaded] = useFonts({
        FugazOne_400Regular,
    })
    if (fontsLoaded) {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/pages/signupPage")}
            >
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
        )
    } else return <></>
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#8EC255",
        marginTop: 20,
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
