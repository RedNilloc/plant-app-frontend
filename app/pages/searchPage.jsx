import { Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import PZFooter from "../components/footer";
import PZHeader from "../components/header";
import Search from "../pageContents/search";

export default function searchPage() {
  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView style={styles.sav}>
        {/* <ScrollView bounces={false}> */}
        <PZHeader>Search</PZHeader>
        <View style={styles.pageContent}>
          <Search />
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
      <PZFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
