import { StatusBar } from 'expo-status-bar';
import Orientation from 'react-native-orientation';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import Menu from './screens/Menu';
import Africa from './screens/Africa';
import Asia from './screens/Asia';
import Australia from './screens/Australia';
import Antarctica from './screens/Antarctica';
import Europe from './screens/Europe';
import SouthAmerica from './screens/SouthAmerica';
import NorthAmerica from './screens/NorthAmerica';



// Test
// const image = {uri: 'https://wallpapercave.com/wp/wp5136232.jpg'}

const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Map' screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="Map" 
          component={MapScreen} />
        <Stack.Screen 
          name="Menu" 
          component={Menu} />
        <Stack.Screen 
          name="NorthAmerica" 
          component={NorthAmerica} />
        <Stack.Screen 
          name="SouthAmerica" 
          component={SouthAmerica} />
        <Stack.Screen 
          name="Africa" 
          component={Africa} />
        <Stack.Screen 
          name="Asia" 
          component={Asia} />
        <Stack.Screen 
          name="Europe" 
          component={Europe} />
        <Stack.Screen 
          name="Australia" 
          component={Australia} />
        <Stack.Screen 
          name="Antarctica" 
          component={Antarctica} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({

});
