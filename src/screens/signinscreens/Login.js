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
    const [password, setpassword] = useState('')

    const handlelogin=()=>{
        let a = "http://40.80.91.121:5001/api/Memberlogin";
        const dd = {
          
            "userName": props.custid,
            "password": password
        }
        fetch(a, {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dd),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("Data\n");
                // console.log(data);
                // console.log("\n");
                if (data.result === 'Success'){
                   ToastAndroid.show("Logged in",1000);
                   props.setisloggedin(true)
                 
                }
                else{
                    console.log(data);
                    Alert.alert("Login Failed!","credentials are wrong or You have not yet Registered!");
                }
                
               
                
               
                

            })
            .catch((error) => {

            });

    }
   

    const handleforgotpassword=()=>{

        navigationtool.navigate("Forgotpassword")
    }
    
    const handledonthaveanaccount=()=>{
   
        navigationtool.navigate("RegisterScreen")
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>

     <Image source={Loginlogo} style={[styles.a,{height:height*0.3,marginBottom:40}]} resizeMode="contain"/>
    
     <CustomInput placeholder="Customer ID" value={props.custid} setValue={props.setcustid} ste={false}/>
     <CustomInput placeholder="Password" value={password} setValue={setpassword} type='numeric' ste={true}/>
    
    
     <Btn btntext="Login" onpress={handlelogin} type="primary"/>
     <Btn btntext="Forgot Password" onpress={handleforgotpassword} type="ter"/>

 
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