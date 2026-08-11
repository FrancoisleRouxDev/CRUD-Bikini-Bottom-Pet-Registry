import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase";
import PetCard from "../components/PetCard";

export default function RegistryScreen({ navigation }) {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const petsQuery = query(
      collection(db, "pets"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      petsQuery,
      (snapshot) => {
        const petList = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));

        setPets(petList);
        setLoading(false);
      },
      (error) => {
        console.log("Firestore listener error:", error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.smallTitle}>
        🐚 BIKINI BOTTOM
      </Text>

      <Text style={styles.title}>
        Pet Registry
      </Text>

      <Text style={styles.subtitle}>
        Residents of Bikini Bottom
      </Text>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#00AEEF"
          style={styles.loader}
        />
      ) : pets.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyEmoji}>🐾</Text>

          <Text style={styles.emptyTitle}>
            No pets registered yet
          </Text>

          <Text style={styles.emptyText}>
            Be the first resident to join the registry!
          </Text>
        </View>
      ) : (
        <FlatList
          data={pets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PetCard
              pet={item}
              onPress={() =>
                navigation.navigate("Pet Profile", {
                  pet: item,
                })
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("Add Pet")}
      >
        <Text style={styles.addButtonText}>
          ＋ Add Pet
        </Text>
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

  smallTitle: {
    marginTop: 15,
    textAlign: "center",
    color: "#0096C7",
    fontWeight: "bold",
    letterSpacing: 2,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: "#005F99",
    marginTop: 4,
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },

  loader: {
    marginTop: 50,
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyEmoji: {
    fontSize: 60,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#005F99",
    marginTop: 15,
  },

  emptyText: {
    color: "#666",
    textAlign: "center",
    marginTop: 8,
  },

  addButton: {
    backgroundColor: "#00AEEF",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginTop: 12,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});