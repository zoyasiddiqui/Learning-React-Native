import { StyleSheet, Text, View } from 'react-native';
import { Slot, Stack } from "expo-router";

const RootLayout = () => {

// this is the first way to render a screen, slot renders the first child route 
//   return <Slot/>

// this is the second way, with Stack
    return (
        <Stack>
            <Stack.Screen name="index"/>
        </Stack>
    )

}

export default RootLayout

const styles = StyleSheet.create({})