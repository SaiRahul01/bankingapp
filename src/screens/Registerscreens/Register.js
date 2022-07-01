import { View, Text, Image, StyleSheet,useWindowDimensions ,ScrollView} from 'react-native'
import React from 'react'
import Loginlogo from '../../../assets/images/login-img.png'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import { useState } from 'react'

const Register = () => {
    const {height}=useWindowDimensions()
    const [username, setusername] = useState('')
    const [useremail, setuseremail] = useState('')
    const [userpassword, setUserpassword] = useState('')
    const [userpasswordrep, setUserpasswordrep] = useState('')

    const handleregister=()=>{
        console.warn("Registered Successfully");
    }
    const handleforgotpassword=()=>{
        console.warn("Bc, ");
    }
    const handlegooglelogin=()=>{
        console.warn("Logged in with Google!!");
    }
    const handlehaveaccount=()=>{
        console.warn("Login Now");
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
     {/* <Image source={Loginlogo} style={[styles.a,{height:height*0.3,marginBottom:40}]} resizeMode="contain"/> */}
     <CustomInput placeholder="User Name" value={username} setValue={setusername} ste={false}/>
     <CustomInput placeholder="Email" value={useremail} setValue={setuseremail} ste={false}/>
     <CustomInput placeholder="Password" value={userpassword} setValue={setUserpassword} ste={true}/>
     <CustomInput placeholder="Confirm Password" value={userpasswordrep} setValue={setUserpasswordrep} ste={true}/>

     <Text style={styles.pp}>By Registering, you confirm that you accept our <Text style={{color:'red'}}>Terms of Use</Text> and <Text style={{color:'red'}}>Privacy Policy</Text></Text>
     <Btn btntext="Create" onpress={handleregister} type="primary"/>
     {/* <Btn btntext="Forgot Password" onpress={handleforgotpassword} type="ter"/> */}

     {/* <Btn btntext="Login  with Google" onpress={handlegooglelogin} type="second"/> */}
     {/* <Btn btntext="Login with FaceBook" onpress={handleforgotpassword} type="primary"/> */}
     <Btn btntext="Have an account? Login" onpress={handlehaveaccount} type="ter"/>
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
export default Register