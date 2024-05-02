//import styles, react, react native elements including use state, and ROI files.
//import expo router.



import { StatusBar } from "expo-status-bar";
import { styles_home, styles_nav } from "../CSS/styles";
import React from "react";
import { router } from "expo-router";
import { ImageBackground, Text, View, Image, Pressable } from "react-native";
import User from './component/readUser';

const image = require("../../assets/ROI_FILES/bground3.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");

// Define constant Edit Directory.
//Return view and background image.
const EditDirectory = () => {
// Returns Navigation. 
    return (
      <View style={styles_home.container}>
        <ImageBackground source={image} style={styles_home.image}>
          <Image source={image_logo} style={styles_home.image_logo}></Image>
          <Text style={styles_home.text}>Edit Directory</Text>
            
            <View style={styles_nav.container}>
          <Pressable
            style={styles_home.button}
            onPress={() => router.push("/screens/home")}
          >
            <Text style={styles_home.buttonLabel}>Home</Text>
          </Pressable>
          
          <Pressable
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for HR.")}
          >
            <Text style={styles_home.buttonLabel}>HR</Text>
          </Pressable>
          <Pressable
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for Documents.")}
          >
            <Text style={styles_home.buttonLabel}>Documents</Text>
          </Pressable>
          </View>
          <View style={styles_nav.container}>
          <Pressable
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for Payroll.")}
          >
            <Text style={styles_home.buttonLabel}>Payroll</Text>
          </Pressable>
          <Pressable
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for Comms.")}
          >
            <Text style={styles_home.buttonLabel}>Comms</Text>
          </Pressable>
          </View>
{/*Import User from readUser */}
          <View style={styles_home.container}>
   
              <User/>
          </View>
          
          
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    );
  };
// Export Edit Directory.
  export default EditDirectory;