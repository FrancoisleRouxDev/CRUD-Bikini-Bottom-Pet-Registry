import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function PetProfileScreen({ navigation }) {
  // In a real app, this would come from route params or context
  const Pet = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 3,
    image: null, // replace with a valid URI if you have one
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Pet Image */}
        <View style={styles.imageContainer}>
          {Pet.image ? (
            <Image source={{ uri: Pet.image }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>🐾</Text>
            </View>
          )}
        </View>

        <Text style={styles.name}>{Pet.name}</Text>
        <Text style={styles.detail}>Breed: {Pet.breed}</Text>
        <Text style={styles.detail}>Age: {Pet.age} years</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => navigation.navigate('Edit Pet')}
          >
            <Text style={styles.buttonText}>✏️ Edit Pet</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>⬅️ Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#87CEEB', // Sky blue
  },
  card: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#FFE135', // Yellow
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 40,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF69B4', // Pink
    marginBottom: 5,
  },
  detail: {
    fontSize: 18,
    color: '#333',
    marginVertical: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    minWidth: 100,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#00A3E0', // Blue
  },
  backButton: {
    backgroundColor: '#FF6347', // Tomato
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});