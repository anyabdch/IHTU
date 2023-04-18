import React from 'react';
import {ImageBackground, Text, StyleSheet, View, Image} from 'react-native';
import SkinColorBuilder from './avatar-parts/skinColor-builder.js';

const AvatarBuilder = props => {
  return (

    <View style={styles.avatarContainer}>

      <ImageBackground style={styles.tinyLogo} source={require('../images/avatar-images/skinColor-images/blue-emoji-1.jpeg')}>
        <Image style={styles.tinyLogo} source={require('../images/avatar-images/skinColor-images/blue-emoji-2.jpeg')}>
        </Image>
      </ImageBackground>
      {/* <Image style={styles.tinyLogo} source={require('../images/avatar-images/skinColor-images/blue-emoji-1.jpeg')}/> */}
      {/* <Text>My skin shade is {props.skinColor}!</Text>
      <Text>My hair color is {props.hairColor}!</Text>
      <Text>My hair type is {props.hairType}!</Text>
      <Text>My shirt color is {props.shirtColor}!</Text>
      <Text>My pants color is {props.pantsColor}!</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  avatarContainer: {

  },
});

// Create function that gets correct shade

export default AvatarBuilder;