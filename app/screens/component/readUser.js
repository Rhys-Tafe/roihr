/**
 * Defines the saveUser constant as a function and uses fetch syntax to fetch API data from Tafe website. Includes validation.
 
 
 * @param Defines theid as a global variable.
 * @returns User screen with loading or user details form and defines form constant.
 */
//import styles, react, react native elements including use state, and ROI files.
//import expo router.
//Import variable x for id value.
import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { styles_home, styles_footer, styles_login } from "../../Styles/styles";
import React from "react";
//import { x } from "../staffdirectory";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import { theid } from "./readUsers";
var newid = "";

//Define constant User.
const User = () => {
  // Define constant for User details.
  const [data, setData] = useState(null);
  const [loading, isLoading] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

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

  let [errors, setErrors] = useState("");

  if (theid === "") {
    errors = "Id is required";
    alert(errors);
    router.push("/screens/staffdirectory");
    console.log(errors);
  } else if (theid === " ") {
    errors = "Id cannot be nothing.";
    alert(errors);
    router.push("/screens/staffdirectory");
    console.log(errors);
  } else if (theid === "0") {
    errors = "Id cannot be 0.";
    alert(errors);
    router.push("/screens/staffdirectory");
    console.log(errors);
  } else {
    newid = String(theid);
  }

  let url = "https://api.inverellit.net.au/users/read?id=" + newid;

  fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((e) => {
      console.warn(e);
      return e;
    });
  // Define constant for saveUser details.
  const saveUser = function () {
    fetch("https://api.inverellit.net.au/users/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
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
        alert("Changes Saved");
        console.log(responsejson);
        console.log(
          id,
          name,
          phone,
          department,
          street,
          city,
          state,
          zip,
          country
        );
        // CHANGE THIS LINE Home should be Department for you
        router.push("/screens/staffdirectory");
      });
  };

  useEffect(() => {
    isLoading(false);
  }, []);

  // Return view and screens with selection shorthand statement.
  // Will return the selected users details or a loading message will fetching details from server.
  return (
    <View accessible={true}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          accessible={true}
          style={{
            fontFamily: "Trebuchet-MS",
            fontSize: 16,
            color: "white",
            alignContent: "flex-start",
            textAlign: "center",
            padding: 20,
          }}
        >
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            onChangeText={(id) => setId(id)}
          >
            {data && data.map((data) => <Text key={data.id}>{data.id}</Text>)}
          </TextInput>
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            onChangeText={(newName) => setName(newName)}
          >
            {data && data.map((data) => <Text key={data.id}>{data.name}</Text>)}
          </TextInput>
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            onChangeText={(phone) => setPhone(phone)}
          >
            {data &&
              data.map((data) => <Text key={data.id}>{data.phone}</Text>)}
          </TextInput>
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            onChangeText={(department) => setDepartment(department)}
          >
            {data &&
              data.map((data) => <Text key={data.id}>{data.department}</Text>)}
          </TextInput>
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            onChangeText={(street) => setStreet(street)}
          >
            {data &&
              data.map((data) => <Text key={data.id}>{data.street}</Text>)}
          </TextInput>
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            onChangeText={(city) => setCity(city)}
          >
            {data && data.map((data) => <Text key={data.id}>{data.city}</Text>)}
          </TextInput>
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            onChangeText={(state) => setState(state)}
          >
            {data &&
              data.map((data) => <Text key={data.id}>{data.state}</Text>)}
          </TextInput>
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            onChangeText={(zip) => setZip(zip)}
          >
            {data && data.map((data) => <Text key={data.id}>{data.zip}</Text>)}
          </TextInput>
          <TextInput
            type="text"
            //aria-label={labelText}
            aria-required="true"
            style={{
              fontFamily: "Trebuchet-MS",
              fontSize: 16,
              color: "white",
              alignContent: "flex-start",
              textAlign: "center",
            }}
            onChangeText={(country) => setCountry(country)}
          >
            {data &&
              data.map((data) => <Text key={data.id}>{data.country}</Text>)}
          </TextInput>

          {/* <Text>id: {data && data.map((data) => (
                  <Text key={data.id}>{data.id}</Text>
                ))} </Text>
              <Text>Address: {data && data.map((data) => (
                  <Text key={data.id}>{data.street + ", " + data.city + ", " + data.state + ", " + data.country + ", " + data.zip}</Text>
                ))} </Text>
              <Text >City: {data && data.map((data) => (
                  <Text key={data.id}>{data.city }</Text>
                ))} </Text> */}

          {/*Footer contains navigation and saveUser calls saveUser function to save details to server. */}
          <View accessible={true} style={styles_footer.container}>
            <Pressable
              accessible={true}
              accessibilityLabel="Finish"
              accessibilityHint="Navigates to the Staff Directory screen"
              style={styles_home.button}
              onPress={() => saveUser()}
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
                Finish
              </Text>
            </Pressable>
            <Pressable
              accessible={true}
              accessibilityLabel="Go back"
              accessibilityHint="Navigates to the previous screen"
              style={styles_home.button}
              onPress={() => router.push("/screens/staffdirectory")}
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
        </View>
      )}
    </View>
  );
};
// loading?(<>
//       {data && data.map((item) => {
//           return <Text key={item.id}>{item.id}{item.name}</Text>
//         })}
//         </>):(<Text>Loading...</Text>))
// };
//Export Default User.

export default User;
