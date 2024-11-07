import { Stack } from "expo-router"

const Screen = ()=> {
    return(
        <Stack>
            <Stack.Screen name="Categories"/>
            <Stack.Screen name="CategoriesList/[idCategory]/[title]"/>
        </Stack>
    )
}

export default Screen