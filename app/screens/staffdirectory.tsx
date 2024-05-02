//import styles, react, react native elements including use state, and ROI files.
//import expo router.

import { StatusBar } from "expo-status-bar";
import {
  styles_home,
  styles_nav,
  styles_footer,
  styles_staffdirectory,
  styles_login,
} from "../CSS/styles";
import React from "react";
import { router } from "expo-router";
import {
  ImageBackground,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
//import {User} from './component/staff';
//import newApp from './component/newApp';
import ReadAll from "./component/readUsers";
const image = require("../../assets/ROI_FILES/bground3.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");
import { useState } from "react";
import Users from "./component/newApp";
// Define variable x as global.
// Define constant Staff Directory.
var x = "";

const StaffDirectory = () => {
  var [id, setId] = useState("");
  function HandleId() {
    x = id;
    router.push("../screens/editdirectory");
    alert(x);
  }
  // Returns Navigation.
  return (
    <View style={styles_home.container}>
      <ImageBackground source={image} style={styles_home.image}>
        <Image source={image_logo} style={styles_home.image_logo}></Image>
        <Text style={styles_home.text}>Staff Directory</Text>

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
        <View>
          <TextInput
            style={styles_login.buttonLabel}
            placeholder={"User ID"}
            value={id}
            onChangeText={(text) => setId(text)}
          ></TextInput>
          <Text>{id}</Text>
        </View>
        <View style={styles_home.container}>
          <ReadAll />
        </View>

        <View style={styles_footer.container}>
          <Pressable
            style={styles_home.button}
            onPress={() => router.push("/screens/addUser")}
          >
            <Text style={styles_home.buttonLabel}>Add</Text>
          </Pressable>

          <Pressable style={styles_home.button} onPress={HandleId}>
            <Text style={styles_home.buttonLabel}>Edit</Text>
          </Pressable>

          <Pressable
            style={styles_home.button}
            onPress={() => router.push("/screens/home")}
          >
            <Text style={styles_home.buttonLabel}>Back</Text>
          </Pressable>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};
//Export Staff Directory and x variable used for id to select record to edit.
export { x };
export default StaffDirectory;
