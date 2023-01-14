import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

export default function IconButton({onPress, name, color}) {
  return (
    <Pressable style={({pressed}) => pressed && styles.icon}  onPress={onPress}>
      <Icon style={styles.icon} name={name} size={30} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
    icon: {
        opacity: 0.7,
    }
});
