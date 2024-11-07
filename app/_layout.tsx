import { Stack } from "expo-router"

const Screen = ()=> {
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="(main)"/>
            <Stack.Screen name="productView/[img]/[title]/[description]/[price]" options={{title:""}}/>
        </Stack>
    )
}

export default Screen