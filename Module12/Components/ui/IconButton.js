import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

export default function IconButton({icon, size, color, onPress}) {
  return (
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        margin: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    pressed: {
        opecity: 0.7
    }
});
