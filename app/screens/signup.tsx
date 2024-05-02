//import styles, react, react native elements including use state, and ROI files.
//import expo router.
//import form.

import { StatusBar } from "expo-status-bar";
import {
  styles_home,
  styles_footer,
  styles_staffdirectory,
} from "../CSS/styles";
import React from "react";
import { router } from "expo-router";
import {
  Text,
  Image,
  View,
  TextInput,
  Pressable,
  Button,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import MyForm from "./component/form";
const image = require("../../assets/ROI_FILES/bground3.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");

// Define constant.
// Return view and background image and form.
const SignUp = () => {
  return (
    <View style={styles_home.container}>
      <ImageBackground source={image} style={styles_home.image}>
        <Image source={image_logo} style={styles_home.image_logo}></Image>
        <Text style={styles_home.text}>SignUp</Text>

        <View style={styles_home.container}>
          <SafeAreaView style={styles_staffdirectory.container}>
            {/*style={{justifyContent: "center", alignContent: "left", fontSize: 40,}}*/}
            <View>
              <ImageBackground source={image} style={styles_home.image}>
                <MyForm />
              </ImageBackground>
            </View>
          </SafeAreaView>
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
