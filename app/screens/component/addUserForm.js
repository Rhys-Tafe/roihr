/**
 * Defines the MyAddForm constant as a function. Includes validation.
 
 
 * @param 
 * @returns MyAddForm component with save and add user functions with user details form and defines form constant.
 */
//import styles, react, react native elements including use state, and ROI files.
//import expo router.
import {
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import * as React from "react";
import { router } from "expo-router";
import {
  styles_home,
  styles_footer,
  styles_staffdirectory,
} from "../../Styles/styles";
const image = require("../../../assets/ROI_FILES/bground3.jpg");
import { useState } from "react";
import { useFonts } from "expo-font";

//Define MyAddForm as a function.
const MyAddForm = function (props) {
  const [id, setId] = useState("");
  const [username, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});
  const [loaded] = useFonts({
    "Trebuchet-Bold": require("../../../assets/fonts/Trebuchet MS Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const [loaded1] = useFonts({
    "Trebuchet-MS": require("../../../assets/fonts/Trebuchet MS.ttf"),
  });
  if (!loaded1) {
    return null;
  }
  let userDetails = false;

  //Validate user details.
  const validateForm = () => {
    let errors = {};

    // if (!id) {
    //   errors.id = "Id is required";
    //   setErrors(errors);
    //   userDetails = false;
    //   return Object.keys(errors).length === 0;
    // } else if (id === " ") {
    //   errors.id = "Id cannot be nothing.";
    //   setErrors(errors);
    //   userDetails = false;
    //   return Object.keys(errors).length === 0;
    // } else if (id === "0") {
    //   errors.id = "Id cannot be 0.";
    //   setErrors(errors);
    //   userDetails = false;
    //   return Object.keys(errors).length === 0;
    // } else {
    //   userDetails = true;
    // }

    if (!username) {
      errors.username = "Username is required";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (username === " ") {
      errors.username = "Username cannot be nothing.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (username === "0") {
      errors.username = "Username cannot be 0.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else {
      userDetails = true;
    }

    if (!phone) {
      errors.phone = "Phone is required";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (phone === " ") {
      errors.phone = "Phone cannot be nothing.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (phone === "0") {
      errors.phone = "Phone cannot be 0.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else {
      userDetails = true;
    }

    if (!department) {
      errors.department = "Department is required";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (department === " ") {
      errors.department = "Department cannot be nothing.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (department === "0") {
      errors.department = "Department cannot be 0.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else {
      userDetails = true;
    }

    if (!street) {
      errors.street = "Street is required";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (street === " ") {
      errors.street = "Street cannot be nothing.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (street === "0") {
      errors.street = "Street cannot be 0.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else {
      userDetails = true;
    }

    if (!city) {
      errors.city = "City is required";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (city === " ") {
      errors.city = "City cannot be nothing.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (city === "0") {
      errors.city = "City cannot be 0.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else {
      userDetails = true;
    }

    if (!state) {
      errors.state = "State is required";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (state === " ") {
      errors.state = "State cannot be nothing.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (state === "0") {
      errors.state = "State cannot be 0.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else {
      userDetails = true;
    }

    if (!zip) {
      errors.zip = "Zip is required";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (zip === " ") {
      errors.zip = "Zip cannot be nothing.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (zip === "0") {
      errors.zip = "Zip cannot be 0.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else {
      userDetails = true;
    }

    if (!country) {
      errors.country = "Country is required";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (country === " ") {
      errors.country = "Country cannot be nothing.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else if (country === "0") {
      errors.country = "Country cannot be 0.";
      setErrors(errors);
      userDetails = false;
      return Object.keys(errors).length === 0;
    } else {
      userDetails = true;
    }
  };

  //Define saveUser as a function.
  //Contains fetch statement.
  const saveUser = function () {
    fetch("https://api.inverellit.net.au/users/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: username,
        phone: phone,
        department: department,
        street: street,
        city: city,
        state: state,
        zip: zip,
        country: country,
      }),
    })
      .then((response) => response.json())
      .then((responsejson) => {
        alert("Record added");
        // CHANGE THIS LINE
        router.push("/screens/staffdirectory");
      });
  };

  function addUser() {
    validateForm();
    if (userDetails === true) {
      saveUser();
    }
  }
  //Return view image background and a safe area view.
  return (
    <View
      accessible={true}
      style={{
        //justifyContent: "center",
        alignItems: "left",
        fontSize: 40,
      }}
    >
      <ImageBackground source={image} style={styles_home.image}>
        <SafeAreaView accessible={true} style={styles_home.container}>
          {/* <TextInput
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 13,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder="Enter Id"
            value={id}
            onChangeText={(text) => setId(text)}
          />
          {errors.id ? <Text>{errors.id}</Text> : null} */}
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 13,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder="Enter Name"
            value={username}
            onChangeText={(text) => setName(text)}
          />
          {errors.username ? <Text>{errors.username}</Text> : null}
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 13,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder="Enter Phone"
            value={phone}
            keyboardType={"numeric"}
            onChangeText={(text) => setPhone(text)}
          />
          {errors.phone ? <Text>{errors.phone}</Text> : null}
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 13,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder="Enter Depart."
            value={department}
            onChangeText={(text) => setDepartment(text)}
          />
          {errors.department ? <Text>{errors.department}</Text> : null}
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 13,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder="Enter Street"
            value={street}
            onChangeText={(text) => setStreet(text)}
          />
          {errors.street ? <Text>{errors.street}</Text> : null}
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 13,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder="Enter City"
            value={city}
            onChangeText={(text) => setCity(text)}
          />
          {errors.city ? <Text>{errors.city}</Text> : null}
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 13,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder="Enter State"
            value={state}
            onChangeText={(text) => setState(text)}
          />
          {errors.state ? <Text>{errors.state}</Text> : null}
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 13,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder="Enter Postcode"
            value={zip}
            onChangeText={(text) => setZip(text)}
          />
          {errors.zip ? <Text>{errors.zip}</Text> : null}
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 13,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            placeholder="Enter Country"
            value={country}
            onChangeText={(text) => setCountry(text)}
          />
          {errors.country ? <Text>{errors.country}</Text> : null}
          {/*Footer contains saveUser function and home navigation. */}
        </SafeAreaView>

        <View accessible={true} style={styles_footer.container}>
          <Pressable
            accessible={true}
            accessibilityLabel="Add User"
            accessibilityHint="Navigates to the Staff Directory screen"
            style={styles_home.button}
            onPress={() => addUser()}
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
              AddUser
            </Text>
          </Pressable>

          <Pressable
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityHint="Navigates to the previous screen"
            style={styles_home.button}
            onPress={() => router.push("/screens/login")}
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
              Back
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
// Export the MyAddForm component.
export default MyAddForm;
