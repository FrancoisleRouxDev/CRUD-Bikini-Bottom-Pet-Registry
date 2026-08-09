import { View, Text, Button, StyleSheet } from "react-native";

export default function RegistryScreen({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text 
                style={{
                    fontSize: 24,
                    marginBottom: 20,
                }}
            > 
                Dog Registry 
            </Text>

            <Button
                title="Open Dog Profile"
                onPress={() =>
                    navigation.navigate("Dog Profile")
                }
            />
        </View>
    );
}