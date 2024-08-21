/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import StartGameScreen from './src/screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/screens/GameScreen';
import Colors from './src/constants/colors';
import GameOverScreen from './src/screens/GameOverScreen';

function App(): React.JSX.Element {
  const [userNumber, setUserNumber] = useState(undefined);
  const [gameIsOver, setGameIsOver] = useState(false);

  function pickedNumberHandler(pickedNumber: any){
    setUserNumber(pickedNumber);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if(userNumber) { 
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} /> 
  }

  if(gameIsOver && userNumber) { 
    console.log('game over screen call');
    console.log(gameIsOver)
    console.log(userNumber)
    screen = <GameOverScreen /> 
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>

        <SafeAreaView>
          {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity: 0.15,
  }
});

export default App;
