import { Text, View } from "react-native"
import Card from "./components/cards/genericCard"

export default function Index() {
    const testCard = {
        title: "Sunflower",
        lineOne: "Helianthus annuus",
        lineTwo: "3.99",
        lineThree: "The sunflower is a..",
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card contents={testCard}></Card>
            <Card contents={testCard}></Card>
            <Card contents={testCard}></Card>
            <Card contents={testCard}></Card>
            <Card contents={testCard}></Card>
            <Card contents={testCard}></Card>
        </View>
    )
}
