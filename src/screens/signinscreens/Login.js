import { View, Text, Image, StyleSheet,useWindowDimensions ,ScrollView} from 'react-native'
import React from 'react'
import Loginlogo from '../../../assets/images/login-img.png'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import { useState } from 'react'
import {useNavigation} from '@react-navigation/native' 

const Login = () => {
    const navigationtool=useNavigation();

    const {height}=useWindowDimensions()
    const [username, setusername] = useState('')
    const [userpassword, setUserpassword] = useState('')
    const handlelogin=()=>{
        // console.warn("Holy Shit");
        navigationtool.navigate("HomeScreen")
    }
    const handleforgotpassword=()=>{
        // console.warn("Bc, ");
        navigationtool.navigate("ForgotPassword")
    }
    const handlegooglelogin=()=>{
        // console.warn("Logged in with Google!!");
    }
    const handledonthaveanaccount=()=>{
        // console.warn("Register Now");
        navigationtool.navigate("RegisterScreen")
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
     
     <Image source={Loginlogo} style={[styles.a,{height:height*0.3,marginBottom:40}]} resizeMode="contain"/>
     <CustomInput placeholder="User Name" value={username} setValue={setusername} ste={false}/>
     <CustomInput placeholder="Password" value={userpassword} setValue={setUserpassword} ste={true}/>
     <Btn btntext="Login" onpress={handlelogin} type="primary"/>
     <Btn btntext="Forgot Password" onpress={handleforgotpassword} type="ter"/>

     <Btn btntext="Login  with Google" onpress={handlegooglelogin} type="second"/>
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