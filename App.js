import { StatusBar } from 'expo-status-bar';
import { unlockAllOrientations } from 'react-native-orientation';
import Orientation from 'react-native-orientation';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Test

const image = {uri: 'https://wallpapercave.com/wp/wp5136232.jpg'}

function HomeScreen(){
  const [count, setCount] = useState(0);
  Orientation.unlockAllOrientations;
  Orientation.lockToLandscape;

  // //onPress To Navigate
  // const onPress = () => {
  //   props.navigation.navigate('ScreenTwo');
  // };

  return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>        
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={image}
            style={styles.buttonImageIconStyle}
          />
          <View styles={styles.buttonIconSeparatorStyle}/>
          <Text styles={styles.buttonTextStyle}>
            Learn more about NA
          </Text>
        </TouchableOpacity>

        {/* Background image */}
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
    </SafeAreaView>
  )
};

//Screen One
const ScreenOne = props => {
  const [count, setCount] = useState(0);
  Orientation.unlockAllOrientations;
  Orientation.lockToLandscape;

  //onPress To Navigate
  const onPress = () => {
    props.navigation.navigate('ScreenTwo');
  };

  return (
      <View style={styles.container}>        
        {/* <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}>
          <Image
            source={image}
            style={styles.buttonImageIconStyle}
          />
          <View styles={styles.buttonIconSeparatorStyle}/>
          <Text styles={styles.buttonTextStyle}>
            Learn more about NA
          </Text>
        </TouchableOpacity> */}

        {/* Background image */}
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <StatusBar style='auto' />
          <Text style={styles.text}>Hi IHTU!</Text>
          <Text style={styles.count}>You clicked {count} times</Text>
          <Button
            onPress={() => setCount(count + 1)}
            title="Click me!"
          />
          <Button
            onPress={() => props.navigation.navigate('ScreenTwo')}
            title="Next page"
          />
        </ImageBackground>
      </View>
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <TouchableOpacity onPress={onPress}>
    //     <Text>Hello From Screen One</Text>
    //   </TouchableOpacity>
    // </View>
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

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

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

// const image = {uri: 'https://wallpapercave.com/wp/wp5136232.jpg'};

// // Test
// export default function App(){
//   const [count, setCount] = useState(0);
//   return(
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>        
//         <TouchableOpacity
//           style={styles.buttonFacebookStyle}
//           activeOpacity={0.5}>
//           <Image
//             source={{
//               uri:
//                 '/images/north-america-map.png',
//             }}
//             style={styles.buttonImageIconStyle}
//           />
//           <View styles={styles.buttonIconSeparatorStyle}/>
//           <Text styles={styles.buttonTextStyle}>
//             Learn more about NA
//           </Text>
//         </TouchableOpacity>

//         <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//           <StatusBar style='auto' />
//           <Text style={styles.text}>Hi IHTU!</Text>
//           <Text style={styles.count}>You clicked {count} times</Text>
//           <Button
//             onPress={() => setCount(count + 1)}
//             title="Click me!"
//           />
//         </ImageBackground>
//       </View>
//     </SafeAreaView>
//   )
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   count: {
//     color: 'white',
//     fontSize: 12,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//   },
//   buttonFacebookStyle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#485a96',
//     borderWidth: 0.5,
//     borderColor: '#fff',
//     height: 40,
//     borderRadius: 5,
//     margin: 5,
//   },
//   buttonImageIconStyle: {
//     padding: 10,
//     margin: 5,
//     height: 25,
//     width: 25,
//     resizeMode: 'stretch',
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     marginBottom: 4,
//     marginLeft: 10,
//   },
//   buttonIconSeparatorStyle: {
//     backgroundColor: '#fff',
//     width: 1,
//     height: 40,
//   },
//   text: {
//     color: 'white',
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//   },
// });