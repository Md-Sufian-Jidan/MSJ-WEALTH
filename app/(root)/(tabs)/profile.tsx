import { useAuth, useUser } from "@clerk/expo";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
    const { user } = useUser();
    const { signOut } = useAuth();
    const router = useRouter();

    const handleSingout = () => {
        Alert.alert(
            'Sign out',
            'Are you sure you want to sign out?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Sign out',
                    onPress: async () => {
                        await signOut(),
                            router.replace('/sign-in')
                    },
                    style: 'destructive'
                }
            ]
        )
    };


    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-green-400">
            <Text className="text-2xl">Profile</Text>
            <Text>{user?.emailAddresses[0].emailAddress}</Text>
            <TouchableOpacity onPress={handleSingout}>
                <Text>Sign out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}