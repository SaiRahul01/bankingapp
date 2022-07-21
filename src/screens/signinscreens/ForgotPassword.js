import { View, Text, Image, StyleSheet,useWindowDimensions ,ScrollView, Alert} from 'react-native'
import React from 'react'
import Loginlogo from '../../../assets/images/login-img.png'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import { useState } from 'react'
import {useNavigation} from '@react-navigation/native' 

const ForgotPassword = () => {
    const navigationtool=useNavigation();
    const {height}=useWindowDimensions()
    
    const [username, setusername] = useState('')
    const [dob, setdob] = useState('')
    const [phoneNo, setphoneNo] = useState('')

    const handleonsend=()=>{
        
      let a = "http://40.80.91.121:5001/api/ForgotPassword";
      const dataa = {
  
        
          "phoneNo":phoneNo,
          "dob":dob
        
      }
      fetch(a, {
        method: 'POST',
        headers: {
          //   'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataa),
      })
        .then((response) => response.json())
        .then((data) => {
        
        console.log(data);
       if(data.result==='Error')
       {
            Alert.alert("Failed!","Either your Mobile Number or the Date of Birth is Wrong ");
            return;
       }
  
  
        })
        .catch((error) => {
            ToastAndroid.show("An Error occured",1000);
        });




      
    }
    const handlebacktologin=()=>{
        navigationtool.navigate("LoginScreen")
    }
   
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <Text style={styles.title}>Reset my Password</Text>
   
     <CustomInput placeholder="Date of Birth in DD-MM-YYYY Format" value={dob} setValue={setdob} ste={false}/>
     <CustomInput placeholder="Phone Number" value={phoneNo} setValue={setphoneNo} ste={false}/>
     {/* <CustomInput placeholder="Email" value={useremail} setValue={setuseremail} ste={false}/> */}

    
     <Btn btntext="Reset" onpress={handleonsend} type="primary"/>
    
     <Btn btntext="Back to Login?" onpress={handlebacktologin} type="ter"/>
   </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    root:{
        alignItems:'center',
        padding:30
    },
    pp:{
    
        margin:12,
        fontSize:14
    },
    a:{
        width:'70%',
        maxHeight:200,
        maxWidth:300
    },
    title:{
        fontSize:24,
        
        margin:10,
        color:'#051C60'
    }
})
export default ForgotPassword 