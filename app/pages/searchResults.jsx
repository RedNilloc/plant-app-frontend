import { View, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native"
import PZHeader from "../components/header"
import PZFooter from "../components/footer"
import PZFooterSearch from "../components/footerSearchRes"
import SearchedPlantsList from "../components/SearchResultsComponents/SearchedPlantsList"

export default function searchPage() {
    return (
        <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
            <SafeAreaView style={{ backgroundColor: "#222926" }}>
                <ScrollView bounces={false} style={styles.scrollStyle}>
                    <PZHeader>Search Results</PZHeader>
                    <View style={styles.container}>
                        <SearchedPlantsList></SearchedPlantsList>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <PZFooter />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 130,
    },
    scrollStyle: {
        minHeight: 1000,
        backgroundColor: "#ffffff",
    },
})
