import { useUser } from "@clerk/expo";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
    const { user } = useUser();
    const router = useRouter();

    console.log(user?.emailAddresses)
    return (
        <View>
            <Text className="text-2xl">Home</Text>
        </View>
    )
}