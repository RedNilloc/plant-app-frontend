import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    PanResponder,
} from "react-native"
import { useState, useEffect } from "react"
import { useRouter } from "expo-router"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import { useUser } from "../contexts/userContext"
import AddZoneToYourPlants from "../components/yourPlantsComponents/AddZone"
import axios from "axios"
import WaterButtonCard from "../components/cards/waterButtonCard"
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one"

function capitaliseFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export default function YourPlants() {
    const { user } = useUser()
    const router = useRouter()
    const [zones, setZones] = useState([
        {
            is_outdoor: true,
            sun_level: "full sun",
            user_key: 2,
            zone_id: 1,
            zone_name: "balcony",
        },
    ])
    const [newZone, setNewZone] = useState("")
    const [swipedZone, setSwipedZone] = useState(null)
    const [zonesLoading, setZonesLoading] = useState(true)
    const [plantsLoading, setPlantsLoading] = useState(true)
    const [ownedPlants, setOwnedPlants] = useState([])

    useEffect(() => {
        if (user) {
            fetchZones()
            fetchOwnedPlants()
        }
    }, [])

    const fetchZones = async () => {
        try {
            const response = await fetch(
                `https://plant-app-backend-87sk.onrender.com/api/zones/${user.id}`
            )
            if (!response.ok) throw new Error("Failed to fetch zones")
            const data = await response.json()

            setZones(data.zones)
        } catch (error) {
            console.error("Error fetching zones:", error)
        } finally {
            setZonesLoading(false)
        }
    }

    const fetchOwnedPlants = async () => {
        try {
            const response = await fetch(
                `https://plant-app-backend-87sk.onrender.com/api/users/${user.id}/owned_plants`
            )
            if (!response.ok) throw new Error("Failed to fetch plants")
            const data = await response.json()

            setOwnedPlants(data.plants)
        } catch (error) {
            console.error("Error fetching zones:", error)
        } finally {
            setPlantsLoading(false)
        }
    }

    const deleteZone = (zone_id) => {
        const updatedZone = zones.filter((zone) => zone.zone_id !== zone_id)
        axios
            .delete(
                `https://plant-app-backend-87sk.onrender.com/api/zones/${zone_id}`
            )
            .then(() => {
                setZones(updatedZone)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const panResponder = (zoneName) => {
        let dx = 0

        return PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                dx = gestureState.dx
            },
            onPanResponderRelease: (_, gestureState) => {
                if (dx < -50) {
                    setSwipedZone(zoneName)
                } else {
                    setSwipedZone(null)
                }
            },
        })
    }

    if (plantsLoading || zonesLoading) {
        return <Text>Loading...</Text>
    } else {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss()
                        setSwipedZone(null)
                    }}
                    accessible={false}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : undefined}
                    >
                        {zones.map((zone, index) => {
                            const plantInZone = ownedPlants.filter(
                                (plant) => plant.zone_key === zone.zone_id
                            )

                            return (
                                <View style={styles.section} key={index}>
                                    <View
                                        style={styles.sectionHeader}
                                        {...panResponder(zone.zone_name)
                                            .panHandlers}
                                    >
                                        <View style={styles.headerRow}>
                                            <Text
                                                style={styles.textSectionHeader}
                                            >
                                                {capitaliseFirstLetter(
                                                    zone.zone_name
                                                )}
                                            </Text>

                                            {swipedZone === zone.zone_name && (
                                                <TouchableOpacity
                                                    style={styles.deleteButton}
                                                    onPress={() =>
                                                        deleteZone(zone.zone_id)
                                                    }
                                                >
                                                    <FontAwesome6
                                                        name="trash-can"
                                                        size={26}
                                                        color="red"
                                                    />
                                                </TouchableOpacity>
                                            )}
                                        </View>
                                    </View>

                                    <View style={styles.sectionBody}>
                                        {plantInZone.length > 0 ? (
                                            plantInZone.map((plant, index) => {
                                                return (
                                                    <View
                                                        style={
                                                            styles.cardContainer
                                                        }
                                                        key={index}
                                                    >
                                                        <WaterButtonCard
                                                            contents={plant}
                                                            ownedPlants={
                                                                ownedPlants
                                                            }
                                                            setOwnedPlants={
                                                                setOwnedPlants
                                                            }
                                                            zones={zones}
                                                            setZones={setZones}
                                                        />
                                                    </View>
                                                )
                                            })
                                        ) : (
                                            <Text style={styles.noPlantsText}>
                                                No plants added
                                            </Text>
                                        )}

                                        <TouchableOpacity
                                            style={styles.newPlantButton}
                                            onPress={() =>
                                                router.push("/pages/searchPage")
                                            }
                                        >
                                            <Text style={styles.textButton}>
                                                + Find New Plant
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}

                        <View style={styles.addZoneContainer}>
                            <AddZoneToYourPlants></AddZoneToYourPlants>
                        </View>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center",
    },
    section: {
        marginBottom: 30,
        width: "100%",
    },
    sectionHeader: {
        paddingVertical: 10,
        paddingHorizontal: "10%",
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderColor: "black",
        marginBottom: 10,
    },
    textSectionHeader: {
        fontSize: 28,
        fontWeight: "600",
    },
    sectionBody: {
        width: "100%",
        alignItems: "center",
    },
    cardContainer: {
        alignSelf: "center",
        marginBottom: 15,
    },
    noPlantsText: {
        textAlign: "center",
        paddingVertical: 10,
        fontSize: 16,
        color: "#a7a7a7",
    },
    newPlantButton: {
        backgroundColor: "#8EC255",
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
    },
    addZoneContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: -50,
        marginBottom: 100,
    },
    input: {
        flex: 1,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 15,
        borderRadius: 5,
        marginRight: 10,
        width: "70%",
    },
    addButton: {
        backgroundColor: "#8EC255",
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: "center",
        width: "30%",
    },
    deleteButton: {
        marginRight: 20,
    },
    componentContainer: {
        alignItems: "center",
        flexDirection: "column",
    },
    textButton: {
        color: "white",
        fontSize: 16,
    },
})
