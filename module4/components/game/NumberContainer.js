import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        borderRadius: 10,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.accent500,
        
    }
})