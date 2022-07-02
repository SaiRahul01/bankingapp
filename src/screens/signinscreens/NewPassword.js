import { View, Text, Image, StyleSheet,useWindowDimensions ,ScrollView} from 'react-native'
import React from 'react'
import Loginlogo from '../../../assets/images/login-img.png'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import { useState } from 'react'
import {useNavigation} from '@react-navigation/native' 

const NewPassword = () => {
    const navigationtool=useNavigation();
    const {height}=useWindowDimensions()
    
    const [code, setcode] = useState('')
    const [newpassword, setnewpassword] = useState('')

    const handleonsend=()=>{
        console.warn("Sent  code!");
    }
    const handlebacktologin=()=>{
        navigationtool.navigate("LoginScreen")
    }
    const handlechangepassword=()=>{ 
        console.warn("Password Changed!");
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <Text style={styles.title}>New Password</Text>
   
     <CustomInput placeholder="Code" value={code} setValue={setcode} ste={false}/>
     <CustomInput placeholder="New Password" value={newpassword} setValue={setnewpassword} ste={true}/>

    
     <Btn btntext="Change Password" onpress={handlechangepassword} type="primary"/>
     {/* <Btn btntext="Forgot Password" onpress={handleforgotpassword} type="ter"/> */}

     {/* <Btn btntext="Login  with Google" onpress={handlegooglelogin} type="second"/> */}
     {/* <Btn btntext="Login with FaceBook" onpress={handleforgotpassword} type="primary"/> */}
     {/* <Btn btntext="Resend Code" onpress={handleresendcode} type="second"/> */}
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
export default NewPassword 