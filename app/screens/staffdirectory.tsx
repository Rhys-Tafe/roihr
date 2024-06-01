/**  
* @file staffdirectory.tsx.    

* @description Will load imports fonts. Returns Staff Directory screen constant as a function. Imports Read All from components readUsers.js. 

* @version 1.1.0

* @author Rhys Lahy

*/

/**
 * The Staff Directory constant will return the Staff Directory screen.
 
 
 * @param
 * @returns Staff Directory screen with navigation functionality and imports ReadAll.
 */
//import styles, react, react native elements including use state, and ROI files.
//import expo router.

import { StatusBar } from "expo-status-bar";
import { styles_home, styles_nav, styles_footer } from "../Styles/styles";
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
import ReadAll from "./component/readUsers";
const image = require("../../assets/ROI_FILES/bground3.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");
import { useState } from "react";
import { useFonts } from "expo-font";
import { theid } from "./component/readUsers";
// Define variable x as global.
// Define constant Staff Directory.

const StaffDirectory = function (props) {
  var [id, setId] = useState("");

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

  // Returns Navigation.
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
          Staff Directory
        </Text>

        <View accessible={true} style={styles_nav.container}>
          <Pressable
            accessible={true}
            accessibilityLabel="Go to Home"
            accessibilityHint="Navigates to the Home screen"
            style={styles_home.button}
            onPress={() => router.push("/screens/home")}
          >
            <Text
              accessible={true}
              accessibilityLabel="Go to Home"
              accessibilityHint="Navigates to the Home screen"
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              Home
            </Text>
          </Pressable>
          <Pressable
            accessible={true}
            accessibilityLabel="Go to Staff Directory"
            accessibilityHint="Navigates to the Staff Directory screen"
            style={styles_home.button}
            onPress={() => router.push("/screens/staffdirectory")}
          >
            <Text
              accessible={true}
              accessibilityLabel="Go to Staff Directory"
              accessibilityHint="Navigates to the Staff Directory screen"
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              Staff Directory
            </Text>
          </Pressable>
          <Pressable
            accessible={true}
            accessibilityLabel="Go to HR"
            accessibilityHint="Navigates to the HR screen"
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for HR.")}
          >
            <Text
              accessible={true}
              accessibilityLabel="Go to HR"
              accessibilityHint="Navigates to the HR screen"
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              HR
            </Text>
          </Pressable>
        </View>
        <View accessible={true} style={styles_nav.container}>
          <Pressable
            accessible={true}
            accessibilityLabel="Go to Documents"
            accessibilityHint="Navigates to the Documents screen"
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for Documents.")}
          >
            <Text
              accessible={true}
              accessibilityLabel="Go to Documents"
              accessibilityHint="Navigates to the Documents screen"
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              Documents
            </Text>
          </Pressable>
          <Pressable
            accessible={true}
            accessibilityLabel="Go to Payroll"
            accessibilityHint="Navigates to the Payroll screen"
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for Payroll.")}
          >
            <Text
              accessible={true}
              accessibilityLabel="Go to Payroll"
              accessibilityHint="Navigates to the Payroll screen"
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              Payroll
            </Text>
          </Pressable>
          <Pressable
            accessible={true}
            accessibilityLabel="Go to Comms"
            accessibilityHint="Navigates to the Comms screen"
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for Comms.")}
          >
            <Text
              accessible={true}
              accessibilityLabel="Go to Comms"
              accessibilityHint="Navigates to the Comms screen"
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              Comms
            </Text>
          </Pressable>
        </View>
        {/* <View>
          <TextInput
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 20,
              textDecorationColor: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder={"UserID"}
            value={id}
            onChangeText={(text) => setId(text)}
          />
        </View> */}
        <View accessible={true} style={styles_home.container}>
          <ReadAll />
        </View>

        <View accessible={true} style={styles_footer.container}>
          <Pressable
            accessible={true}
            accessibilityLabel="Go to add user screen"
            accessibilityHint="Navigates to the previous screen"
            style={styles_home.button}
            onPress={() => router.push("/screens/addUser")}
          >
            <Text
              accessible={true}
              accessibilityLabel="Go to add user screen"
              accessibilityHint="Navigates to the previous screen"
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              Add
            </Text>
          </Pressable>

          <Pressable
            accessible={true}
            accessibilityLabel="Back"
            accessibilityHint="Navigates to the previous screen"
            style={styles_home.button}
            onPress={() => router.push("/screens/home")}
          >
            <Text
              accessible={true}
              accessibilityLabel="Back"
              accessibilityHint="Navigates to the previous screen"
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              Back
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};
//Export Staff Directory and x variable used for id to select record to edit.

export default StaffDirectory;
