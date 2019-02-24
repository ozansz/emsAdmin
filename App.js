import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './components/MainScreen'

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
})

const AppContainer = createAppContainer(AppNavigator)