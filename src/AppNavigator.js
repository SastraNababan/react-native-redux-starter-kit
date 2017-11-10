import React, { Component } from 'react';
import {Platform} from 'react-native'
import {StackNavigator,DrawerNavigator} from 'react-navigation'
import HomeScreen from './screens/Home'
import AboutScreen from './screens/About'
import {DrawerMenu} from './components'
import ReduxScreen from './screens/Redux'
 

const routes ={
  HomeScreen: { screen: HomeScreen},
  AboutScreen: { screen: AboutScreen},
  ReduxScreen: { screen: ReduxScreen},
}

const Navigator = DrawerNavigator(
  routes,
  {
  initialRouteName: "HomeScreen",
  contentComponent: DrawerMenu,
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
}); 

const AppNavigator = () => (
  <Navigator/>
)

export default AppNavigator;
 