import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import {
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase";

export default function PetProfileScreen({
  navigation,
  route,
}) {
  const { pet } = route.params;

  const handleDelete = () => {
    Alert.alert(
      "Remove Pet",
      `Are you sure you want to remove ${pet.name} from the registry?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteDoc(
                doc(db, "pets", pet.id)
              );

              navigation.goBack();
            } catch (error) {
              Alert.alert(
                "Error",
                error.message
              );
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          {pet.image ? (
            <Image
              source={{ uri: pet.image }}
              style={styles.image}
            />
          ) : (
            <Text style={styles.placeholder}>
              🐾
            </Text>
          )}
        </View>

        <Text style={styles.name}>
          {pet.name}
        </Text>

        <Text style={styles.breed}>
          {pet.breed}
        </Text>

        <View style={styles.detailBox}>
          <Text style={styles.detailLabel}>
            AGE
          </Text>

          <Text style={styles.detailValue}>
            {pet.age} years old
          </Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              navigation.navigate("Edit Pet", {
                pet,
              })
            }
          >
            <Text style={styles.buttonText}>
              ✏️ Edit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDelete}
          >
            <Text style={styles.buttonText}>
              🗑️ Delete
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            ← Back to Registry
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    elevation: 6,
  },

  imageContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#FFF1A8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    borderWidth: 4,
    borderColor: "#FFE135",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  placeholder: {
    fontSize: 55,
  },

  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#005F99",
  },

  breed: {
    fontSize: 18,
    color: "#555",
    marginTop: 5,
  },

  detailBox: {
    backgroundColor: "#F2FAFD",
    width: "100%",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },

  detailLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0096C7",
    letterSpacing: 2,
  },

  detailValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginTop: 5,
  },

  buttons: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    marginTop: 20,
  },

  editButton: {
    flex: 1,
    backgroundColor: "#00AEEF",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  deleteButton: {
    flex: 1,
    backgroundColor: "#E85D5D",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },

  backText: {
    color: "#005F99",
    fontWeight: "600",
    marginTop: 20,
  },
});