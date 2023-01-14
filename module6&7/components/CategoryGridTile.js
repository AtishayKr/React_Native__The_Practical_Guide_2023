import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoryGridTile({title, color, onPress}) {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable android_ripple={{color: "#ccc"}} style={styles.button}
      onPress={onPress}>
        <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: "hidden"
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    }
})