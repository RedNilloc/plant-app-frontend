import { Text, View, SafeAreaView, ScrollView } from "react-native"
import PZHeader from "./components/header"
import PZFooter from "./components/footer"
import { StyleSheet } from "react-native"

export default function Index() {
    return (
        <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
            <SafeAreaView style={styles.sav}>
                <ScrollView bounces={false}>
                    <PZHeader>Username</PZHeader>
                    <View style={styles.pageContent}>
                        <Text>this is a notfications page!</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <PZFooter />
        </View>
    )
}

const styles = StyleSheet.create({
    sav: { flex: 0, backgroundColor: "#222926" },
    pageContent: {
        paddingTop: "10%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingBottom: "20%",
    },
})
