import { View, SafeAreaView, ScrollView } from "react-native"
import PZHeader from "../components/header"
import PZFooter from "../components/footer"
import SignUp from "../pageContents/signup"
import { StyleSheet } from "react-native"

export default function SignUpPage() {
    return (
        <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
            <SafeAreaView style={styles.sav}>
                <ScrollView bounces={false}>
                    <PZHeader>Sign up</PZHeader>
                    <View style={styles.pageContent}>
                        <SignUp></SignUp>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <PZFooter backAddress="/" />
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
