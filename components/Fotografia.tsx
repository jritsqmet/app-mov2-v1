import { Image, StyleSheet, Text, View, TextInput, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Fotografia() {

    const [titulo, setTitulo] = useState('')
    const [url, seturl] = useState('  ')

    const [oculto, setoculto] = useState(false)

    return (
        <View style={styles.container}>
            <Text>Fotografia!</Text>

            <TextInput
                placeholder='Ingrese un titulo'
                onChangeText={  (texto) => ( setTitulo(texto) )  }
            />
           
            <TextInput
                placeholder='Ingrese URL'
                onChangeText={ (texto) => ( seturl(texto) )}
                keyboardType='url'
                autoCapitalize='none'
            />
            <Text> </Text>
            <Text>{titulo}</Text>
            <Image
                source={{ uri: url }}
                style={styles.img}

            />
            <TouchableOpacity onPress={ ()=>(setoculto(true)) } >
                <Text>VISUALIZAR</Text>
            </TouchableOpacity>
            

            <Modal visible={oculto}>
                <Text>Descripcion: {titulo}</Text>

                <Button title='regresar' onPress={ () => (setoculto(false)) }/>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '90%',
        height: 100
    },
    container: {
        alignItems: 'center',
    }
})