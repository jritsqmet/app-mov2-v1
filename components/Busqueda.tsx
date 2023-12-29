import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Busqueda( props: any ) {
    //console.log(props.datos);

    useEffect(() => {
        buscar()
    }, [])
    

    const arreglo = [2, -15, 5, 10, -8, 18, -3, 11, -20, 7]

    function buscar(){
        for( let item of arreglo ){
            //console.log()
            if( item === +props.datos){
                console.log('Valor encontrado')
                Alert.alert('Valor encontrado')
            }
        }
    }
    
    
  return (
    <View>
      <Text>Busqueda!!!!</Text>
      <Text>{props.datos}</Text>
      <Button title='buscar' onPress={ () => (buscar()) } color={'green'}/>
    </View>
  )
}

const styles = StyleSheet.create({})