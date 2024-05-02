import { StyleSheet } from "react-native";

const styles_login = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignContent: "flex-start",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontStyle: "italic",
    //fontFamily:"Trebuchet",
  },
  image_logo: {
    maxHeight: "100%",
    maxWidth: "100%",
    resizeMode: "contain",
  },
  button: {
    borderRadius: 10,
    width: 100,
    height: 45,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "grey",
    margin: 5,
  },

  buttonLabel: {
    color: "white",
    fontSize: 20,
  },
});

const styles_home = StyleSheet.create({
  image_logo: {
    justifyContent: "flex-start",
    maxHeight: "100%",
    maxWidth: "100%",
    resizeMode: "contain",
  },
  text: {
    alignContent: "flex-start",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    //alignContent: "center",
  },
  image: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 10,
    width: 130,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    margin: 5,
  },
  buttonLabel: {
    color: "white",
    fontSize: 20,
    //fontFamily:"Trebuchet",
  },
});




const styles_nav = StyleSheet.create({
  container: {
    
    flexDirection:"row",
    
  },
});
const styles_footer = StyleSheet.create({
  container: {
    
    flexDirection:"row",
    
  },
});
const styles_footer_home = StyleSheet.create({
  container: {
    marginVertical:300,
    flexDirection:"row",
    
  },
});

const styles_staffdirectory = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  itemContainer:{
    borderWidth: 0,
    width: '100%',
    padding: 5,
  },
  itemImage: {
    //draft: "yes",
    height: 200,
    
  },
  itemTitle: {
    textAlign: "center",
    padding: 20,
    fontSize: 17,
    color: "white",
    backgroundColor: "white",
  },
  itemDescription: {
    fontSize: 17,
    padding: 10,
    color: "white",
    backgroundColor: "white",
  },
  itemBtn: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  
  mainItem: {
    width:200,
    height:'auto', 
    margin:10,
    color:'white',
     
    
    borderColor: 'white',
}});

// @FontFace:{
//  font-family: ultra;
//   src:URL("../../assets/Zeykfont-Regular.ttf")
// }
// .ultra{
//   font-family: Zeykfont-Regular.ttf;
// }
export { styles_login, styles_home, styles_nav, styles_footer_home, styles_footer, styles_staffdirectory };
