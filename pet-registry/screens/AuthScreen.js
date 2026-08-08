import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, } from "react-native";
import { createUSerWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function AuthScreen() {
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = async () => {
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
        } catch (error) {
            Alert.alert("Authentication Error", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pet Registry</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Email"
                authCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity  style={styles.button} onPress={handleAuth}>
                <Text style={styles.switchText}>
                    {isLogin ? "Need an account? Sign up" : "Have one? Log in"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#E7F3F0",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAign: "center",
        marginBottom: 24,
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 14,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#BFDDD6"
    },
    button: {
        backgroundColor: "#OE7C8B",
        padding: 16,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWieight: "bold",
    },
    switchText: {
        textAlign: "center",
        marginTop: 16,
        color: "#0E7C8B",
        fontWeight: "600"
    },
});