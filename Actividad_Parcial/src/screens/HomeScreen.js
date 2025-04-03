import { StyleSheet, View, Text, Image, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>HARRY POTTER</Text>
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgBMMWppK6X_dd7Za7Qpf5LfL3MuYMl3BekQ&s'}} style={styles.logo}/>
      <Image source={{uri: 'https://preview.redd.it/2mqxndygjg271.jpg?auto=webp&s=f926120c4906ef0f57b8040ce0d658c062d59c8d'}} style={styles.poster}/>
      <Button title="Opciones"
        onPress={() => navigation.navigate('Opciones')}
        color='#15215e'
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#0d153f',
      alignContent: 'space-around',
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    titulo: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fde200',
      alignSelf: 'center'
    },
    logo: {
      width: 100,
      height: 100,
    },
    poster: {
      width: 300,  
      height: 500,
      borderRadius: 5,
      alignSelf: 'center'
    }
})