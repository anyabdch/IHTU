import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const ColoringPages = (props) => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Coloring Pages</Text>
        <View style={{position:'absolute',top:30,left:30, alignSelf:'flex-end'}}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}>
            <Icon name="home" size={50} color='#900' />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  
});

export default ColoringPages;