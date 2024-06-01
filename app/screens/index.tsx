/**  
* @file index.tsx.    

* @description The program is packaged for android and will be emulated on expo using the pixel 3 phone. The program contains several screens and a connection to the roihr API.
It will read the staff directory and contains an add and edit functionality for the API. This is the initial iteration and should be considered as proof of concept only.
*Features API connection function that will return the Staff Directory.
*Features ID input bound to the touchable opacity controls and Edit functionality once ALL fields have been added and input validated. Returns updated staff directory for the add user functionality.
*Returns a console.log for the edit function.  
*No delete function is currently available.
*Read.me file caused issues with push to git hub so this has not been used in this current iteration. 
*Packaged using .apk file process and should be downloaded and then installed on local device.

* @version 1.1.0

* @author Rhys Lahy

*/

/**
 * The App constant will return the correct screens given the status of logged in.
 * It will first check to see logged in is set to true or false and return the correct screen.
 
 * @param
 * @returns Loading or Login screen with login functionality set to true.
 */
//import styles, react, react native elements including use state, and ROI files.
//import expo router.
//import styles, react, react native elements including use state, and ROI files.
//import expo router.

import React from "react";
import Loading from "../screens/loading";
import Login from "../screens/login";

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
};

//Export App
export default App;
