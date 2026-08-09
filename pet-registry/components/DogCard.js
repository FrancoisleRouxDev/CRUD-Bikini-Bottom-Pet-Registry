import { View, Text, StyleSheet } from "react-native";

export default function DogCard({ dog }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {dog.name}
      </Text>

      <Text>
        Breed: {dog.breed}
      </Text>

      <Text>
        Age: {dog.age}
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