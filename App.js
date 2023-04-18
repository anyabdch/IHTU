import { StatusBar } from 'expo-status-bar';
import Orientation from 'react-native-orientation';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvatarBuilder from './avatar/avatar-builder.js';

// import { Avatar } from "react-native-avataaars";


const image = './images/map.jpg'


//Screen One
const MapScreen = props => {
  Orientation.unlockAllOrientations;
  Orientation.lockToLandscape;

  return (
      <View style={styles.container}>
        {/* Background image */}
        <ImageBackground source={require('./images/map.jpg')} resizeMode="cover" style={styles.image}>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
          <StatusBar style='auto' />
          <Button
            onPress={() => props.navigation.navigate('ScreenTwo')}
            title="Next page"
          />
          <Button
            onPress={() => props.navigation.navigate('Avatar')}
            title="Avatar page"
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

// Avatar Page
const AvatarScreen = props => {
  // AvatarScreen2
  Orientation.unlockAllOrientations;
  Orientation.lockToLandscape;

  const [color, setColor] = useState('');
  const [shade, setShade] = useState('#c58c85');
  const [count, setCount] = useState(0);

  const onColorChange = color => {
    setColor(color);
  };

  return (
    <View style={styles.avatarContainer}>
      <ImageBackground source={require('./images/Avatar-Page-Background-1.png')} resizeMode="cover" style={styles.avatarBackgroundImage}>
        
        <StatusBar style='auto' />

        {/* <Avatar /> */}

        <AvatarBuilder skinColor= {shade} hairColor="Jellylorum" 
                    hairType="Spot" shirtColor="Maru" pantsColor="Jellylorum"/>

        <Text>Avatar Screen</Text>
        <Text style={{color: shade, textAlign: 'center'}}> Shade is: {shade}!</Text>

        <View style={styles.btnGroup}>
          <Button 
            // style={styles.btn}
            onPress={() => setShade("#c58c85")}
            title="Shade2"
          />
          <Button 
            onPress={() => setShade("#ecbcb4")}
            title="Shade3"
          />
          <Button 
            onPress={() => setShade("#d1a3a4")}
            title="Shade4"
          />
          <Button 
            onPress={() => setShade("#a1665e")}
            title="Shade5"
          />
          <Button 
            onPress={() => setShade("#503335")}
            title="Shade4"
          />
          <Button 
            onPress={() => setShade("#592f2a")}
            title="Shade5"
          />
          <Button
            onPress={() => props.navigation.goBack()}
            title="Back"
          />
        </View>
        
      </ImageBackground>
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
        <Stack.Screen name="Avatar" component={AvatarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 1,
    // marginTop: 10,
    // paddingHorizontal: 24,
  },
  avatarBackgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  btnGroup: {
    flexDirection: 'row',
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: '#6B7280'
  },
  btn: {
    flex: 1,
    borderRightWidth: 0.25,
    borderLeftWidth: 0.25,
    borderColor: '#6B7280'
  },
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