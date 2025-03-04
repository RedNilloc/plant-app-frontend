import { Button } from "@react-navigation/elements"
import { LinearGradient } from "expo-linear-gradient"
import { Text, View, StyleSheet } from "react-native"

function PZFooter() {
    return (
        <LinearGradient
            style={styles.container}
            colors={["transparent", "#222926"]}
            start={{ x: 0.5, y: 0.4 }}
            end={{ x: 0.5, y: 0.66 }}
        >
            <View style={styles.container}>
                <Button style={styles.backButton}>{"<-"}</Button>
                <Button style={styles.accountButton}>{"A"}</Button>
            </View>
        </LinearGradient>
    )
}

export default PZFooter

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 2,
        flexDirection: "row",
        //  marginBottom: "4%",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 110,
    },
    backButton: {
        backgroundColor: "#8EC255",
        maxWidth: 80,
        maxHeight: 80,
        marginTop: 10,
        flex: 1,
        marginLeft: "5%",
        marginRight: "auto",
        borderRadius: "100%",
    },
    accountButton: {
        backgroundColor: "#8EC255",
        maxWidth: 80,
        maxHeight: 80,
        marginTop: 10,
        flex: 2,
        marginLeft: "auto",
        marginRight: "5%",
        borderRadius: "100%",
    },
})
