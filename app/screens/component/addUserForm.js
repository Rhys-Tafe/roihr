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
} from "../../CSS/styles";
const image = require("../../../assets/ROI_FILES/bground3.jpg");
import { useState } from "react";

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
  const [userDetails, setUserDetails] = useState(false);

  function validateForm() {
    if (id === "") {
      setUserDetails(false);
      alert("ID cannot be nothing.");
    } else if (id === " ") {
      setUserDetails(false);
      alert("ID cannot be nothing.");
    } else if (id === "0") {
      setUserDetails(false);
      alert("ID cannot be 0.");
    } else {
      setUserDetails(true);
    }

    if (username === "") {
      setUserDetails(false);
      alert("Name cannot be nothing.");
    } else if (id === " ") {
      setUserDetails(false);
      alert("Name cannot be nothing.");
    } else if (id === "0") {
      setUserDetails(false);
      alert("Name cannot be 0.");
    } else {
      setUserDetails(true);
    }

    if (phone === "") {
      setUserDetails(false);
      alert("Phone cannot be nothing.");
    } else if (id === " ") {
      setUserDetails(false);
      alert("Phone cannot be nothing.");
    } else if (id === "0") {
      setUserDetails(false);
      alert("Phone cannot be 0.");
    } else {
      setUserDetails(true);
    }

    if (department === "") {
      setUserDetails(false);
      alert("Department cannot be nothing.");
    } else if (id === " ") {
      setUserDetails(false);
      alert("Department cannot be nothing.");
    } else if (id === "0") {
      setUserDetails(false);
      alert("Department cannot be 0.");
    } else {
      setUserDetails(true);
    }

    if (street === "") {
      setUserDetails(false);
      alert("Street cannot be nothing.");
    } else if (id === " ") {
      setUserDetails(false);
      alert("Street cannot be nothing.");
    } else if (id === "0") {
      setUserDetails(false);
      alert("Street cannot be 0.");
    } else {
      setUserDetails(true);
    }

    if (city === "") {
      setUserDetails(false);
      alert("City cannot be nothing.");
    } else if (id === " ") {
      setUserDetails(false);
      alert("City cannot be nothing.");
    } else if (id === "0") {
      setUserDetails(false);
      alert("City cannot be 0.");
    } else {
      setUserDetails(true);
    }

    if (state === "") {
      setUserDetails(false);
      alert("State cannot be nothing.");
    } else if (id === " ") {
      setUserDetails(false);
      alert("State cannot be nothing.");
    } else if (id === "0") {
      setUserDetails(false);
      alert("State cannot be 0.");
    } else {
      setUserDetails(true);
    }

    if (zip === "") {
      setUserDetails(false);
      alert("Postcode cannot be nothing.");
    } else if (id === " ") {
      setUserDetails(false);
      alert("Postcode cannot be nothing.");
    } else if (id === "0") {
      setUserDetails(false);
      alert("Postcode cannot be 0.");
    } else {
      setUserDetails(true);
    }

    if (country === "") {
      setUserDetails(false);
      alert("Country cannot be nothing.");
    } else if (id === " ") {
      setUserDetails(false);
      alert("Country cannot be nothing.");
    } else if (id === "0") {
      setUserDetails(false);
      alert("Country cannot be 0.");
    } else {
      setUserDetails(true);
    }
  }
  //Validate user details.
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
    if (userDetails) {
      saveUser();
    }
  }
  //Return view image background and a safe area view.
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
          <View
            style={{
              justifyContent: "center",
              alignItems: "left",
              fontSize: 40,
            }}
          >
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
            </ImageBackground>
          </View>
        </SafeAreaView>
        {/*Footer contains saveUser function and home navigation. */}
        <View style={styles_footer.container}>
          <Pressable style={styles_home.button} onPress={() => addUser()}>
            <Text style={styles_home.buttonLabel}>AddUser</Text>
          </Pressable>

          <Pressable
            style={styles_home.button}
            onPress={() => router.push("/screens/home")}
          >
            <Text style={styles_home.buttonLabel}>Back</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
// Export the MyAddForm component.
export default MyAddForm;
