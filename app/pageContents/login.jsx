import { Text, View, StyleSheet } from "react-native"
import React, { useState, useEffect } from "react"
import { useRouter } from "expo-router"
import LoginForm from "../components/LoginForm"
import { useUser } from "../contexts/userContext"
import axios from "axios"

export default function Login() {
    const router = useRouter()
    const { user } = useUser()

    useEffect(() => {
        axios
            .get("https://plant-app-backend-87sk.onrender.com/api/users")
            .then((response) => {
                console.log(response.data.users)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <View style={styles.container}>
            <LoginForm></LoginForm>
            <Text style={styles.formFooter}>
                {" "}
                Don't have an account yet?{" "}
                <Text
                    style={{ textDecorationLine: "underline" }}
                    onPress={() => {
                        router.push("../pages/signupPage")
                    }}
                >
                    Click here to sign-up!
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        marginBottom: 40,
        flex: 1,
    },
    formFooter: {
        fontSize: 17,
        fontWeight: "600",
        color: "#222",
        textAlign: "center",
        letterSpacing: 0.15,
    },
})
