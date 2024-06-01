//PLEASE IGNORE....
// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import {Text} from 'react-native';

// function Home() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://api.inverellit.net.au/users/read")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//  }, []);

//   return (
//     <>
//       {data &&
//         data.map((data) => {
//           return <Text key={data.id}>{data.name}</Text>;
//         })}
//     </>
//   );
// };
// export default Home;

// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, TouchableOpacity } from "react-native";
// //import User from "./User";

// const Users = (props) => {
//   const [isLoading, setLoading] = useState(false);

//   const [data, setData] = useState(null);

//   getUsers = () => {
//     fetch("https://api.inverellit.net.au/users/read")
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error("THE ERROR IS " + error))
//       .finally(() => setLoading(false));
//   };

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       const result = await getUsers();
//       setData(result);
//       getUsers();
//     };
//     loadData();
//   }, []);

//   return (
//     <View style={{ padding: 20 }}>
//       {isLoading ? (
//         <Text>Loading...</Text>
//       ) : setLoading ? (
//         <>
//           {data &&
//             data.map((data) => {
//               return (
//                 <Text key={data.id}>
//                   {data.id}
//                   {data.name}
//                 </Text>
//               );
//             })}
//         </>
//       ) : (
//         <Text>Loading...</Text>
//       )}

//       <TouchableOpacity>
//         <Text>ADD USER </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// //export default Component;
// export default Users;
