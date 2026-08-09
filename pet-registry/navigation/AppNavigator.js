import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegistryScreen from "../screens/RegistryScreen";
import DogProfileScreen from "../screens/DogProfileScreen";
import EditDogScreen from "../screens/EditDogScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registry"
          component={RegistryScreen}
        />
        <Stack.Screen
          name="Dog Profile"
          component={DogProfileScreen}
        />
        <Stack.Screen
          name="Edit Dog"
          component={EditDogScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}