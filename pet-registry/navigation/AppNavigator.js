import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegistryScreen from "../screens/RegistryScreen";
import AddPetScreen from "../screens/AddPetScreen";
import PetProfileScreen from "../screens/PetProfileScreen";
import EditPetScreen from "../screens/EditPetScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Registry"
          component={RegistryScreen}
        />

        <Stack.Screen
          name="Add Pet"
          component={AddPetScreen}
        />

        <Stack.Screen
          name="Pet Profile"
          component={PetProfileScreen}
        />

        <Stack.Screen
          name="Edit Pet"
          component={EditPetScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}