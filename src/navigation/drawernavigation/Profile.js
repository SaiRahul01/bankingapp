import { View, Text,StyleSheet,Image,ToastAndroid, Pressable } from 'react-native'
import React from 'react'
import Monkey from '../../../assets/images/monkey.png'
import auth,{firebase} from '@react-native-firebase/auth'
import Btn from '../../components/buttons/Loginbtn'
import {useNavigation} from '@react-navigation/native'
import MI from 'react-native-vector-icons/MaterialIcons'
import profileicon from '../../../assets/images/profile.png'


const Logout = (props) => {
  const navigationtool=useNavigation();

    const handleLogout=()=>{
        // try{
        //   auth().signOut().then(()=>{
        //     ToastAndroid.show("Logged out",1000)
        //     navigationtool.navigate("LoginScreen")
        //     console.log("Logged out Successfully !!");
      
        //   })
        // }catch(e){
        //   console.log(e);
        // }
        setTimeout(() => {
          props.setisloggedin(false)
        }, 500);
        ToastAndroid.show("Logged out!",1000);
    

    }
  return (
    <View style={styles.root}>
      
      <Image source={profileicon} style={{height:120,width:120,marginLeft:'auto',marginRight:'auto',marginTop:30}} resizeMode="contain"/>
      <Text style={{textAlign:'center',marginTop:50,fontSize:30,fontFamily:'Slabo27px-Regular'}}>My Profile</Text>
  
    
      {/* <View style={{width:'80%',marginLeft:'10%',marginTop:300}}>
      
       
      <Btn btntext="Logout" onpress={handleLogout} style={{width:50}} type="danger"/>
      </View> */}
      
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
    },
    profile:{

      marginTop:40,
      fontSize:40,
      textAlign:'center',
      color:'#076cfa',
   
    }
})

export default Logout