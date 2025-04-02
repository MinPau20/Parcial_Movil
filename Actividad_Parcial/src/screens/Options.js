import React from "react"
import { View } from "react-native"
import { Button } from "react-native"

export default function Options({navigation}){
    return(
        <View>
            <Button title="Hogwarts Students" 
            onPress={() => navigation.navigate('Estudiantes')}
            />
            <Button title="Hogwarts Staff" 
            onPress={() => navigation.navigate('Staff')}
            />
            <Button title="Hogwarts Houses" 
            onPress={() => navigation.navigate('Casas')}
            />
            <Button title="Spells" 
            onPress={() => navigation.navigate('Hechizos')}
            />
        </View>
    )
}