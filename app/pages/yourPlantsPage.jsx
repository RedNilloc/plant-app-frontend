import { Text, View, SafeAreaView, ScrollView } from "react-native";
import PZHeader from "../components/header";
import PZFooter from "../components/footer";
import YourPlants from "../pageContents/yourPlants";
import { StyleSheet } from "react-native";

export default function YourPlantsPage() {
  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView style={styles.sav}>
        <ScrollView bounces={false}>
          <PZHeader>Your Plants</PZHeader>
          <View style={styles.pageContent}>
            <YourPlants></YourPlants>
          </View>
        </ScrollView>
      </SafeAreaView>
      <PZFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  sav: { flex: 0, backgroundColor: "#222926" },
  pageContent: {
    paddingTop: "10%",
    backgroundColor: "#ffffff",
    paddingBottom: "20%",
  },
});
