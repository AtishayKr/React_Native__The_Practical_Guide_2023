import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);

  const startGameHandler = PickUserNumber => {
    setUserNumber(PickUserNumber);
    setGameIsOver(false);
  };

  const gameOverHandle = (numberOfRound) => {
    setGameIsOver(true);
    setGuessRound(numberOfRound);
  };

  const onStartNewGame = () => {
    setUserNumber(null);
    setGuessRound(0);
  };

  let screen = <StartGameScreen onPickNumber={startGameHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen gameOverHandle={gameOverHandle} userNumber={userNumber} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundNumber={guessRound}
        userNumber={userNumber}
        startAgainHandler={onStartNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary400, Colors.accent500]}
      style={{flex: 1}}>
      <ImageBackground
        source={require('./assets/images/backGround.jpg')}
        resizeMode="cover"
        imageStyle={{opacity: 0.15}}
        style={styles.bgImage}>
        <SafeAreaView style={styles.appContainer}>
          <View style={styles.appContainer}>{screen}</View>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // flex: 1,
    // marginTop: 40,
    padding: 20,
  },
  bgImage: {
    flex: 1,
  },
});
