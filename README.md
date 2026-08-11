# Bikini Bottom Pet Registry 🐾

A React Native CRUD exercise using Firebase Authentication and Cloud Firestore.

The application allows users to create an account, log in, register pets, view pet information, edit pet information and delete pets.

The project was originally based on a basic pet registry exercise and was given a Bikini Bottom themed visual design.

## Technologies

- React Native
- JavaScript
- React Navigation
- Firebase Authentication
- Firebase Firestore
- Expo Image Picker

## Main Features

- User registration
- User login
- Authentication-based access to the application
- Pet registration
- View registered pets
- View individual pet profiles
- Edit pet information
- Delete pets
- Select a pet image from the device

## Project Structure

```text
pet-registry/
│
├── components/
│   └── PetForm.js
│
├── navigation/
│   └── AppNavigator.js
│
├── screens/
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   ├── RegistryScreen.js
│   ├── AddPetScreen.js
│   ├── PetProfileScreen.js
│   └── EditPetScreen.js
│
├── App.js
├── firebase.js
└── index.js

