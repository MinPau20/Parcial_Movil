import React from "react";
import { StyleSheet, Text, View, Image, FlatList, StatusBar} from 'react-native';
import { useState, useEffect } from 'react';

export default function Casas({route}){
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
            <Text style={styles.titulo}>Estudiantes por casa</Text>
          </View>
        )}
        data={data} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => ( 
          <View style={styles.card}>
            {item.image ? (
            <Image source={{ uri: item.image }} style={styles.image} />
            ) : (
            <Text>No hay imagen disponible</Text>
            )}
            <Text style={styles.text}>Nombre: {item.name}</Text>
            <Text style={styles.text}>Especie: {item.species}</Text>
            <Text style={styles.text}>Género: {item.gender}</Text>
            <Text style={styles.text}>Casa: {item.house}</Text>
            <Text style={styles.text}>Fecha de nacimiento: {item.dateOfBirth}</Text>
            <Text style={styles.text}>Ancestros: {item.ancestry}</Text>
            <Text style={styles.text}>Patronus: {item.patronus}</Text>
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
      height: 520,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#1e215c',
    },
    image: {
      width: 250,  
      height: 350,
      borderRadius: 10,
    },
    text:{
      fontSize: 15,
      color: 'white',
    }
  });