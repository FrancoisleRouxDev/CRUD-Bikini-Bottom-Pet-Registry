import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Missing Information", "Please complete all fields.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      Alert.alert("Success", "Account created!");

      navigation.navigate("Registry");
    } catch (error) {
      console.log("Full Error:", error);
      console.log("Code:", error.code);
      console.log("Message:", error.message);

      Alert.alert(
        error.code || "Unknown Error",
        error.message || "No message"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
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

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.link}>
          Already have an account?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    padding:20,
    backgroundColor:"#F7E8A4"
  },
  title:{
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:30,
    color:"#005F99"
  },
  input:{
    backgroundColor:"#fff",
    padding:14,
    marginBottom:15,
    borderRadius:8
  },
  button:{
    backgroundColor:"#00AEEF",
    padding:15,
    borderRadius:8
  },
  buttonText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"bold"
  },
  link:{
    marginTop:20,
    textAlign:"center",
    color:"#005F99"
  }
});