
//import styles, react, react native elements including use state, and ROI files.
//import expo router.
//Import variable x for id value.
import { useState, useEffect } from "react";
import {View, Text, TextInput, Pressable} from "react-native";
import { styles_home,styles_footer, styles_login } from "../../CSS/styles";
import React from 'react';
import {x} from "../staffdirectory";
import {router} from  'expo-router';

var newid = "";
//Define constant User.
const User=()=>{
// Define constant for User details.
const [data,setData]= useState(null);
const [loading, isLoading]= useState(false);
const [id,setId] = useState("");
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [department, setDepartment] = useState("");
const [street, setStreet] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [zip, setZip] = useState("");
const [country, setCountry] = useState("");
newid = String(x);
      let url='https://api.inverellit.net.au/users/read?id='+ newid;
      
        fetch(url)
        .then ((res) => res.json())        
        .then((data) => setData(data))
        .catch(e => {
          console.error(e)
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
    
  },[]);

// Return view and screens with selection shorthand statement. 
// Will return the selected users details or a loading message will fetching details from server.
    return (
      
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <View>
              <TextInput
                style={styles_login.buttonLabel}
                onChangeText={(id) => setId(id)}
              >
                {data && data.map((data) => (
                  <Text key={data.id}>{data.id}</Text>
                ))}
              </TextInput>
              <TextInput
                style={styles_login.buttonLabel}
                onChangeText={(newName) => setName(newName)}
              >
                {data && data.map((data) => (
                  <Text key={data.id}>{data.name}</Text>
                ))}
              </TextInput>
              <TextInput
                style={styles_login.buttonLabel}
                onChangeText={(phone) => setPhone(phone)}
              >
                {data && data.map((data) => (
                  <Text key={data.id}>{data.phone}</Text>
                ))}
              </TextInput>
              <TextInput
                style={styles_login.buttonLabel}
                onChangeText={(department) => setDepartment(department)}
              >
                {data && data.map((data) => (
                  <Text key={data.id}>{data.department}</Text>
                ))}
              </TextInput>
              <TextInput
               style={styles_login.buttonLabel}
                onChangeText={(street) => setStreet(street)}
              >
                {data && data.map((data) => (
                  <Text key={data.id}>{data.street}</Text>
                ))}
              </TextInput>
              <TextInput
                style={styles_login.buttonLabel}
                onChangeText={(city) => setCity(city)}
              >
                {data && data.map((data) => (
                  <Text key={data.id}>{data.city}</Text>
                ))}
              </TextInput>
              <TextInput
                style={styles_login.buttonLabel}
                onChangeText={(state) => setState(state)}
              >
                {data && data.map((data) => (
                  <Text key={data.id}>{data.state}</Text>
                ))}
              </TextInput>
              <TextInput
                style={styles_login.buttonLabel}
                onChangeText={(zip) => setZip(zip)}
              >
                {data && data.map((data) => (
                  <Text key={data.id}>{data.zip}</Text>
                ))}
              </TextInput>
              <TextInput
                style={styles_login.buttonLabel}
                onChangeText={(country) => setCountry(country)}
              >
                {data && data.map((data) => (
                  <Text key={data.id}>{data.country}</Text>
                ))}
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
    <View style={styles_footer.container}>
          <Pressable style={styles_home.button} onPress={() => saveUser()}>            
            <Text style={styles_home.buttonLabel}>Finish</Text>
          </Pressable>
          <Pressable style={styles_home.button} onPress={() => router.push("/screens/home")}>
            <Text style={styles_home.buttonLabel}>Back</Text>
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
 