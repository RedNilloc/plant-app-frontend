import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { SearchProvider } from "./contexts/searchContext";

export default function Index() {
  const router = useRouter();

  return (
    <SearchProvider>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Temporary navigation</Text>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/welcomePage")}
            >
              <Text style={styles.buttonText}>Welcome page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/loginPage")}
            >
              <Text style={styles.buttonText}>Login page</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/homePage")}
            >
              <Text style={styles.buttonText}>Home page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/searchPage")}
            >
              <Text style={styles.buttonText}>Search page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/yourPlantsPage")}
            >
              <Text style={styles.buttonText}>Your Plants page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/favouritesPage")}
            >
              <Text style={styles.buttonText}>Favourites</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/notificationsPage")}
            >
              <Text style={styles.buttonText}>Your Notifications page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/searchResults")}
            >
              <Text style={styles.buttonText}>Search results page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/individualPlantPage")}
            >
              <Text style={styles.buttonText}>Individual plant page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/signupPage")}
            >
              <Text style={styles.buttonText}>Signup page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/settingsPage")}
            >
              <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/pages/signupConfirmationPage")}
            >
              <Text style={styles.buttonText}>Sign up confirmation page</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SearchProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
  },
  button: {
    backgroundColor: "#8EC255",
    margin: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});
