import { Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native"
import PZHeader from "./components/header"
import PZFooter from "./components/footer"
import Search from "./pageContents/search"

export default function Index() {
    return (
        <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
            <SafeAreaView style={styles.sav}>
                <ScrollView bounces={false}>
                    <PZHeader>Search</PZHeader>
                    <View style={styles.pageContent}>
                        <Search />
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
