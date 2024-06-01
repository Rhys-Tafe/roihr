/**  
* @file loading.tsx.    

* @description Will load fonts assets as const and returns the loading splash screen. Uses fetching data.

* @version 1.1.0

* @author Rhys Lahy

*/

/**
 * The Loading constant will return the loading screens with timeout.
 
 
 * @param
 * @returns Loading screen.
 */
// //import styles, react, react native elements including use state, and ROI files.
//import expo router.
import { StatusBar } from "expo-status-bar";
import { styles_login } from "../Styles/styles";
import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";
const image1 = require("../../assets/ROI_FILES/bground2.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");
import { useFonts } from "expo-font";
const Loading = () => {
  //font loaded.
  const [loaded3] = useFonts({
    "Trebuchet-Bold": require("../../assets/fonts/Trebuchet MS Bold.ttf"),
    //Zeykfont: require("../../assets/fonts/Zeykfont-Regular.ttf"),
  });
  if (!loaded3) {
    return null;
  }
  return (
    <View style={styles_login.container}>
      <ImageBackground source={image1} style={styles_login.image}>
        <Text
          style={{
            fontFamily: "Trebuchet-Bold",
            fontSize: 30,
            color: "white",
            alignContent: "flex-start",
            textAlign: "center",
          }}
        >
          Loading...
        </Text>
        <Image source={image_logo} style={styles_login.image_logo}></Image>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};
export default Loading;
