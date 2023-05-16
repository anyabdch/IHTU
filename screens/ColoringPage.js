import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
// import './App.css'
import Flower from '../components/Flower'
import ColorPalette from '../components/ColorPalette'

const ColoringPage = () => {
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
    </View>
  )
}

export default ColoringPage