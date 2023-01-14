import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({roundNumber, userNumber, startAgainHandler}) {
  return (
    <View>
      <Title style={{marginTop: 30}}>GAME OVER</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../assets/images/gameOver.png')}
        />
      </View>
      <Text style={styles.description}>
        Your phone needed <Text style={styles.boldText}> {roundNumber} </Text>rounds to guess the number{' '}
        <Text style={styles.boldText}> {userNumber} </Text>
      </Text>
      <View style={styles.btn}>
      <PrimaryButton onPress={startAgainHandler}>START AGAIN</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    marginTop: 40,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: Colors.primary500,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  description: {
    fontSize: 20,
    color: 'white',
    marginVertical: 24,
    fontFamily: "OpenSans-Regular"
  },
  boldText: {
    fontFamily: "OpenSans-Bold",
    color: Colors.accent500
  },
  btn: {
    alignItems: "center"
  }
});
