import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen( {navigation}: any ) {
  return (
    <ImageBackground 
    source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/440/12/60/nature-hd-for-pc-download-1920x1080-wallpaper-preview.jpg'}}
    style={styles.container}
    >
        <Text style={{color:'white', fontSize:50}} >WELCOME</Text>

        <TouchableOpacity onPress={ () => (navigation.navigate('Tab')) }>
          <Text style={{color:'white', fontSize:30}}> CONTINUAR...</Text>
        </TouchableOpacity>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    resizeMode:'cover'
    }
})