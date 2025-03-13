import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native"
import React, { useState, useEffect } from "react"
import PZLogo from "../../assets/images/plant_zone_logo.png"
import { useRouter } from "expo-router"
import axios from "axios"
import { useUser } from "../contexts/userContext"
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one"
import { useFonts } from "expo-font"

export default function LoginForm() {
    const [fontsLoaded] = useFonts({
        FugazOne_400Regular,
    })

    if (!fontsLoaded) {
        return <></>
    }

    const router = useRouter()
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const { user, setUser } = useUser()

    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        axios
            .get("https://plant-app-backend-87sk.onrender.com/api/users")
            .then((response) => {
                setUsersList(response.data.users)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    function handleLogin() {
        if (form.email.length < 10 || form.password.length < 3) {
            Alert.alert("ERROR!", "Please enter valid details")
            return
        }

        usersList.forEach((eachUser) => {
            if (form.email === eachUser.email) {
                user.id = eachUser.user_id
                user.username = eachUser.username
                user.email = eachUser.email
                user.geolocation = eachUser.geolocation
            }
        })

        Alert.alert("Successfully logged in!")
        router.push("../pages/homePage")
    }

    return (
        <View style={styles.container}>
            <Image source={PZLogo} style={styles.headerImg} />
            {/* <Text style={styles.title}>Log in to the Plant Zone!</Text>
        <Text style={styles.subtitle}>Why stop at a green thumb?</Text> */}
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Email address</Text>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        style={styles.inputControl}
                        placeholder="collin@coolmail.com"
                        placeholderTextColor="#6b7280"
                        value={form.email}
                        onChangeText={(email) => setForm({ ...form, email })}
                    ></TextInput>
                </View>
                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            secureTextEntry
                            style={styles.inputControl}
                            placeholder="swordfish"
                            placeholderTextColor="#6b7280"
                            value={form.password}
                            onChangeText={(password) =>
                                setForm({ ...form, password })
                            }
                        />
                    </View>
                    <View style={styles.formAction}>
                        <TouchableOpacity
                            onPress={() => {
                                handleLogin()
                            }}
                        >
                            <View
                                style={styles.button}
                                onPress={() => router.push("../pages/homePage")}
                            >
                                <Text style={styles.text}>Sign in</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1,
    },
    headerImg: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 27,
        fontWeight: "700",
        color: "#1e1e1e",
        marginBottom: 6,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#929292",
        textAlign: "center",
        margin: 15,
    },
    input: {
        marginBottom: 16,
        borderRadius: 0,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: "600",
        color: "#222",
        marginBottom: 8,
    },
    inputControl: {
        height: 44,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 0,
        fonrtSize: 15,
        fontWeight: "500",
        color: "#222",
        borderColor: "#8EC255",
        borderWidth: 1,
    },
    form: {
        marginBottom: 24,
        flex: 1,
    },
    formAction: {
        marginVertical: 24,
    },
    formFooter: {
        fontSize: 17,
        fontWeight: "600",
        color: "#222",
        textAlign: "center",
        letterSpacing: 0.15,
    },
    button: {
        backgroundColor: "#8EC255",
        margin: 20,
        padding: 10,
        width: 230,
        alignSelf: "center",
    },
    text: {
        color: "#ffffff",
        alignSelf: "center",
        fontFamily: "FugazOne_400Regular",
        fontSize: 30,
    },
})
