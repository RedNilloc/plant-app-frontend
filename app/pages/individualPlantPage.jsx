import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native"
import PZHeader from "../components/header"
import PZFooter from "../components/footer"
import { useEffect, useState } from "react"
import IndividualPlant from "../pageContents/individualPlant"

const TESTING_PLANT_ID = 1195
const TESTING_USER_ID = 3

export default function IndividualPlantPage() {
    return (
        <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
            <SafeAreaView style={styles.sav}>
                <ScrollView bounces={false}>
                    <PZHeader>Plant details</PZHeader>
                    <View style={styles.pageContent}>
                        <IndividualPlant
                            userId={TESTING_USER_ID}
                            plantId={TESTING_PLANT_ID}
                        />
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
