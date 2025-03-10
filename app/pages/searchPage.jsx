import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import PZFooter from "../components/footer";
import PZHeader from "../components/header";
import Search from "../pageContents/search";

export default function searchPage() {
  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView>
        <KeyboardAvoidingView>
          {/* <ScrollView style={styles.scroll} bounces={false}> */}
          <PZHeader>Search</PZHeader>
          <View style={styles.container}>
            <Search />
          </View>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <PZFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  scroll: {
    minHeight: 1500,
  },
});
