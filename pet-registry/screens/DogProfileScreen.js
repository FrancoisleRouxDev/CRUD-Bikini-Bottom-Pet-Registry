import { View, Text, Button } from "react-native";

export default function DogProfileScreen({ navigation }) {
    const dog = {
        name: "Buddy",
        breed: "Golder retriever",
        age: 3,
    };

    return (
        <View
            Style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
            }}
        >

            <Text style={{fontSize: 28, fontWeight: "bold"}}>
                {dog.name}
            </Text>

            <Text style={{marginTop: 10}}>
                Breed: {dog.breed}
            </Text>

            <Text style={{marginTop: 10}}>
                Age: {dog.age} 
            </Text>

            <Button
                title="Go Back"
                color= "red"
                onPress={() => navigation.goBack()}
            />

        </View>
    );
}