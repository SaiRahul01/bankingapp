import { View, Text, Image, StyleSheet,useWindowDimensions ,ScrollView, Alert, ToastAndroid} from 'react-native'
import React from 'react'
import Loginlogo from '../../../assets/images/login-img.png'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import { useState } from 'react'
import {useNavigation} from '@react-navigation/native' 
import auth from '@react-native-firebase/auth'
import otplogo from '../../../assets/images/otpscreen.png'

const Otpverification = (props) => {
    const navigationtool=useNavigation();

    const {height}=useWindowDimensions()
    const [otp, setotp] = useState('')

    const handleotpverification=()=>{
        let loginUrl = "http://40.80.91.121:5001/api/Confirmotp";
        const data = {
            "otp": otp,
            "phoneNo": props.mobilenumber,
            "custId": props.custid
        }
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                //   'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("See otp api result below\n");
                console.log(data);
                if(data.result==='Success'){
                    console.log("Verified Mobile number");
                    ToastAndroid.show("Mobile number verified, please Login",2000)
                    navigationtool.navigate("LoginScreen")
                }
               
               


            })
            .catch((error) => {
                console.log(error);
            });

    }
   
    const handleforgotpassword=()=>{
        // console.warn("Bc, ");
        navigationtool.navigate("ForgotPassword")
    }
    
    const handledonthaveanaccount=()=>{
        // console.warn("Register Now");
        navigationtool.navigate("RegisterScreen")
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        {/* <Text>User:{auth().currentUser.email}</Text> */}
     <Image source={otplogo} style={[styles.a,{height:height*0.3,marginBottom:40}]} resizeMode="contain"/>
     <Text>Enter the Otp sent to {props.mobilenumber}</Text>
    
     <CustomInput placeholder="OTP" value={otp} setValue={setotp} ste={false}/>
    
     <Btn btntext="Verify" onpress={handleotpverification} type="primary"/>
    

     {/* <Btn btntext="Login  with Google" onpress={handlegooglelogin} type="second"/> */}
     {/* <Btn btntext="Login with FaceBook" onpress={handleforgotpassword} type="primary"/> */}
     <Btn btntext="Don't have an account? Register" onpress={handledonthaveanaccount} type="ter"/>
   </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    root:{
        alignItems:'center',
        padding:30
    },
    a:{
        width:'70%',
        maxHeight:200,
        maxWidth:300
    }
})
export default Otpverification