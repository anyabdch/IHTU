import { StatusBar } from 'expo-status-bar';
import Orientation from 'react-native-orientation';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flower from './components/Flower';
import ColorPalette from './components/ColorPalette';

// Test
const image = {uri: 'https://wallpapercave.com/wp/wp5136232.jpg'}

const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Map' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="NorthAmerica" component={NorthAmerica} />
        <Stack.Screen name="SouthAmerica" component={SouthAmerica} />
        <Stack.Screen name="Africa" component={Africa} />
        <Stack.Screen name="Asia" component={Asia} />
        <Stack.Screen name="Europe" component={Europe} />
        <Stack.Screen name="Australia" component={Australia} />
        <Stack.Screen name="Antarctica" component={Antarctica} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
//Screen One
const MapScreen = props => {
  Orientation.unlockAllOrientations;
  Orientation.lockToLandgiscape;
  return (
      <View style={styles.container}>        
        {/* Background image */}
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        </ImageBackground>
          <StatusBar style='auto' />
          <View style={styles.menuButton}>
            <Button onPress={() => props.navigation.navigate('ScreenTwo')} title = ''/>
            <Text style = {styles.menuText} onPress={() => props.navigation.navigate('ScreenTwo')}>Menu</Text>
          </View>

          {/* continent buttons */}
          <View style={styles.continentButton} position={'absolute'} top={'30%'} left={'10%'} >
            <TouchableOpacity onPress={() => props.navigation.navigate('NorthAmerica')}>
              <Text style={styles.continentButtonText}>NORTH AMERICA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.continentButton} position={'absolute'} bottom={'10%'} left={'20%'}>
            <TouchableOpacity onPress={() => props.navigation.navigate('SouthAmerica')}>
              <Text style={styles.continentButtonText}>SOUTH AMERICA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.continentButton} position={'absolute'} bottom={'30%'} left={'40%'}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Africa')}>
              <Text style={styles.continentButtonText}>AFRICA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.continentButton} position={'absolute'} top={'30%'} right={'20%'}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Asia')}>
              <Text style={styles.continentButtonText}>ASIA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.continentButton} position={'absolute'} top={'20%'} left={'40%'}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Europe')}>
              <Text style={styles.continentButtonText}>EUROPE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.continentButton} position={'absolute'} top={540} right={140}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Australia')}>
              <Text style={styles.continentButtonText}>AUSTRALIA</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.continentButton} position={'absolute'} top={700} right={500}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Antarctica')}>
              <Text style={styles.continentButtonText}>ANTARCTICA</Text>
            </TouchableOpacity>
          </View>
      </View>
  );
  };

//Screen Two
const ScreenTwo = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Two</Text>
      <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end'}}>
        <Button
          onPress={() => props.navigation.goBack()}
          title="Back"
        />
      </View>
    </View>
  );
};

// North America
const NorthAmerica = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>North America</Text>
      <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end'}}>
        <Button
          onPress={() => props.navigation.goBack()}
          title="Back"
        />
      </View>
    </View>
  );
};

// South America
const SouthAmerica = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>South America</Text>
      <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end'}}>
        <Button
          onPress={() => props.navigation.goBack()}
          title="Back"
        />
      </View>
    </View>
  );
};

// Africa
const Africa = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Africa</Text>
      <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end'}}>
        <Button
          onPress={() => props.navigation.goBack()}
          title="Back"
        />
      </View>
    </View>
  );
};

// Asia
const Asia = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Asia</Text>
      <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end'}}>
        <Button
          onPress={() => props.navigation.goBack()}
          title="Back"
        />
      </View>
    </View>
  );
};

// Europe
const Europe = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Europe</Text>
      <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end'}}>
        <Button
          onPress={() => props.navigation.goBack()}
          title="Back"
        />
      </View>
    </View>
  );
};

// Australia
const Australia = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Australia</Text>
      <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end'}}>
        <Button
          onPress={() => props.navigation.goBack()}
          title="Back"
        />
      </View>
    </View>
  );
};

//Antarctica
const Antarctica = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Australia</Text>
      <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end'}}>
        <Button
          onPress={() => props.navigation.goBack()}
          title="Back"
        />
      </View>
    </View>
  );
};

//coloring
const ColoringPage = (i) => {
  var fillColors = ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
  var currentColor = 'blue'

  const onFillColor = (i) => {
    return (fillColors[i] = currentColor)
  }

  return (
    <View className="App">
      <View className= "flower">
        <Flower fillColors={fillColors} onFill={onFillColor} />
      </View>
      {/* <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
  },
  count: {
    color: 'white',
    fontSize: 12,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  menuText: {
    alignSelf:'center',
    color: 'white',
    fontStyle: 'normal',
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    top: 10,
  },
  menuButton: {
    backgroundColor: 'transparent',
    borderWidth:1,
    width: 100,
    height: 50,
    borderRadius: 10,
    alignSelf:'flext-end',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  continentButton: {
    backgroundColor: 'transparent',
    width: 200,
    height: 40,
    borderRadius: 10,
    alignSelf:'center',
    zIndex: 1,
  },
  continentButtonText: {
    shadowColor: 'black',
    shadowOffset: {width:0, height:0},
    shadowRadius: 15,
    shadowOpacity: 1.3,
    opacity: 0.8,
    alignSelf:'center',
    color: 'white',
    fontStyle: 'normal',
    fontSize: 19,
    textAlign: 'center',
    top: 6,
  }
});
