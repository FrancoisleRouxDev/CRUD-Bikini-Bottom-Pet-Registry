import { useState } from "react";
import {
  View,
  TextInput,
  Button,
} from "react-native";

export default function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const handleSave = () => {
    alert("Dog Saved");
  };

  return (
    <View>
      <TextInput
        placeholder="Dog Name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Breed"
        value={breed}
        onChangeText={setBreed}
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 20,
        }}
      />

      <Button
        title="Save Dog"
        onPress={handleSave}
      />
    </View>
  );
}