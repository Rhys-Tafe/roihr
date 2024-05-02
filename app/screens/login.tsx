//import styles, react, react native elements including use state, and ROI files.
//import expo router.


//import {useFonts} from "expo-font";
import {
    ImageBackground,
    Text,
    TextInput,
    View,
    Image,
    Pressable,
  } from "react-native";
import { styles_login } from "../CSS/styles";
import { router } from "expo-router";
import {useState, useEffect} from "react";
import Home from "./home";
const image = require("../../assets/ROI_FILES/bground3.jpg");
const image_logo = require("../../assets/ROI_FILES/logo_colour.jpg");

//import * as SplashScreen from "expo-splash-screen";

// Define loggedIn constant.

 const loggedIn =() =>{
//   const [fontsLoaded]= useFonts({
//     "Zeykfont": require("../../assets/Zeykfont-Regular.ttf")
//   });
//   useEffect(()=>{
//     async function prepare(){
//       await SplashScreen.preventAutoHideAsync();
//     }
//     prepare();
//   },[])
//   if (!fontsLoaded){
//     return(
//       undefined
//     );
//   }else{
//     SplashScreen.hideAsync();
//   }
  //Define login constant return view and background image.
  //Return screen with inputs for username and password.
    const Login = () =>{  
        return(
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
         <Text >Password:</Text>
         <TextInput
           style={styles_login.buttonLabel}
           placeholder={"Password"}
          //value={text}
           //onChangeText={(text) => setFirstName(text)}
         />
         <Pressable
           style={styles_login.button}
          onPress={() =>handleSignIn()}
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
    // Define constant is authenticated as a use state.
    const [isAuthenticated, setIsAuthenticated] = useState(false);
        
        // Function handleSignIn returns authenticated as true.
        // Returns Home or Login components.
        
        function handleSignIn(){       
        // TODO implement real sign in mechanism
        
        setIsAuthenticated(true)
        
        
        };
    
  
    return(
        isAuthenticated?(<Home/>):(<Login/>)

        );
    }
      
  // Export loggedIn
  
  export default loggedIn;