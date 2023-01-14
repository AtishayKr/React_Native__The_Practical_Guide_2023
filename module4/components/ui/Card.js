import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/colors'
import React from 'react'

export default function Card({children}) {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
    alignItems: 'center',
    backgroundColor: Colors.primary500,
    padding: 10,
    borderRadius: 10,
    elevation: 8,
  },})