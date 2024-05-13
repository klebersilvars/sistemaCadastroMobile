import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Login from "../src/pages/Login/Login";
import Registro from "../src/pages/Registro/Registro";
import UserLogged from "../src/pages/UserLogged/UserLogged";

const Stack = createStackNavigator()
export default function Routes() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Login"
                component={Login}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Registro"
                component={Registro}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="UserLogged"
                component={UserLogged}
            />
        </Stack.Navigator>
    )
}