import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
// import './App.css'
import Flower from '../components/Flower'
import ColorPalette from '../components/ColorPalette'

const ColoringPage = (props) => {
  const [fillColors, setFillColors] = useState(Array(22).fill('white'))
  const [currentColor, setCurrentColor] = useState('blue')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    setFillColors(newFillColors)
  }

  return (
    <View className="ColoringPage">
      <View className= "flower">
        <Flower fillColors={fillColors} onFill={onFillColor} />
      </View>
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
      <View style={{position:'absolute',top:30,left:30, alignSelf:'flex-end'}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}>
            <Icon name="home" size={50} color='#900' />
          </TouchableOpacity>
        </View>
    </View>
    
  )
}

export default ColoringPage