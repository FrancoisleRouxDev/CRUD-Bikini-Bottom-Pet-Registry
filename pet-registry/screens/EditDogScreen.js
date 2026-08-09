import { View, Text } from "react-native";
import DogForm from "../components/DogForm";

const EditDogScreen = ({ route }) => {
    return (
        <View
            style={{
                flex: 1,
                padding: 20,
            }}
        >

            <Text
                style={{
                    fontSzie: 24,
                    marginBottom: 20,
                }}
            >
                Edit Dog
            </Text>

            <DogForm/>

        </View>
    );
}