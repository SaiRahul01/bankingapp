import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Monkey from '../../../assets/images/monkey.png'
import auth,{firebase} from '@react-native-firebase/auth'
import Btn from '../../components/buttons/Loginbtn'
import {useNavigation} from '@react-navigation/native'
import { Table, Row, Rows } from 'react-native-table-component';

const A = () => {
  const navigationtool=useNavigation();




 


    const handleLogout=()=>{
      
        auth().signOut().then(()=>{
          ToastAndroid.show("Logged out",1000)
          // navigationtool.navigate("LoginScreen")
    
        })
      }
  return (
    <View style={styles.root}>

    <Text style={styles.welcometxt}>My Bank Account</Text>
    {/* <Image source={Monkey} style={styles.monkeyimg} resizeMode="contain"/> */}
    
     
      
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
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
})

export default A