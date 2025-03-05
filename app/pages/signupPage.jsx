import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView
  } from "react-native";
  import React, { useState } from "react";
  import english_ivy from "../../assets/images/english-ivy.jpg";
  
  export default function SignUp() {
    const [form, setForm] = useState({
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    });
  
    const handleSignUp = () => {
      const email = form.email;
      const username = form.username;
      const password = form.password;
      const passwordConfirm = form.passwordConfirm;
  
      if (!email || !username || !password || !passwordConfirm) {
        Alert.alert("ERROR!", "Please fill in all fields");
        return;
      }
  
      if (password !== passwordConfirm) {
        Alert.alert("ERROR!", "Passwords do not match");
        return;
      }
  
      Alert.alert(
        "SUCCESS!",
        "Account created successfully! Let's get you into the Plant Zone!"
      );
    };
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Create your account below!</Text>
          </View>
  
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>
                Please provide a valid e-mail address:
              </Text>
  
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.inputControl}
                placeholder="yourname@somethingmail.com"
                placeholderTextColor="#6b7280"
                value={form.email}
                onChangeText={(email) => setForm({ ...form, email })}
              ></TextInput>
            </View>
  
            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>
                  Please create your username:
                </Text>
  
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  style={styles.inputControl}
                  placeholder="Your username here..."
                  placeholderTextColor="#6b7280"
                  value={form.username}
                  onChangeText={(username) => setForm({ ...form, username })}
                ></TextInput>
              </View>
  
              <View style={styles.form}>
                <View style={styles.input}>
                  <Text style={styles.inputLabel}>
                    Come up with a unique but memorable password:
                  </Text>
  
                  <TextInput
                    secureTextEntry
                    style={styles.inputControl}
                    placeholder="Your password here"
                    placeholderTextColor="#6b7280"
                    value={form.password}
                    onChangeText={(password) => setForm({ ...form, password })}
                  />
                </View>
  
                <View style={styles.form}>
                  <View style={styles.input}>
                    <Text style={styles.inputLabel}>
                      Please confirm your password below:
                    </Text>
  
                    <TextInput
                      secureTextEntry
                      style={styles.inputControl}
                      placeholderTextColor="#6b7280"
                      value={form.passwordConfirm}
                      onChangeText={(passwordConfirm) =>
                        setForm({ ...form, passwordConfirm })
                      }
                    />
                  </View>
  
                  <View style={styles.formAction}>
                    <TouchableOpacity onPress={handleSignUp}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>Create Account!</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image source={english_ivy} style={styles.bottomImg} />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 24,
      flex: 1,
    },
    header: {
      marginVertical: 36,
      color: "#8EC255",
    },
    bottomImg: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: 140,
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
    },
    input: {
      marginBottom: 16,
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
      fontSize: 15,
      fontWeight: "500",
      color: "#222",
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
      backgroundColor: "#B5E48C",
      borderWidth: 1,
      borderColor: "#075eec",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "600",
      color: "#fff",
    },
  });
  