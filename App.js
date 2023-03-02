import { StatusBar } from 'expo-status-bar';
import { unlockAllOrientations } from 'react-native-orientation';
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

  //onPress To Navigate
  const onPress = () => {
    props.navigation.navigate('ScreenTwo');
  };




  return (
      <View style={styles.container}>        
        {/* Background image */}
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        </ImageBackground>
          <StatusBar style='auto' />
          <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end'}}>
            <Button
            backgroundColor='red'
            onPress={() => props.navigation.navigate('ScreenTwo')}
            title="Next page"
          />
          </View>
      </View>
  );
  };

//Screen Two
const ScreenTwo = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Two</Text>
    </View>
  );
};

// Stack for different screens
const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Styles
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
  button: {
    backgroundColor: 'red',
    height: 50,
    width: 100,
    position: 'absolute',
    top: 0,
    left: 0,
  }
});
