import { View, Text,StyleSheet,Image,ToastAndroid } from 'react-native'
import React from 'react'
import Monkey from '../../../assets/images/monkey.png'
import auth,{firebase} from '@react-native-firebase/auth'
import Btn from '../../components/buttons/Loginbtn'
import {useNavigation} from '@react-navigation/native'

const Logout = () => {
  const navigationtool=useNavigation();
    const handleLogout=()=>{
        try{
          auth().signOut().then(()=>{
            ToastAndroid.show("Logged out",1000)
            navigationtool.navigate("LoginScreen")
            console.log("Logged out Successfully !!");
      
          })
        }catch(e){
          console.log(e);
        }
      }
  return (
    <View style={styles.root}>

  
    
      <View style={{width:'50%',marginLeft:'auto',marginRight:'auto',marginTop:'50%'}}>
      <Btn btntext="Logout" onpress={handleLogout} style={{width:50}} type="primary"/>
      </View>
      
    </View>
  )
}
const styles=StyleSheet.create({
    root:{

    },
    title:{

    },
    welcometxt:{
      fontSize:20,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:80,
      marginBottom:80,
      color:'red'
    },
    monkeyimg:{
      height:'30%',
      width:'40%',
      alignItems:'center',
      justifyContent:'center',
      marginLeft:'auto',
      marginRight:'auto',
      marginBottom:80
    }
})

export default Logout