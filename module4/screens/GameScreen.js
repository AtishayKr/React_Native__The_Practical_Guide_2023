import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import GuessLogItem from '../components/game/GuessLogItem';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber, gameOverHandle}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [allGuessNumber, setAllGuessNumber] = useState([initialGuess]);
  
  const guessRoundsListLength = allGuessNumber.length;
  
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandle(guessRoundsListLength);
    }
  }, [currentGuess, userNumber]);


  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong..', [
        {text: 'sorry', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    }
    if (direction === 'higher') {
      minBoundary = currentGuess + 1;
    }
    const rndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(rndNum);
    setAllGuessNumber(prevGuess => [rndNum, ...prevGuess]);
  };

  return (
    <View>
      <Title> Opponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.instructionText}> Higher or lower ?</Text>
        <View style={styles.btnContainers}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Icon name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
              <Icon name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={allGuessNumber}
          keyExtractor={item => item}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainers: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  btnContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  instructionText: {
    fontFamily: 'OpenSans-Regular',
    color: Colors.accent500,
    fontSize: 24,
  },
  listContainer: {
    // flex: 1,
    height: 400,
    paddingVertical: 10,
  },
});
