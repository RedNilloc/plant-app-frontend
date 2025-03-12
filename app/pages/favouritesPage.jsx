import { Text, View, SafeAreaView, ScrollView } from "react-native"
import PZHeader from "../components/header"
import PZFooter from "../components/footer"
import { StyleSheet } from "react-native"
import Favourites from "../pageContents/favourites"

export default function FavouritesPage() {
    return (
        <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
            <SafeAreaView style={styles.sav}>
                <ScrollView bounces={false}>
                    <PZHeader>Favourites</PZHeader>
                    <View style={styles.pageContent}>
                        <Favourites />
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
