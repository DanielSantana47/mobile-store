import { Tabs } from "expo-router"
import FontAwesome from "@expo/vector-icons/FontAwesome"

const Screen = ()=> {
    return(
        <>
            <Tabs screenOptions={{headerShown: true}}>
                <Tabs.Screen name="home" options={{title: "Home", tabBarIcon: ({color})=> <FontAwesome name="home" color={color} size={22}/>}}/>
                <Tabs.Screen name="category" options={{title: "Categories", headerShown: false, tabBarIcon: ({color})=> <FontAwesome name="cart-arrow-down" color={color} size={22}/>}}/>
                <Tabs.Screen name="about" options={{title: "About", tabBarIcon: ({color})=> <FontAwesome name="user" color={color} size={22}/>}}/>
            </Tabs>
        </>
    )
}

export default Screen