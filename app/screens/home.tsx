/**  
* @file home.tsx.    

* @description Will load imports fonts. Returns Home screen constant. 

* @version 1.1.0

* @author Rhys Lahy

*/

/**
 * The Home constant will return the Home screen.
 
 
 * @param
 * @returns Home screen with navigation functionality.
 */
//import styles, react, react native elements including use state, and ROI files.
//import expo router.
import { StyleSheet } from "react-native";
//import styles from "../Styles/styles.css";
import { StatusBar } from "expo-status-bar";
import {
  styles_home,
  styles_nav,
  styles_footer_home,
  styles_staffdirectory,
} from "../Styles/styles.js";
import { router } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
const image = require("../../assets/ROI_FILES/bground3.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");
import { useFonts } from "expo-font";
// Define constant Home.
const Home = () => {
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
    <View style={styles_home.container}>
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
          Home
        </Text>

        <View accessible={true} style={styles_nav.container}>
          <Pressable
            accessible={true}
            accessibilityLabel="Go to Home"
            accessibilityHint="Navigates to the Home screen"
            style={styles_home.button}
            onPress={() => alert("You Pressed a Button for Home.")}
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
        <StatusBar style="auto" />
        <View style={styles_footer_home.container}>
          <Pressable
            accessible={true}
            accessibilityLabel="Logout"
            accessibilityHint="Navigates to the previous screen"
            style={styles_home.button}
            // IF THIS ROUTER.PUSH DOESN'T WORK THEN CHANGE TO ./ THERE WAS A FAULT ON MY END AND IT WASN'T LOADING THE STYLES IF IT WAS ./ THIS SEEMS TO FIX IT
            onPress={() => router.push("/")}
          >
            <Text
              accessible={true}
              accessibilityLabel="Logout"
              accessibilityHint="Navigates to the previous screen"
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              LogOut
            </Text>
          </Pressable>
          <Pressable
            accessible={true}
            accessibilityLabel="Settings"
            accessibilityHint="Navigates to the Settings screen"
            style={styles_home.button}
            // IF THIS ROUTER.PUSH DOESN'T WORK THEN CHANGE TO ./ THERE WAS A FAULT ON MY END AND IT WASN'T LOADING THE STYLES IF IT WAS ./ THIS SEEMS TO FIX IT
            onPress={() => router.push("screens/settings")}
          >
            <Text
              accessible={true}
              accessibilityLabel="Settings"
              accessibilityHint="Navigates to the Settings screen"
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              Settings
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

//Export Home.
export default Home;
