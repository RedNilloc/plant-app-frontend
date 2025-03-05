import { View, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import PZFooter from "../components/footer";
import PZHeader from "../components/header";

export default function searchPage() {
  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView>
        <ScrollView bounces={false}>
          <PZHeader>Search Results</PZHeader>
          <View style={styles.container}>
            <Text> The results will be here</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <PZFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
