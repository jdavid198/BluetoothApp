import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const BluetoothListLayout = ({title,children}) => {
    const styles=StyleSheet.create({
        container:{
            paddingHorizontal:20,
            paddingVertical:25,
            backgroundColor:'f5fcff'
        },
        title:{
            fontSize:20,
            fontWeight:'bold'
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    )
}
