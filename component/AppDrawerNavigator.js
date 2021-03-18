import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import CustomSideBarMenu from './customSideBarMenu'
import { TabNavigator } from './AppTabNavigator'
import SettingScreen from '../screens/SettingScreen'

export const AppDrawerNavigator = createDrawerNavigator({
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