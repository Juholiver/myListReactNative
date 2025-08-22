import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import SignUp  from "../pages/(auth)/signUp/pages";

export default function Routes() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#fff' } }}>

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="BottomRoutes" component={BottomRoutes} /> 
            

        </Stack.Navigator>
    );

}