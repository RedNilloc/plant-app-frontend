import { Text, View, SafeAreaView, ScrollView } from "react-native"
import PZHeader from "./components/header"
import PZFooter from "./components/footer"
import { StyleSheet } from "react-native"

//NOTE: Only works with ScrollView not View right now. I don't know why. Needs fixing.
export default function Index() {
    return (
        <>
            <SafeAreaView style={styles.sav}>
                <ScrollView bounces={false}>
                    <PZHeader>Heading Here!</PZHeader>
                    <View style={styles.pageContent}>Your Content Here!</View>
                </ScrollView>
                <PZFooter />
            </SafeAreaView>
        </>
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
        minHeight: 1000,
    },
})
