import { View, Text, Image, StyleSheet,useWindowDimensions ,ScrollView, Alert, ToastAndroid} from 'react-native'
import React from 'react'
import Loginlogo from '../../../assets/images/login-img.png'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import { useState } from 'react'
import {useNavigation} from '@react-navigation/native' 
import auth from '@react-native-firebase/auth'
import otp from '../../../assets/images/otpscreen.png'

const Otpverification = (props) => {
    const navigationtool=useNavigation();

    const {height}=useWindowDimensions()

    const handlelogin=()=>{
        // console.warn("Holy Shit");
        // navigationtool.navigate("HomeScreen")
        // if(username===''){
        //     ToastAndroid.show("Email can't be empty",1000);
        //     return;
        // }
        // if(userpassword===''){
        //     ToastAndroid.show("Password can't be empty",1000);
        //     return
        // }
        // if(!(username.includes("@gmail.com"))){
        //     ToastAndroid.show("Enter a valid Gmail",1000);
        //     return;
        // }
        // loginuser(username,userpassword);
        navigationtool.navigate("HomeScreen")

    }
    const loginuser=async(a,b)=>{
        try{
            let resp=await auth().signInWithEmailAndPassword(a,b);
            if(resp && resp.user){
                console.log("Logged in successfully");
                ToastAndroid.show("Logged in",1000);
                navigationtool.navigate("HomeScreen")
            }
        }
        catch(e){
            console.log(e);
            ToastAndroid.show("Invalid Credentials",2000);
        }
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
     <Image source={otp} style={[styles.a,{height:height*0.3,marginBottom:40}]} resizeMode="contain"/>
     <Text>Enter the Otp sent to {props.usermobilenumber}</Text>
    
     <CustomInput placeholder="OTP" value={props.custid} setValue={props.setcustid} ste={false}/>
    
     <Btn btntext="Verify" onpress={handlelogin} type="primary"/>
    

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