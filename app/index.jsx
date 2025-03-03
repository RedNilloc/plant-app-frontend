import { Text, View, SafeAreaView, ScrollView } from "react-native"
import Card from "./components/cards/genericCard"
import PZHeader from "./components/header"

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
                <ScrollView>
                    <PZHeader>Heading Text</PZHeader>
                    <View
                        style={{
                            paddingTop: "10%",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#ffffff",
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
            </SafeAreaView>
        </>
    )
}
