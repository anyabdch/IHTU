import React, { useState, useCallback, useRef, useEffect } from "react";
import { Button, View, Alert, ImageBackground, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Europe(props) { 
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    
    <View>
      <View style={{borderWidth:1,position:'absolute',top:0,left:0, alignSelf:'flex-end', zIndex:1}}>
          <Button
            onPress={() => props.navigation.goBack()}
            title="Back"
          />
        </View>
      <YoutubePlayer
        height={350}
        width={850}
        play={playing}
        videoId={"RNx0akt3_XI"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  );
}