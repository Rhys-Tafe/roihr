//import styles, react, react native elements including use state, and ROI files.
//import expo router.
import {
  Text,
  View,
  TextInput,
  Pressable,
  Button,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import * as React from "react";
import { router } from "expo-router";
import {
  styles_home,
  styles_footer,
  styles_staffdirectory,
} from "../../CSS/styles";
const image = require("../../../assets/ROI_FILES/bground3.jpg");
import { useState } from "react";
//import { validateForm } from "./validate";
//Define Form as a function.

const MyForm = function (props) {
  const [id, setId] = useState("");
  const [username, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [userDetails, setUserDetails] = useState(false);
  //Define saveUser as a function.
  //Contains fetch statement.

  function validateForm() {
    if (id === "") {
      setUserDetails(false);
      alert("ID cannot be nothing.");
    } else {
      setUserDetails(true);
    }
    if (username === "") {
      setUserDetails(false);
      alert("Name cannot be nothing.");
    } else {
      setUserDetails(true);
    }
    if (phone === "") {
      setUserDetails(false);
      alert("Phone cannot be nothing.");
    } else {
      setUserDetails(true);
    }
    if (department === "") {
      setUserDetails(false);
      alert("Department cannot be nothing.");
    } else {
      setUserDetails(true);
    }
    if (street === "") {
      setUserDetails(false);
      alert("Street cannot be nothing.");
    } else {
      setUserDetails(true);
    }
    if (city === "") {
      setUserDetails(false);
      alert("City cannot be nothing.");
    } else {
      setUserDetails(true);
    }
    if (state === "") {
      setUserDetails(false);
      alert("State cannot be nothing.");
    } else {
      setUserDetails(true);
    }
    if (zip === "") {
      setUserDetails(false);
      alert("Postcode cannot be nothing.");
    } else {
      setUserDetails(true);
    }
    if (country === "") {
      setUserDetails(false);
      alert("Country cannot be nothing.");
    } else {
      setUserDetails(true);
    }
  }
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
    if (userDetails) {
      saveUser();
    }
  }
  //Return form with view and image background.
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "left",
        fontSize: 40,
      }}
    >
      <ImageBackground source={image} style={styles_home.image}>
        <SafeAreaView style={styles_staffdirectory.container}>
          <ImageBackground source={image} style={styles_home.image}>
            <TextInput
              placeholder="Enter ID"
              value={id}
              onChangeText={(text) => setId(text)}
            />
            <TextInput
              placeholder="Enter Name"
              value={username}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              placeholder="Enter Phone"
              value={phone}
              keyboardType={"numeric"}
              onChangeText={(text) => setPhone(text)}
            />
            <TextInput
              placeholder="Enter Department"
              value={department}
              onChangeText={(text) => setDepartment(text)}
            />
            <TextInput
              placeholder="Enter Street"
              value={street}
              onChangeText={(text) => setStreet(text)}
            />
            <TextInput
              placeholder="Enter City"
              value={city}
              onChangeText={(text) => setCity(text)}
            />
            <TextInput
              placeholder="Enter State"
              value={state}
              onChangeText={(text) => setState(text)}
            />
            <TextInput
              placeholder="Enter Postcode"
              value={zip}
              onChangeText={(text) => setZip(text)}
            />
            <TextInput
              placeholder="Country"
              value={country}
              onChangeText={(text) => setCountry(text)}
            />
            {/*Footer contains saveUser function and home navigation. */}
          </ImageBackground>
        </SafeAreaView>
        <View style={styles_footer.container}>
          <Pressable style={styles_home.button} onPress={() => addUser()}>
            <Text style={styles_home.buttonLabel}>AddUser</Text>
          </Pressable>

          <Pressable
            style={styles_home.button}
            onPress={() => router.push("/screens/login")}
          >
            <Text style={styles_home.buttonLabel}>Back</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
//Export default Form.
export default MyForm;
