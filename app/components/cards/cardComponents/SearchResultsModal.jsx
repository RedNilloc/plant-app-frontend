import { Text, View, StyleSheet, Modal, Pressable } from "react-native"
import { useEffect, useState } from "react"
import DropDownPicker from "react-native-dropdown-picker"
import axios from "axios"

export default function SearchResultsModal({
    modalVisible,
    setModalVisible,
    userId,
    plantId,
    zones,
}) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)

    const [added, setAdded] = useState("")
    const [locationChoice, setLocationChoice] = useState("")

    const [locations, setlocations] = useState(zones)

    function addPlant() {
        if (locationChoice) {
            setAdded(`Adding...`)

            let zoneId
            console.log(locationChoice)

            zones.forEach((zone) => {
                if (zone.value === locationChoice) {
                    console.log(zone)
                    zoneId = zone.id
                    console.log(zoneId)
                }
            })

            console.log({ user: userId, plant: plantId, zone: zoneId })

            axios
                .post(
                    `https://plant-app-backend-87sk.onrender.com/api/users/${userId}/owned_plants`,
                    { user: userId, plant: plantId, zone: zoneId }
                )
                .then(() => setAdded(`Plant added to your ${locationChoice}!`))
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Pressable
                        style={[styles.buttonClose]}
                        onPress={() => {
                            setModalVisible(!modalVisible)
                            setAdded("")
                        }}
                    >
                        <Text style={styles.textStyleClose}>X</Text>
                    </Pressable>

                    <Text style={styles.modalText}>Add plant to</Text>
                    <View style={styles.container}>
                        <DropDownPicker
                            placeholder="Select habitat"
                            style={styles.dropdown}
                            open={open}
                            value={value}
                            items={locations}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setlocations}
                            zIndex={3000}
                            zIndexInverse={1000}
                            dropDownDirection="BOTTOM"
                            dropDownContainerStyle={{
                                backgroundColor: "#FFFFFF",
                                marginRight: 50,
                                width: 255,
                                borderRadius: 0,
                            }}
                            textStyle={{
                                fontSize: 16,
                            }}
                            onChangeValue={(value) => {
                                setLocationChoice(value)
                            }}
                        />
                    </View>
                    <Pressable
                        style={[styles.buttonYes]}
                        onPress={() => {
                            addPlant()
                        }}
                    >
                        <Text style={styles.textStyle}>Yes</Text>
                    </Pressable>
                    <Text style={styles.textAdded}>{added}</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    icon: {
        flex: 1,
        marginLeft: 6,
        maxWidth: "80%",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        width: 350,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonClose: {
        borderRadius: 0,
        padding: 4,
        margin: 2,
        marginLeft: 260,
        backgroundColor: "#e65544",
    },
    buttonYes: {
        borderRadius: 0,
        padding: 10,
        margin: 2,
        backgroundColor: "#8EC255",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
        marginHorizontal: 15,
    },
    textStyleClose: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },
    textAdded: {
        marginTop: 20,
    },
    modalText: {
        marginBottom: 15,
        fontSize: 16,
        textAlign: "center",
    },
    dropdown: {
        width: 255,
        backgroundColor: "#FFFFFF",
        borderColor: "#8EC255",
        paddingTop: "0%",
        paddingBottom: "0%",
        borderRadius: 0,
        marginBottom: 15,
    },
})
