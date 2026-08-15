import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-brand-body">
            <Text>Onboarding</Text>
            <Button title="Next" onPress={() => { }} />
        </SafeAreaView>
    )
}