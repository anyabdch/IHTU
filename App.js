import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View} from 'react-native';

const image = {uri: 'https://wallpapercave.com/wp/wp5136232.jpg'};

export default function App(){
  const [count, setCount] = useState(0);
  return(
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StatusBar style='auto' />
        <Text style={styles.text}>Hi IHTU!</Text>
        <Text style={styles.count}>You clicked {count} times</Text>
        <Button
          onPress={() => setCount(count + 1)}
          title="Click me!"
        />
      </ImageBackground>
    </View>
  )
};

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
