import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RegistryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐠 Bikini Bottom Pet Registry</Text>

      <View style={styles.card}>
        <Text style={styles.PetName}>🐶 Buddy</Text>
        <Text>Golden Retriever</Text>
        <Text>Age: 3</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Pet Profile")}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>＋ Add New Pet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7E8A4",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 25,
    color: "#005F99",
  },

  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
  },

  PetName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#00AEEF",
    padding: 12,
    borderRadius: 10,
  },

  addButton: {
    backgroundColor: "#0096C7",
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});