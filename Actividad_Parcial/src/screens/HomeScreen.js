import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function HomeScreen({navigation}) {
  const dataUser = {
    name: 'Kim Namjoon',
    age: 30
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Opciones"
        onPress={() => navigation.navigate('Opciones')}
      />
    </View>
  )
}