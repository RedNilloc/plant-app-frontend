import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native"
import PZHeader from "../components/header"
import PZFooter from "../components/footer"
import { useEffect, useState } from "react"
import IndividualPlant from "../pageContents/individualPlant"
//import axios from "axios"; need to install

export default function IndividualPlantPage({ plantId }) {
    //   const [loading, setLoading] = useState(true);
    //   const [error, setError] = useState(null);

    //   useEffect(() => {
    //     axios      MAYBE AXIOS will have their own file (api.js). To action later when backend is complete
    //       .get(`https://backend-project-FAKEURL.onrender.com/api/${plantId}`)
    //       .then((response) => {
    //         setPlant(response.data.plant);
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         setLoading(false);
    //         setError("Failed to load plant");
    //       });
    //   }, [plantId]);

    //   if (loading) {
    //     return (
    //       <View>
    //         <Text>Loading...</Text>
    //       </View>
    //     );
    //   }

    return (
        <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
            <SafeAreaView style={styles.sav}>
                <ScrollView bounces={false}>
                    <PZHeader>Plant details</PZHeader>
                    <View style={styles.pageContent}>
                        <IndividualPlant />
                    </View>
                </ScrollView>
            </SafeAreaView>
            <PZFooter />
        </View>
    )
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
})
