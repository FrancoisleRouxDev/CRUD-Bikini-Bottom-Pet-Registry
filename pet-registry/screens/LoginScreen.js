import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
import { alert } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {

      
      Alert.alert("Missing Information", "Please enter your email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

      Alert.alert("Welcome!", "Successfully logged in.");

      navigation.navigate("Registry");
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐠 Bikini Bottom Pet Registry</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry={!showPassword}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
      >
          <Text>
              {showPassword ? "🙈 Hide Password" : "👁 Show Password"}
          </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.link}>
          Create an Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F7E8A4",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#005F99",
  },

  input: {
    backgroundColor: "#fff",
    padding: 14,
    marginBottom: 15,
    borderRadius: 8,
  },

  button: {
    backgroundColor: "#00AEEF",
    padding: 15,
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

  link: {
    marginTop: 20,
    textAlign: "center",
    color: "#005F99",
    fontWeight: "bold",
  },
});