import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aora</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="color-blue text-3xl">Go to Home</Link>
    </View>
  );
}

