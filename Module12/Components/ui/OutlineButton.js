import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../constants/Colors';

export default function OutlineButton({icon, children, onPress}) {
  return (
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
        <Icon style={styles.icon} name={icon} size={18} color={Colors.primary500} />
        <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({ 
    button: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        margin: 4,
        justifyContent: "center",
        alignItems: "center",
        borderColor: Colors.primary500,
        borderWidth: 1,
        flexDirection: "row"
    },
    pressed: {
      opacity: 0.7
    },
    icon: {
      marginRight: 6,
    },
    text: {
      color: Colors.primary500
    }
})