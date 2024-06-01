/**
 * Defines the ReadAll class component and constructor and uses fetch syntax to fetch API data from Tafe website. 
 
 
 * @param Defines theid as a global variable.
 * @returns ReadAll class component and constructor and defines theid global constant.
 */
//import styles, react, react native elements, and ROI files.

import React from "react";
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { styles_staffdirectory, styles_home } from "../../Styles/styles";
import { useState } from "react";
import { router } from "expo-router";
const image = require("../../../assets/ROI_FILES/bground3.jpg");

//Define Class Component Read All.
var theid = "";
export default class ReadAll extends React.Component {
  //Constructor statement required for Component Class.

  constructor(props) {
    super(props);
    this.state = {
      productData: "",
    };
  }

  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    try {
      let url = await "https://api.inverellit.net.au/users/read";

      let newUrl = await url;
      let response = await fetch(newUrl, { method: "GET" });
      let responseJson = await response.json();
      this.setState({ productData: responseJson });
    } catch (err) {
      console.warn(err);
    }
  }

  keyExtractor = (item, index) => {
    return index.toString();
  };

  // Return view and screens with selection shorthand statement.
  // Will return the selected users details or a loading message will fetching details from server.
  renderItem = ({ item }) => {
    function ShowId() {
      try {
        alert(item.id);
        theid = item.id;
        router.push("/screens/editdirectory");
      } catch (error) {
        console.log(error);
        throw error;
      }
    }

    return (
      <View
        accessible={true}
        style={{
          fontFamily: "Trebuchet-MS",
          fontSize: 20,
          color: "white",
          alignContent: "flex-start",
          textAlign: "center",
        }}
      >
        <ImageBackground source={image} style={styles_home.image}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Tap me!"
            accessibilityHint="Navigates to Edit Directory Screen"
            onPress={ShowId}
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
              {item.id + "\n"}
              {item["name"] + "\n"}
              {/* {item.phone + "\n"}
            {item.department + "\n"}
            {item.street + "\n"}
            {item.city + "\n"}
            {item.state + "\n"}
            {item.country + "\n"}
            {item.zip + "\n"}*/}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles_staffdirectory.container}>
        <ImageBackground source={image} style={styles_home.image}>
          <FlatList
            extraData={this.state}
            data={this.state.productData}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export { theid };
