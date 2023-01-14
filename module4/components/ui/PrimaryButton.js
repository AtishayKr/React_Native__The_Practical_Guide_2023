import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

export default function PrimaryButton({children, onPress}) {
  const pressHandler = () => {
    console.log('pressed');
  };
  return (
    <View style={styles.outterContainer}>
      <Pressable style={styles.innerContainer} onPress={onPress} android_ripple={{color: '#640233'}}>
          <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: Colors.primary300,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    fontFamily: "OpenSans-Regular",
    color: 'white',
    textAlign: 'center',
  },
});
