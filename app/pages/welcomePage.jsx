import { View, SafeAreaView, ScrollView } from "react-native";
import PZHeader from "../components/header";
import { StyleSheet } from "react-native";
import Welcome from "../pageContents/welcome";

export default function WelcomePage() {
  return (
    <View style={{ height: "100%", backgroundColor: "#E8F3DD" }}>
      <SafeAreaView style={styles.sav}>
        <ScrollView bounces={false}>
          <PZHeader>Welcome</PZHeader>
          <View style={styles.pageContent}>
            <Welcome></Welcome>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  sav: { flex: 0, backgroundColor: "#222926" },
  pageContent: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F3DD",
  },
});
