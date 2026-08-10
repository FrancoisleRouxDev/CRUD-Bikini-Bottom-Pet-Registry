import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PetProfileScreen from "../screens/PetProfileScreen";
import EditPetScreen from "../screens/EditPetScreen";
import RegistryScreen from "../screens/RegistryScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false
        }}
        initialRouteName="Login"
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
          name="Pet Profile"
          component={PetProfileScreen}
        />

        <Stack.Screen
          name="Edit Pet"
          component={EditPetScreen}
        />

        <Stack.Screen
          name="Registry"
          component={RegistryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}