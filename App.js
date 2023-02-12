import { StatusBar } from 'expo-status-bar';
import Orientation from 'react-native-orientation';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Test
const image = {uri: 'https://wallpapercave.com/wp/wp5136232.jpg'}

//Screen One
const MapScreen = props => {
  Orientation.unlockAllOrientations;
  Orientation.lockToLandscape;

  return (
      <View style={styles.container}>        
        {/* Background image */}
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <StatusBar style='auto' />
          <Button
            onPress={() => props.navigation.navigate('ScreenTwo')}
            title="Next page"
          />
        </ImageBackground>
      </View>
  );
};

//Screen Two
const ScreenTwo = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Two</Text>
      <Button
        onPress={() => props.navigation.goBack()}
        title="Back"
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Map' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  count: {
    color: 'white',
    fontSize: 12,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});