import {Dimensions} from "react-native";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
export const styles = {
  key:{
    backgroundColor:'#000',
    height: screenHeight,
  },
  flatList:{
    text:{
      textAlign: 'right',
      fontSize: 20,
      color:'#f7f5eb',
      borderColor: '#3E3331',
    },
    author:{
        textAlign:'right',
      },
    textbox:{
      boxSizing: 'content-box',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 7,
      backgroundColor: '#545248',
      paddingRight: 10,
      alignSelf:'flex-end',
      marginBottom:5,
      paddingBottom: 2,
      maxWidth: screenWidth/2,
    },
  },
  input: { 
    height: 40, 
    borderColor: 'gray',
    borderWidth: 2 ,
    borderRadius: 10,
    backgroundColor:'#fff',
  },
  container:{
    
  },
  
  button:{
    text:{
      textAlign: 'center',
      fontSize: 0,
      color:'#fff',
    },
    
    backgroundColor:'#000',
    borderColor: 'gray',
    borderWidth: 4 ,
    paddingLeft: 10,
    borderRadius: 10,
    //padding: 2,
    marginLeft:2,
    height: 40,
    width: 40,
    
  },
  
  areaView:{
    backgroundColor:'#000',
    alignContent:'stretch',
    paddingTop:40,
    height: screenHeight-40,
  },
  block:{
    backgroundColor:'#000',
    justifyItems: "flex-end",
  },
};