import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import NoButtonCard from "../components/cards/nopButtonCard"

export default function Favourites() {
    const testCard = {
        title: "Plant Name",
        lineOne: "fancy latin name",
        lineTwo: "price",
    }

    return (
        <View>
            <NoButtonCard contents={testCard}></NoButtonCard>
            <NoButtonCard contents={testCard}></NoButtonCard>
            <NoButtonCard contents={testCard}></NoButtonCard>
            <NoButtonCard contents={testCard}></NoButtonCard>
            <NoButtonCard contents={testCard}></NoButtonCard>
            <NoButtonCard contents={testCard}></NoButtonCard>
            <NoButtonCard contents={testCard}></NoButtonCard>
            <NoButtonCard contents={testCard}></NoButtonCard>
        </View>
    )
}
