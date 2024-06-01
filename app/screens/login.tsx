/**  
* @file login.tsx.    

* @description Will load imports fonts and sets authenticated as true. Returns login screen or home screens as constant. 

* @version 1.1.0

* @author Rhys Lahy

*/

/**
 * The loggedIn constant will return the Home or Login screens.
 
 
 * @param
 * @returns loggedIn constant and depending on the true or false value for boolean Home or Login screen.
 */
//import styles, react, react native elements including use state, and ROI files.
//import expo router.
//import styles, react, react native elements including use state, and ROI files.
//import expo router.

//import { useFonts } from "expo-font";
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";
import { styles_login } from "../Styles/styles";
import { router } from "expo-router";
import { useState } from "react";
import Home from "./home";
const image = require("../../assets/ROI_FILES/bground3.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");
import { useFonts } from "expo-font";
//import * as SplashScreen from "expo-splash-screen";

// Define loggedIn constant.

const loggedIn = () => {
  //Define login constant return view and background image.
  //Return screen with inputs for username and password.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function handleSignIn returns authenticated as true.
  // Returns Home or Login components.

  function handleSignIn() {
    // TODO implement real sign in mechanism

    setIsAuthenticated(true);
  }
  const Login = () => {
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
      <View accessible={true} style={styles_login.container}>
        <ImageBackground source={image} style={styles_login.image}>
          <Text
            style={{
              fontFamily: "Trebuchet-Bold",
              fontSize: 30,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
          >
            Welcome! to
          </Text>
          <Image source={image_logo} style={styles_login.image_logo}></Image>
          <Text
            style={{
              fontFamily: "Trebuchet-Bold",
              fontSize: 30,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
          >
            Login
          </Text>
          <Text
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 20,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
          >
            User Name:
          </Text>
          <TextInput
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder={"User Name"}
            //value={text}
            //onChangeText={(text) => setFirstName(text)}
          />
          <Text
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 20,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
          >
            Password:
          </Text>
          <TextInput
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder={"Password"}
            //value={text}
            //onChangeText={(text) => setFirstName(text)}
          />
          <Pressable
            accessible={true}
            accessibilityLabel="Go to Home"
            accessibilityHint="Navigates to Home screen"
            style={styles_login.button}
            onPress={() => handleSignIn()}
          >
            <Text
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              Login In
            </Text>
          </Pressable>

          <Pressable
            accessible={true}
            accessibilityLabel="Go to SignUp"
            accessibilityHint="Navigates to SignUp screen"
            style={styles_login.button}
            onPress={() => router.push("/screens/signup")}
          >
            <Text
              style={{
                fontFamily: "Trebuchet-MS",
                fontSize: 20,
                color: "white",
                alignContent: "flex-start",
                textAlign: "center",
              }}
            >
              Sign Up
            </Text>
          </Pressable>
        </ImageBackground>
      </View>
    );
  };
  // Define constant is authenticated as a use state.

  return isAuthenticated ? <Home /> : <Login />;
};

// Export loggedIn

export default loggedIn;
