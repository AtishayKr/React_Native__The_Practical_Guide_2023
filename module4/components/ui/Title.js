import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/colors'
import React from 'react'

export default function Title({children, style}) {
  return (
    <View>
      <Text style={[styles.title, style]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 30,
    color: 'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12

  }
})