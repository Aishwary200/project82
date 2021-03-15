import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen'
import HomeScreen from './screens/HomeScreen'
import ExchangeScreen from './screens/ExchangeScreen'
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer'
import CustomSideBarMenu from './component/customSideBarMenu'
import SettingScreen from './screens/SettingScreen'

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
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Exchange: {
    screen: ExchangeScreen,
  }
})
const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: SignUpLoginScreen },
  Drawer: { screen: AppDrawerNavigator }
})
const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TabNavigator
  },
  Settings: {
    screen: SettingScreen
  }
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  })
const AppContainer = createAppContainer(switchNavigator);
