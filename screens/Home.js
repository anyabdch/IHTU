import { StatusBar } from 'expo-status-bar';
import Orientation from 'react-native-orientation';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity, Dimensions} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Octicons';


const HomeScreen = (props) => {
  return(
    <View alignItems={'stretch'}>
    <View alignSelf={'center'} paddingTop={50} paddingBottom={60}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Coloring')}>
            <Icon name="pencil" size={50} color='#900' />
          </TouchableOpacity>
        </View>
    <View alignSelf={'center'} paddingBottom={60}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Map')}>
            <Icon name="globe" size={50} color='#900' />
          </TouchableOpacity>
        </View>
    <View alignSelf={'center'}>
          <TouchableOpacity onPress={() => props.navigation.navigate('DnD')}>
            <Icon name="code-of-conduct" size={50} color='#900' />
          </TouchableOpacity>
        </View>
    </View>
    )
}

export default HomeScreen;