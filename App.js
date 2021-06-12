
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from "react-navigation" ;
import {createBottomTabNavigator} from "react-navigation-tabs";
import instagram from "./screen/instagram";
import facebook from "./screen/facebook";

export default function App() {
  return (
   <AppContainer/>
  );
}
var TabNavigator=createBottomTabNavigator({
instagram:{screen:instagram},
facebook:{screen:facebook}
})
const AppContainer=createAppContainer(TabNavigator)