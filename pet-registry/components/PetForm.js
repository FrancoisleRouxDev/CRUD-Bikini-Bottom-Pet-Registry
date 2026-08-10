import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
} from "react-native";

export default function PetForm({
  petName,
  setPetName,
  breed,
  setBreed,
  age,
  setAge,
}) {
  return (
    <View>
      <TextInput
        placeholder="Pet Name"
        value={petName}
        onChangeText={setPetName}
        style={styles.input}
      />

      <TextInput
        placeholder="Breed"
        value={breed}
        onChangeText={setBreed}
        style={styles.input}
      />

      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
});