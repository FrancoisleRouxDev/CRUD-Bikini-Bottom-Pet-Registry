import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function PetCard({ pet, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>🐾</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{pet.name}</Text>

        <Text style={styles.breed}>
          {pet.breed}
        </Text>

        <Text style={styles.age}>
          {pet.age} {pet.age === 1 ? "year" : "years"} old
        </Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 15,
    marginBottom: 14,
    elevation: 3,
  },

  emojiContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#FFF1A8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  emoji: {
    fontSize: 30,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#005F99",
  },

  breed: {
    fontSize: 15,
    color: "#555",
    marginTop: 3,
  },

  age: {
    fontSize: 13,
    color: "#888",
    marginTop: 3,
  },

  arrow: {
    fontSize: 32,
    color: "#00AEEF",
  },
});