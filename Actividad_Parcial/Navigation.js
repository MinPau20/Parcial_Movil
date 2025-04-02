import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./src/screens/HomeScreen";
import Options from "./src/screens/Options"
import Estudiantes from "./src/screens/Estudiantes";
import Staff from "./src/screens/Staff"
import Casas from "./src/screens/Casas";
import Hechizos from "./src/screens/Hechizos";


const Stack = createStackNavigator() 

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Opciones' component={Options}/>
            <Stack.Screen name='Estudiantes' component={Estudiantes}/>
            <Stack.Screen name='Staff' component={Staff}/>
            <Stack.Screen name='Casas' component={Casas}/>
            <Stack.Screen name='Hechizos' component={Hechizos}/>
        </Stack.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
