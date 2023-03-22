import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Subtitle = ({title}) => {
    const styles=StyleSheet.create({
        container:{
            flexDirection:"row",
            marginVertical:15,
            alignItems:'center'
        },
        title:{
            fontSize:18,
            fontWeight:'bold',
            color:'gray'
        },
        line:{
            borderBottomWidth:1,
            marginLeft:5,
            flex:1,
            marginTop:3,
            borderColor:'#eceff1'
        },
    })
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.line}/>
    </View>
  )
}
