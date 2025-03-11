import { Text, View, SafeAreaView, ScrollView } from "react-native";
import PZFooter from "../components/footer";
import PZHeader from "../components/header";
import { StyleSheet } from "react-native";
import Login from "../pageContents/login";

export default function LoginPage() {
  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView style={styles.sav}>
        <ScrollView bounces={false}>
          <PZHeader>Sign in</PZHeader>
          <View style={styles.pageContent}>
            <Login></Login>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: "20%",
  },
});
