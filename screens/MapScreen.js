import { StatusBar } from 'expo-status-bar';
import Orientation from 'react-native-orientation';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

const image = {uri: 'https://wallpapercave.com/wp/wp5136232.jpg'}

const MapScreen = props => {
    Orientation.unlockAllOrientations;
    Orientation.lockToLandscape;
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
            <View style={styles.continentButton} position={'absolute'} top={315} left={180} >
              <TouchableOpacity onPress={() => props.navigation.navigate('NorthAmerica')}>
                <Text style={styles.continentButtonText}>NORTH AMERICA</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.continentButton} position={'absolute'} top={500} left={290}>
              <TouchableOpacity onPress={() => props.navigation.navigate('SouthAmerica')}>
                <Text style={styles.continentButtonText}>SOUTH AMERICA</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.continentButton} position={'absolute'} top={420} left={500}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Africa')}>
                <Text style={styles.continentButtonText}>AFRICA</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.continentButton} position={'absolute'} top={300} right={260}>
              <TouchableOpacity onPress={() => props.navigation.navigate('Asia')}>
                <Text style={styles.continentButtonText}>ASIA</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.continentButton} position={'absolute'} top={315} right={490}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
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


export default MapScreen;