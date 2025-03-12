import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native"
import { useRouter } from "expo-router"
import { useFonts } from "expo-font"
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one"
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one"

import { useUser } from "../contexts/userContext"

export default function SignedInView() {
    const { user } = useUser()

    const router = useRouter()
    const [fontsLoaded] = useFonts({
        FugazOne_400Regular,
        KronaOne_400Regular,
    })

    const pages = [
        {
            title: "View Your Plants",
            path: "./yourPlantsPage",
            image: require("../../assets/images/pinkgreenplant.jpg"),
        },
        {
            title: "Search For Plants",
            path: "./searchPage",
            image: require("../../assets/images/bluegreenplant.jpg"),
        },
        {
            title: "Favourites",
            path: "./favouritesPage",
            image: require("../../assets/images/flowers.jpg"),
        },
        {
            title: "Community",
            path: "/community",
            image: require("../../assets/images/redpetalplant.jpg"),
        },
    ]
    return (
        <View style={styles.pageContent}>
            <Text style={styles.username}>{user.username}</Text>
            {pages.map(({ title, path, image }) => (
                <View key={title}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push(path)}
                    >
                        <ImageBackground source={image} style={styles.image}>
                            <Text style={styles.text}>{title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        minHeight: "20%",
        maxHeight: "20%",
        minWidth: "80%",
        maxWidth: "80%",
        marginBottom: 25,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 70,
        paddingBottom: 70,
    },
    text: {
        color: "white",
        fontFamily: "FugazOne_400Regular",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 5,
    },
    pageContent: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingBottom: 10,
        width: "100%",
    },
    username: {
        fontFamily: "KronaOne_400Regular",
        fontSize: 25,
        width: "80%",
        borderBottomWidth: 4,
        borderBottomColor: "black",
        marginBottom: 20,
    },
})
