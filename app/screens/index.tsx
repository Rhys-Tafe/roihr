//import styles, react, react native elements including use state, and ROI files.
//import expo router.


import { StatusBar } from "expo-status-bar";
import { styles_login } from "../CSS/styles";
import React from "react";
import { router } from "expo-router";
import { ImageBackground, Text,TextInput, View, Image, Pressable } from "react-native";

const image = require("../../assets/ROI_FILES/bground3.jpg");
const image1 = require("../../assets/ROI_FILES/bground2.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");


// Define constants App.
const App = () => {
// Define constant fetching data as a use state.
  const [fetchingData, setFetchingDataState] = React.useState(true);
  setTimeout(() => {
    setFetchingDataState(false);
  }, 1000);

  // if returns Loading or Login.
  if (fetchingData) {
    return <Loading />;
  } else {
    return <Login />;
  }
}
//Define Loading.
const Loading = () => {
  return (
    <View style={styles_login.container}>
      <ImageBackground source={image1} style={styles_login.image}>
        <Text style={styles_login.text}>Loading...</Text>
        <Image source={image_logo} style={styles_login.image_logo}></Image>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};
//Define Login.
const Login = () => {
  return (
    <View style={styles_login.container}>
      <ImageBackground source={image} style={styles_login.image}>
        <Text style={styles_login.text}>Welcome! to</Text>
        <Image source={image_logo} style={styles_login.image_logo}></Image>
        <Text style={styles_login.text}>Login</Text>
        <Text>User Name:</Text>
        <TextInput
              style={styles_login.buttonLabel}
              placeholder={"User Name"}
              //value={text}
              //onChangeText={(text) => setFirstName(text)}
            />
        <Text>Password:</Text>
        <TextInput
              style={styles_login.buttonLabel}
              placeholder={"Password"}
              //value={text}
              //onChangeText={(text) => setFirstName(text)}
            />
        <Pressable
          style={styles_login.button}
          onPress={() => router.push("/screens/home")}
        >
          <Text style={styles_login.buttonLabel}>Login In</Text>
        </Pressable>

        
        <Pressable
          style={styles_login.button}
          onPress={() => router.push("/screens/signup")}
        >
          <Text style={styles_login.buttonLabel}>Sign Up</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
//Export App
export default App;