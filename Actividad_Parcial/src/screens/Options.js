import React from "react"
import { StyleSheet, View, Button, Text } from "react-native"

export default function Options({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>API de Harry Potter</Text>

            <View style={styles.box}>
                <Text style={styles.texto}>Estudiantes de Hogwarts:</Text>
                <Button title="Hogwarts Students" 
                onPress={() => navigation.navigate('Estudiantes', {endpoint: 'https://hp-api.onrender.com/api/characters/students'})}
                color='#15215e'
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.texto}>Staff de Hogwarts:</Text>
                <Button title="Hogwarts Staff" 
                onPress={() => navigation.navigate('Staff', {endpoint: 'https://hp-api.onrender.com/api/characters/staff'})}
                color='#15215e'
                />
            </View>

            <View style={styles.box2}>
                <Text style={styles.texto}>Estudiantes según su casa:</Text>
                <Button title="Gryffindor" 
                onPress={() => navigation.navigate('Casas', {endpoint: 'https://hp-api.onrender.com/api/characters/house/gryffindor'})}
                color='#15215e'
                />
                <Button title="Slytherin" 
                onPress={() => navigation.navigate('Casas', {endpoint: 'https://hp-api.onrender.com/api/characters/house/slytherin'})}
                color='#15215e'
                />
                <Button title="Hufflepuff" 
                onPress={() => navigation.navigate('Casas', {endpoint: 'https://hp-api.onrender.com/api/characters/house/hufflepuff'})}
                color='#15215e'
                />
                <Button title="Ravenclaw" 
                onPress={() => navigation.navigate('Casas', {endpoint: 'https://hp-api.onrender.com/api/characters/house/ravenclaw'})}
                color='#15215e'
                />
            </View>

            <View style={styles.box}>
                <Text style={styles.texto}>Hechizos:</Text>
                <Button title="Spells" 
                onPress={() => navigation.navigate('Hechizos', {endpoint: 'https://hp-api.onrender.com/api/spells'})}
                color='#15215e'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#0d153f',
        alignContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fde200',
        alignSelf: 'center'
    },
    box: {
        width: 220,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#383b7e',
    },
    box2: {
        display: 'flex',
        width: 250,
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#383b7e',
    },
    texto: {
        fontSize: 16,
        color: 'white',
        alignSelf: 'center'
    }
})