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
