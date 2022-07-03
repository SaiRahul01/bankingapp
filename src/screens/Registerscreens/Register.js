import { View, Text, Image, StyleSheet,useWindowDimensions ,ScrollView, ToastAndroid} from 'react-native'
import React from 'react'
import Loginlogo from '../../../assets/images/login-img.png'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import { useState } from 'react'
import {useNavigation} from '@react-navigation/native' 
import auth from '@react-native-firebase/auth'

const Register = () => {
    const navigationtool=useNavigation();
    const {height}=useWindowDimensions()
    const [username, setusername] = useState('')
    const [useremail, setuseremail] = useState('')
    const [userpassword, setUserpassword] = useState('')
    const [userpasswordrep, setUserpasswordrep] = useState('')
   

    const createuser=async(a,b)=>{
        try{
            let resp=await auth().createUserWithEmailAndPassword(a,b);
            if(resp){
                ToastAndroid.show("Registered Successfully!",1000);
                navigationtool.navigate("LoginScreen")
            }
        }
        catch(e){
            ToastAndroid.show("Something went wrong",1000);
            console.log(e);
        }
    }
    const handleregister=()=>{
        if(username===''){
            ToastAndroid.show("Username can't be empty",1000);
            return;
        }
        if(useremail===''){
            ToastAndroid.show("Email can't be empty",1000);
            return;
        }
        if(userpassword===''){
            ToastAndroid.show("Password can't be empty",1000);
            return
        }
        if(!(useremail.includes("@gmail.com"))){
            ToastAndroid.show("Enter a valid Gmail",1000);
            return;
        }
        if(userpassword!==userpasswordrep){
            ToastAndroid.show("Passwords do not match",1000);
            return;
        }
        if(userpassword!=='' && userpassword.length<6){
            ToastAndroid.show("Password must be atlease 6 characters long");
            return;
        }
      
        createuser(useremail,userpassword);
        // navigationtool.navigate("LoginScreen")
        


    }
    
    const handlehaveaccount=()=>{
        navigationtool.navigate("LoginScreen")
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