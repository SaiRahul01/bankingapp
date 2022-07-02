import { View, Text, Image, StyleSheet,useWindowDimensions ,ScrollView} from 'react-native'
import React from 'react'
import Loginlogo from '../../../assets/images/login-img.png'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import { useState } from 'react'

const ForgotPassword = () => {
    const {height}=useWindowDimensions()
    
    const [username, setusername] = useState('')

    const handleonsend=()=>{
        console.warn("Sent  code!");
    }
    const handlebacktologin=()=>{
        console.warn("Go back to Login");
    }
    const handleonconfirm=()=>{
        console.warn("Email Confirmed!");
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <Text style={styles.title}>Reset my Password</Text>
   
     <CustomInput placeholder="User Name" value={username} setValue={setusername} ste={false}/>
     {/* <CustomInput placeholder="Email" value={useremail} setValue={setuseremail} ste={false}/> */}

    
     <Btn btntext="Send" onpress={handleonsend} type="primary"/>
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
export default ForgotPassword 