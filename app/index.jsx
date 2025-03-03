import { Text, View, SafeAreaView, ScrollView } from "react-native"
import Card from "./components/cards/genericCard"
import PZHeader from "./components/header"
import PZFooter from "./components/footer"

export default function Index() {
    const testCard = {
        title: "Sunflower",
        lineOne: "Helianthus annuus",
        lineTwo: "3.99",
        lineThree: "The sunflower is a..",
    }

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: "#222926" }}>
                <ScrollView bounces={false}>
                    <PZHeader>Heading Text</PZHeader>
                    <View
                        style={{
                            paddingTop: "10%",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#ffffff",
                            paddingBottom: "20%",
                        }}
                    >
                        <Card contents={testCard}></Card>
                        <Card contents={testCard}></Card>
                        <Card contents={testCard}></Card>
                        <Card contents={testCard}></Card>
                        <Card contents={testCard}></Card>
                        <Card contents={testCard}></Card>
                        <Card contents={testCard}></Card>
                        <Card contents={testCard}></Card>
                        <Card contents={testCard}></Card>
                        <Card contents={testCard}></Card>
                    </View>
                </ScrollView>
                <PZFooter />
            </SafeAreaView>
        </>
    )
}
