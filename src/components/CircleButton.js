import React, { Component } from 'react'
import { View,StyleSheet,TouchableOpacity} from 'react-native'
import {Text} from 'native-base'

export default CircleButton = ({caption,onPress}) =>  {
    return (
      <TouchableOpacity style={styles.CircleButton} onPress={onPress}>
        <Text style={styles.caption}>{caption}</Text>
      </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
  CircleButton:{
    backgroundColor:'crimson',
    borderRadius:50,
    height:80,
    width:80,
    alignItems:'center',
    justifyContent:'center'
  },
  caption:{
    color:'#FFF',
    fontWeight:'700',
    fontSize:20
  }
})