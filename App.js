import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen'
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { AppDrawerNavigator } from './component/AppDrawerNavigator'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: SignUpLoginScreen },
  Drawer: { screen: AppDrawerNavigator }
})

const AppContainer = createAppContainer(switchNavigator);
