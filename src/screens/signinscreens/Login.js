import { View, Text, Image, StyleSheet,useWindowDimensions ,ScrollView, Alert, ToastAndroid} from 'react-native'
import React from 'react'
import Loginlogo from '../../../assets/images/login-img.png'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import { useState } from 'react'
import {useNavigation} from '@react-navigation/native' 
import auth from '@react-native-firebase/auth'

const Login = (props) => {
    const navigationtool=useNavigation();

    const {height}=useWindowDimensions()

    const handlelogin=()=>{
        // console.warn("Holy Shit");
        // navigationtool.navigate("HomeScreen")
       
        // loginuser(username,userpassword);

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
     <Image source={Loginlogo} style={[styles.a,{height:height*0.3,marginBottom:40}]} resizeMode="contain"/>
    
     <CustomInput placeholder="Customer ID" value={props.custid} setValue={props.setcustid} ste={false}/>
     <CustomInput placeholder="Mobile Number" value={props.usermobilenumber} setValue={props.setusermobilenumber} ste={true}/>
     <Btn btntext="Login" onpress={handlelogin} type="primary"/>
     <Btn btntext="Forgot Password" onpress={handleforgotpassword} type="ter"/>

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
export default Login