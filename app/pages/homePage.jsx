import { Text, View, SafeAreaView, ScrollView } from "react-native";
import PZHeader from "../components/header";
import PZFooter from "../components/footer";
import SignedInView from "../pageContents/home";
import { StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView style={styles.sav}>
        <ScrollView bounces={false}>
          <PZHeader>Home</PZHeader>
          <View style={styles.pageContent}>
            <SignedInView></SignedInView>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222926",
    paddingBottom: "20%",
  },
});
