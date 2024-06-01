/**  
* @file signup.tsx.    

* @description Will load imports fonts. Returns Sign Up screen constant. Imports MyForm from components form.js. 

* @version 1.1.0

* @author Rhys Lahy

*/

/**
 * The Sign Up constant will return the Sign Up screen.
 
 
 * @param
 * @returns Sign Up screen with navigation functionality and imports MyForm which is envisioned to let a new user sign up and add their user details to the staff directory during onboarding.
 */
//import styles, react, react native elements including use state, and ROI files.
//import expo router.
//import form.

import { StatusBar } from "expo-status-bar";
import { styles_home, styles_staffdirectory } from "../Styles/styles";
import React from "react";
import { Text, Image, View, SafeAreaView, ImageBackground } from "react-native";

import MyForm from "./component/form";
const image = require("../../assets/ROI_FILES/bground3.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");
import { useFonts } from "expo-font";
// Define constant.
// Return view and background image and form.
const SignUp = () => {
  const [loaded] = useFonts({
    "Trebuchet-Bold": require("../../assets/fonts/Trebuchet MS Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const [loaded1] = useFonts({
    "Trebuchet-MS": require("../../assets/fonts/Trebuchet MS.ttf"),
  });
  if (!loaded1) {
    return null;
  }

  return (
    <View accessible={true} style={styles_home.container}>
      <ImageBackground source={image} style={styles_home.image}>
        <Image source={image_logo} style={styles_home.image_logo}></Image>
        <Text
          style={{
            fontFamily: "Trebuchet-Bold",
            fontSize: 30,
            color: "white",
            alignContent: "flex-start",
            textAlign: "center",
          }}
        >
          SignUp
        </Text>

        <View accessible={true} style={styles_home.container}>
          {/*style={{justifyContent: "center", alignContent: "left", fontSize: 40,}}*/}
          <View accessible={true}>
            <ImageBackground source={image} style={styles_home.image}>
              <MyForm />
            </ImageBackground>
          </View>
        </View>

        {/* <Pressable style={styles_home.button} onPress={() => router.push("/")}><Text style={styles_home.buttonLabel}>Finish</Text></Pressable>
            <Pressable style={styles_home.button} onPress={() => router.push("/")} ><Text style={styles_home.buttonLabel}>Back</Text></Pressable> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};
//Export Signup.
export default SignUp;
