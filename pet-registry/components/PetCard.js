import { View, Text, StyleSheet } from "react-native";

export default function PetCard({ Pet }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {Pet.name}
      </Text>

      <Text>
        Breed: {Pet.breed}
      </Text>

      <Text>
        Age: {Pet.age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
});