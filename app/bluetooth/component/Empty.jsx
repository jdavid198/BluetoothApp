import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const Empty = ({label}) => {
    const styles=StyleSheet.create({
        text:{
            fontSize:20
        },
    })

    return (
        <View>
            <Text style={styles.text}>{label}</Text>
        </View>
    )
}
