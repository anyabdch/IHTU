import { StatusBar } from 'expo-status-bar';
import Orientation from 'react-native-orientation';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {DropDownPicker} from 'react-native-select-dropdown';


const image = './images/map.jpg'

// const [Pages, setPage] = React.useState("");
const [selected, setSelected] = React.useState("");
const Pages = [{key: 'home', value: MapScreen},
               {key: 'avatar', value: ScreenTwo},];

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
        <View>
          <SelectDropdown
            data={Pages}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              
              return item
            }}
          />
      </View>
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
        {/* <Stack.Screen name="Avatar" component={AvatarScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 24,
  },
  avatarBackgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {
    color: '#444', 
    textAlign: 'left'
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEßFEF'
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF', 
    borderBottomColor: '#C5C5C5'
  },
  dropdown1RowTxtStyle: {
    color: '#444', 
    textAlign: 'left'
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