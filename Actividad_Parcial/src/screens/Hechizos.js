import React from "react";
import { StyleSheet, Text, View, Image, FlatList, StatusBar} from 'react-native';
import { useState, useEffect } from 'react';

export default function Hechizos({route}){
    const {endpoint} = route.params
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(endpoint)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
    }, [])

    return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      
      <FlatList 
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.titulo}>Hechizos</Text>
          </View>
        )}
        data={data} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => ( 
          <View style={styles.card}>
            <Text style={styles.text}>Nombre: {item.name}</Text>
            <Text style={styles.text}>Descripción: {item.description}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No hay personajes disponibles</Text>}
      />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight || 30,
      backgroundColor: '#0d153f',
      alignItems: 'center',
    },
    header:{
      alignItems: 'center',
    },
    titulo: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fde200',
    },
    card: {
      width: 300,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#1e215c',
    },
    text:{
      fontSize: 15,
      color: 'white',
    }
  });