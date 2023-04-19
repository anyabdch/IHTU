import React, { useState, useEffect } from 'react';
import {ImageBackground, StyleSheet, Text, Button, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';

const Africa = props => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Africa</Text>
        <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end'}}>
          <Button
            onPress={() => props.navigation.goBack()}
            title="Back"
          />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  
});

export default Africa;