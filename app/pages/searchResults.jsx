import { View, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import PZFooter from "../components/footer";
import PZHeader from "../components/header";
import SortByPrice from "../components/SearchResultsComponents/SortByPrice";
import SearchedPlantsList from "../components/SearchResultsComponents/SearchedPlantsList";

export default function searchPage() {
  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView>
        <ScrollView bounces={false} style={styles.scrollStyle}>
          <PZHeader>Search Results</PZHeader>
          <View style={styles.container}>
            <SortByPrice></SortByPrice>
            <SearchedPlantsList></SearchedPlantsList>
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
  scrollStyle: {
    minHeight: 1000,
  },
});
