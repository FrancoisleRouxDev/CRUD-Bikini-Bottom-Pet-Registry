import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

export default function PetForm({
  name,
  setName,
  breed,
  setBreed,
  age,
  setAge,
}) {
  return (
    <View>
      <Text style={styles.label}>Pet Name</Text>

      <TextInput
        placeholder="e.g. Gary"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Text style={styles.label}>Breed</Text>

      <TextInput
        placeholder="e.g. Golden Retriever"
        value={breed}
        onChangeText={setBreed}
        style={styles.input}
      />

      <Text style={styles.label}>Age</Text>

      <TextInput
        placeholder="e.g. 3"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#005F99",
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#B8DDEB",
    fontSize: 16,
  },
});