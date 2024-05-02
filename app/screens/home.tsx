//import styles, react, react native elements including use state, and ROI files.
//import expo router.
import { StatusBar } from "expo-status-bar";
import { styles_home, styles_nav, styles_footer_home } from "../CSS/styles";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, Text, View, Image, Pressable } from "react-native";
const image = require("../../assets/ROI_FILES/bground3.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");
// Define constant Home.
const Home = () => {
// Returns Navigation.  
  return (
    <View style={styles_home.container}>
      <ImageBackground source={image} style={styles_home.image}>
        <Image source={image_logo} style={styles_home.image_logo}></Image>
        <Text style={styles_home.text}>Home</Text>
        <View style={styles_nav.container}>
          <Pressable
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for Home.")}
          >
            <Text style={styles_home.buttonLabel}>Home</Text>
          </Pressable>
          <Pressable
            style={styles_home.button}
            onPress={() => router.push("/screens/staffdirectory")}
          >
            <Text style={styles_home.buttonLabel}>Staff Directory</Text>
          </Pressable>
          <Pressable
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for HR.")}
          >
            <Text style={styles_home.buttonLabel}>HR</Text>
          </Pressable>
        </View>
        <View style={styles_nav.container}>
          <Pressable
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for Documents.")}
          >
            <Text style={styles_home.buttonLabel}>Documents</Text>
          </Pressable>
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
        <StatusBar style="auto" />
        <View style={styles_footer_home.container}>
          <Pressable
            style={styles_home.button}
            onPress={() => router.push("./")}
          >
            <Text style={styles_home.buttonLabel}>LogOut</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
//Export Home.
export default Home;
