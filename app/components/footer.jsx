import { Button } from "@react-navigation/elements"
import { LinearGradient } from "expo-linear-gradient"
import { Text, View, StyleSheet, Image } from "react-native"
import accountButtonIcon from "../../assets/icons/accountButtonIcon.png"
import backButtonIcon from "../../assets/icons/backButtonIcon.png"
import { useRouter } from "expo-router"

function PZFooter({ backAddress }) {
    const router = useRouter()

    let backRoute = backAddress ? backAddress : "/pages/homePage"

    return (
        <LinearGradient
            style={styles.container}
            colors={["transparent", "#222926"]}
            start={{ x: 0.5, y: 0.3 }}
            end={{ x: 0.5, y: 0.8 }}
        >
            <View style={styles.container}>
                <Button
                    style={styles.button}
                    onPress={() => router.push(backRoute)}
                >
                    <Image source={backButtonIcon} style={styles.imageLeft} />
                </Button>
                <View style={{ flex: 2, width: "30%" }}></View>
                <Button
                    style={styles.button}
                    onPress={() => router.push("/pages/notificationsPage")}
                >
                    <Image
                        source={accountButtonIcon}
                        style={styles.imageRight}
                    />
                </Button>
            </View>
        </LinearGradient>
    )
}

export default PZFooter

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 3,
        flexDirection: "row",
        //  marginBottom: "4%",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 130,
        alignContent: "center",
    },
    imageLeft: {
        width: 80,
        height: 80,
        flex: 1,
    },
    imageRight: {
        width: 80,
        height: 80,
        flex: 3,
    },
    button: {
        backgroundColor: "transparent",
        width: "auto",
    },
})
