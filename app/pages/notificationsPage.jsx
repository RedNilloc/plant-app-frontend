import { Text, View, SafeAreaView, ScrollView } from "react-native";
import PZHeader from "../components/header";
import PZFooter from "../components/footer";
import { StyleSheet } from "react-native";
import NotificationsCard from "../components/cards/NotificationsCard.jsx";

export default function NotificationsPage(user_id) {
  const testUserId = 2;

  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView style={styles.sav}>
        <ScrollView bounces={false}>
          <PZHeader>Notifications</PZHeader>
          <View style={styles.pageContent}>
            <Text>This is a notifications page!</Text>
            <NotificationsCard user_id={testUserId} />
          </View>
        </ScrollView>
      </SafeAreaView>
      <PZFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  sav: { flex: 1, backgroundColor: "#222926" },
  pageContent: {
    paddingTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: "20%",
  },
});

// we need to get the user's plants
// we need to get plant by id to check its watering value
// we need to check the last-watered date value
// we need to compare that value to the current date
// if the time difference exceeds the time that plant should be watered, the user is sent a notification
// if, through getting the weather api, there has been rain in the user's location during this period,
// the "last watered" date is set to the date of the rain
// we need an array of the plants for whom a notification is warranted
// these are the ones which are send onto the card
// the card should probably only show a single plant at a time, do we need a component for userplants?
