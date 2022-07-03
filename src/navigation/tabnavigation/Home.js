import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Monkey from '../../../assets/images/monkey.png'
import auth,{firebase} from '@react-native-firebase/auth'
import Btn from '../../components/buttons/Loginbtn'
import {useNavigation} from '@react-navigation/native'

const A = () => {
    const handleLogout=()=>{
      const navigationtool=useNavigation();
        auth().signOut().then(()=>{
          ToastAndroid.show("Logged out",1000)
          navigationtool.navigate("LoginScreen")
    
        })
      }
  return (
    <View style={styles.root}>

    <Text style={styles.welcometxt}>Welcome to Banking Monkey </Text>
    <Image source={Monkey} style={styles.monkeyimg} resizeMode="contain"/>

      {
        firebase.auth().currentUser?<Text style={styles.title}>Hello there, Welcome {firebase.auth().currentUser.email}</Text>:<Text style={{textAlign:'center',fontSize:20}}>Logged out</Text>
      }
      
      
    </View>
  )
}
const styles=StyleSheet.create({
    root:{

    },
    title:{
      marginLeft:'auto',
      marginRight:'auto',
      fontSize:20
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

export default A