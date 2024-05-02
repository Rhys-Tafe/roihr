//import styles, react, react native elements including use state, and ROI files.
//import expo router.

import {
  ImageBackground,
  Text,
  View,
  Image,
  } from "react-native";
import { styles_login } from "./CSS/styles";
import { StatusBar } from "expo-status-bar";
import {useState} from "react";
import {router} from "expo-router";

import Login from "./screens/login";
const image1 = require("../assets/ROI_FILES/bground2.jpg");
const image_logo = require("../assets/ROI_FILES/logo_colour.jpg");




  



  
// Define constants App.
const App = () => {
  
  // Define constant fetching data as a use state.
  const Loading = () => {
   
  return (
     <View style={styles_login.container} >
      <ImageBackground source={image1} style={styles_login.image}>
         <Text style={styles_login.text}>Loading...</Text>
         <Image source={image_logo} style={styles_login.image_logo}></Image>
      </ImageBackground>
       <StatusBar style="auto" />
     </View>
  );
};
  const [fetchingData, setFetchingDataState] = useState(true);
  setTimeout(() => {
    setFetchingDataState(false);
  }, 1000);

// if returns Loading or Login.

  if (fetchingData){
    return(<Loading />)
  }else{
    return(<Login/>)
  }
  
  
  
    
  
      
  
  
    
  
}
  
  
  
  
  
export default  App;