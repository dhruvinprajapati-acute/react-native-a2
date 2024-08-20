/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import StartGameScreen from './src/screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';

function App(): React.JSX.Element {
  return (
  <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
    <StartGameScreen />
  </LinearGradient >
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    backgroundColor: '#ddb52f',
  },
});

export default App;
