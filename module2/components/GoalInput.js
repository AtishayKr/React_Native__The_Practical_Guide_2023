import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const textChangeHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const handlePress = () => {
    props.btnPressHandle(enteredGoalText);
    setEnteredGoalText('');
  };

  const handleCancel = () => {
    props.closeModel();
  };

  return (
    <Modal visible={props.modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/images/img.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Type the Goal"
          onChangeText={textChangeHandler}
          value={enteredGoalText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={handleCancel} />
          </View>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={handlePress} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  btn: {
    width: '40%',
    marginHorizontal: 8,
  },
  imgStyle: {
    width: 100,
    height: 100,
    margin: 25,
  },
});
