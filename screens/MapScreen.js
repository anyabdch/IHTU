import { StatusBar } from 'expo-status-bar';
import Orientation from 'react-native-orientation';
import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity, Dimensions} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const image = {uri: 'https://wallpapercave.com/wp/wp5136232.jpg'}
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const handleMenuSelection = (item, props) => {
  switch(item.value) {
    case 'Menu':
      props.navigation.navigate('Home');
      break;
    case 'Game 1':
      props.navigation.navigate('Game1');
      break;
    case 'Game 2':
      props.navigation.navigate('Africa');
      break;
    default:
      break;
  }
}


const MapScreen = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    { label: 'Menu', value: 'Menu' },
    { label: 'Game 1', value: 'Game 1' },
    { label: 'Game 2', value: 'Game 2' },
  ]);

  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  return (
    <View style={styles.container}>
      {/* Background image */}
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <StatusBar style="auto" />
      <View style={styles.menuButton}>
        <DropDownPicker
          defaultValue={'Menu'}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onOpen={() => console.log('Dropdown opened')}
          onClose={() => console.log('Dropdown closed')}
          onSelectItem={(item) => {
            console.log(item)
            handleMenuSelection(item, props)}
          }/>
      </View>

        {/* continent buttons */}
        <View style={styles.continentButton} position={'absolute'} top={'33%'} left={'13%'} fontSize={14*(dimensions.window.width / 844)} >
          <TouchableOpacity onPress={() => props.navigation.navigate('NorthAmerica')}>
            <Text style={styles.continentButtonText}>NORTH AMERICA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.continentButton} position={'absolute'} top={'70%'} left={'22%'}>
          <TouchableOpacity onPress={() => props.navigation.navigate('SouthAmerica')}>
            <Text style={styles.continentButtonText}>SOUTH AMERICA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.continentButton} position={'absolute'} top={'50%'} left={'39%'}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Africa')}>
            <Text style={styles.continentButtonText}>AFRICA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.continentButton} position={'absolute'} top={'30%'} right={'20%'}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Asia')}>
            <Text style={styles.continentButtonText}>ASIA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.continentButton} position={'absolute'} top={'26%'} right={'37%'}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Europe')}>
            <Text style={styles.continentButtonText}>EUROPE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.continentButton} position={'absolute'} top={'73%'} right={'9%'}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Australia')}>
            <Text style={styles.continentButtonText}>AUSTRALIA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.continentButton} position={'absolute'} top={'90%'} right={'37%'}>
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
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        zIndex: 0,
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
      // menuButton: {
      //   backgroundColor: 'transparent',
      //   borderWidth:1,
      //   width: 100,
      //   height: 50,
      //   borderRadius: 10,
      //   alignSelf:'flext-end',
      //   position: 'absolute',
      //   top: 0,
      //   left: 0,
      // },
      menuButton: {
        width: 150,
        height: 40,
        alignSelf:'flex-end',
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
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
        textAlign: 'center',
        top: 6,
        zIndex: 1,
      }
});


export default MapScreen;