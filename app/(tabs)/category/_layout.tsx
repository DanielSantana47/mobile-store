import { Stack } from "expo-router"

const Screen = ()=> {
    return(
        <Stack>
            <Stack.Screen name="Categories"/>
            <Stack.Screen name="[idCategory]"/>
        </Stack>
    )
}

export default Screen