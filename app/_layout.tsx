import { Stack } from "expo-router"

const Screen = ()=> {
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="(tabs)" options={{title: 'Products'}}/>
            <Stack.Screen name="productView/[id]" options={{title:""}}/>
        </Stack>
    )
}

export default Screen