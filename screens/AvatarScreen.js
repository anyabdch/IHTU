import { StatusBar } from 'expo-status-bar';
import Orientation from 'react-native-orientation';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ColorPicker from 'react-native-wheel-color-picker';
import AvatarBuilder from './avatar/avatar-builder.js';


// WORK IN PROGRESS

// Avatar Page
const AvatarScreen = props => {
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
        {/* <ColorPicker
            color={color}
            onColorChange={(color) => onColorChange(color)}
            // onColorChangeComplete={color => alert(`Color selected: ${color}`)}
            thumbSize={30}
            sliderSize={30}
            noSnap={true}
            row={false}
        /> */}
            <ImageBackground source={{uri: 'https://wallpapercave.com/wp/wp5136232.jpg'}} resizeMode="cover" style={styles.avatarBackgroundImage}>
                <StatusBar style='auto' />

                <AvatarBuilder skinColor= {shade} hairColor="Jellylorum" 
                    hairType="Spot" shirtColor="Maru" pantsColor="Jellylorum"/>

                <Text>Avatar Screen</Text>
                <Text style={{color: shade, textAlign: 'center'}}> Shade is: {shade}!</Text>
                {/* Can make a function to clean buttons up */}
                <Button 
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
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        flex: 1,
        // marginTop: 70,
        // paddingHorizontal: 24,
      },
      avatarBackgroundImage: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
      },
});

export default AvatarScreen;