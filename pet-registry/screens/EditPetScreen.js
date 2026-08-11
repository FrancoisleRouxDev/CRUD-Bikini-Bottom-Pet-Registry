import { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

import {
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";
import PetForm from "../components/PetForm";

export default function EditPetScreen({
  navigation,
  route,
}) {
  const { pet } = route.params;

  const [name, setName] = useState(pet.name);
  const [breed, setBreed] = useState(pet.breed);
  const [age, setAge] = useState(String(pet.age));
  const [saving, setSaving] = useState(false);

  const handleUpdate = async () => {
    if (!name || !breed || !age) {
      Alert.alert(
        "Missing Information",
        "Please complete all fields."
      );
      return;
    }

    try {
      setSaving(true);

      await updateDoc(
        doc(db, "pets", pet.id),
        {
          name: name.trim(),
          breed: breed.trim(),
          age: Number(age),
        }
      );

      Alert.alert(
        "Updated!",
        `${name}'s profile has been updated.`
      );

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        "Update Failed",
        error.message
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          ✏️ Edit Pet
        </Text>

        <View style={styles.card}>
          <PetForm
            name={name}
            setName={setName}
            breed={breed}
            setBreed={setBreed}
            age={age}
            setAge={setAge}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleUpdate}
            disabled={saving}
          >
            <Text style={styles.buttonText}>
              {saving ? "Saving..." : "Save Changes"}
            </Text>
          </TouchableOpacity>
        </View>
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
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#005F99",
    textAlign: "center",
    marginVertical: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    elevation: 4,
  },

  button: {
    backgroundColor: "#00AEEF",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});