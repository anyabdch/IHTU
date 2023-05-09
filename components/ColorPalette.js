import React from 'react';
import { View } from 'react-native';

export default function ColorPalette(props) {

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'turquoise', 'purple', 'pink', 'deeppink']

    return(
        <View className="color-palette">
            {colors.map(color => { 
                const activeClass = props.currentColor === color ? "color-swatch-active" : "";
                return (
                    <View onClick={() => {props.changeColor(color)}}>
                        <View className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></View>
                    </View>
                )
            })}
        </View>
    )
}