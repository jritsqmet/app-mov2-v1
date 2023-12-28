import { Image, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Fotografia() {

    const [titulo, setTitulo] = useState('')
    const [url, seturl] = useState('  ')

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
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '90%',
        height: 400
    },
    container: {
        alignItems: 'center',
    }
})