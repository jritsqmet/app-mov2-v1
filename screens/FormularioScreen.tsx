import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Busqueda from '../components/Busqueda';

export default function FormularioScreen() {

  const [numero1, setnumero1] = useState(0);
  const [numero2, setnumero2] = useState(0);
  const [respuesta, setrespuesta] = useState(0)

  function sumar( ){
    setrespuesta( numero1 + numero2 )
  }


  return (
    <View>
      <Text>FormularioScreen</Text>
      <TextInput 
        placeholder='Ingrese primer numero'
        keyboardType='numeric'
        onChangeText={ (texto) => ( setnumero1(+texto) ) }
      />
      <TextInput 
        placeholder='Ingrese segundo numero'
        keyboardType='numeric'
        onChangeText={ (texto) => setnumero2(+texto) }
      />

      <Text>{respuesta}</Text>

      <Button title='sumar' onPress={ () => (sumar()) }/>

      <Busqueda datos= { respuesta }/>
    </View>
  )
}

const styles = StyleSheet.create({})