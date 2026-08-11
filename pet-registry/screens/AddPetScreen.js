import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from "react-native";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";
import PetForm from "../components/PetForm";

import * as ImagePicker from "expo-image-picker";

export default function AddPetScreen({ navigation }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const [saving, setSaving] = useState(false);

  // Stores the image selected from the phone
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Permission Required",
        "Please allow access to your photos to choose a pet picture."
      );

      return;
    }

    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleAddPet = async () => {
    if (!name || !breed || !age) {
      Alert.alert(
        "Missing Information",
        "Please complete all pet details."
      );

      return;
    }

    try {
      setSaving(true);

      await addDoc(collection(db, "pets"), {
        name: name.trim(),
        breed: breed.trim(),
        age: Number(age),

        // Store the selected image URI for now
        image: imageUri,

        createdAt: serverTimestamp(),
      });

      Alert.alert(
        "Pet Registered!",
        `${name} has been added to the registry.`
      );

      navigation.goBack();

    } catch (error) {
      console.log("Firestore Error:", error);

      Alert.alert(
        "Could Not Save Pet",
        error.message
      );

    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.emoji}>🐾</Text>

      <Text style={styles.title}>
        Register a Pet
      </Text>

      <Text style={styles.subtitle}>
        Add a new resident to the Bikini Bottom Pet Registry.
      </Text>

      <View style={styles.formCard}>

        <PetForm
          name={name}
          setName={setName}
          breed={breed}
          setBreed={setBreed}
          age={age}
          setAge={setAge}
        />

        {/* IMAGE PICKER */}

        <TouchableOpacity
          style={styles.imageButton}
          onPress={pickImage}
        >
          <Text style={styles.imageButtonText}>
            📷{" "}
            {imageUri
              ? "Change Pet Picture"
              : "Choose Pet Picture"}
          </Text>
        </TouchableOpacity>

        {/* IMAGE PREVIEW */}

        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.preview}
          />
        )}

        {/* SAVE */}

        <TouchableOpacity
          style={[
            styles.saveButton,
            saving && styles.disabledButton,
          ]}
          onPress={handleAddPet}
          disabled={saving}
        >
          <Text style={styles.saveText}>
            {saving
              ? "Registering..."
              : "🐾 Register Pet"}
          </Text>
        </TouchableOpacity>

        {/* CANCEL */}

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelText}>
            Cancel
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7E8A4",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  emoji: {
    fontSize: 50,
    textAlign: "center",
    marginTop: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#005F99",
    marginTop: 8,
  },

  subtitle: {
    textAlign: "center",
    color: "#555",
    marginTop: 8,
    marginBottom: 25,
  },

  formCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    elevation: 4,
  },

  imageButton: {
    backgroundColor: "#FFF1A8",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  imageButtonText: {
    color: "#005F99",
    fontWeight: "bold",
  },

  preview: {
    width: 160,
    height: 160,
    borderRadius: 80,
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#00AEEF",
  },

  saveButton: {
    backgroundColor: "#00AEEF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
  },

  disabledButton: {
    opacity: 0.6,
  },

  saveText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  cancelButton: {
    padding: 15,
    alignItems: "center",
  },

  cancelText: {
    color: "#005F99",
    fontWeight: "600",
  },
});