import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

export default function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const handleNumber = number => {
    setEnteredNumber(number);
  };

  const resetHadler = () => {
    setEnteredNumber('');
  };
  const confirmHandler = () => {
    const choseNumber = parseInt(enteredNumber);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Please entered the number between 1 and 99',
        [{text: 'okay', style: 'destructive', onPress: resetHadler}],
      );
      return;
    }
    onPickNumber(choseNumber);
  };
  return (
    <View>
      <Title style={{marginVertical: 30}}>Guess My Number</Title>
      <Card>
      <Text style={styles.instructionText}> Enter a Number</Text>
        <TextInput
          onChangeText={handleNumber}
          value={enteredNumber}
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
        />
        <View style={styles.btnContainers}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={resetHadler}>RESET</PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={confirmHandler}>CONFIRM</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: 'bold',
    marginVertical: 8,
    padding: 5,
  },
  instructionText: {
    color: Colors.accent500,
    fontFamily: "OpenSans-Regular",
    fontSize: 24,
  },
  btnContainers: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  btnContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
});
