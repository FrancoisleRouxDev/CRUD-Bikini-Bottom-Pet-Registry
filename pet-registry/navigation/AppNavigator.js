import { NavigatnioContainer } from  "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../screens/RegisterScreen";
import DogProfileScreen from "../screens/DogProfileScreen";
import EditDogScreen from "../screens/EditDogScreen";

const Stack = createNavigationStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen
                    name="Registry"
                    component={RegisterScreen}
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