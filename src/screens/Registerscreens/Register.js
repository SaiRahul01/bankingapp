import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, ToastAndroid, Alert } from 'react-native'
import React from 'react'
import Loginlogo from '../../../assets/images/login-img.png'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import Axios from 'axios'

const Register = (props) => {
    const navigationtool = useNavigation();
    const { height } = useWindowDimensions()
    const [refId, setrefId] = useState('')
    const [payload, setpayload] = React.useState('');




    const createuser = async (a, b) => {
        let loginUrl = "http://40.80.91.121:5001/api/Verifylogin";
        const data = {
            "name": "010001742",
            "phone": props.mobilenumber,
            "custId": props.custid
        }
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("Data\n");
                // console.log(data);
                // console.log("\n");
                if (data.result === 'Success'){
                    var pp = data.payload;
                    setpayload(pp[0]);
                    console.log("Refid->"+payload.RefId);
                    // ToastAndroid.show("1st Api good",1000);
                }
                
               if(data.message==='Already Customer has Registered'){
                Alert.alert("Error","User Already Registered");
               
               }
                
               
                

            })
            .catch((error) => {

            });


            // Second api call

        let loginUrl1 = "http://40.80.91.121:5001/api/Confirmverification ";
        const data1 = {
           
            "phone": a,
            "custId":b,
            "refId":payload.RefId
        }
        fetch(loginUrl1, {
            method: 'POST',
            headers: {
                //   'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("See below for Second Api\n");
                console.log(data);
                // ToastAndroid.show("Second Api good",1000);
                navigationtool.navigate("otpverificationscreen")
                // console.log(data.result);
             
               


            })
            .catch((error) => {

            });








    }
    const handleregister = () => {
        createuser(props.mobilenumber, props.custid);
    }

    const handlehaveaccount = () => {
        navigationtool.navigate("LoginScreen")
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an Account</Text>

                <CustomInput placeholder="Customer id" value={props.custid} setValue={props.setcustid} ste={false} />
                <CustomInput placeholder="Mobile Number" value={props.mobilenumber} setValue={props.setmobilenumber} ste={false} />

                <Text style={styles.pp}>By Registering, you confirm that you accept our <Text style={{ color: 'red' }}>Terms of Use</Text> and <Text style={{ color: 'red' }}>Privacy Policy</Text></Text>
                <Btn btntext="Create" onpress={handleregister} type="primary" />

                <Btn btntext="Have an account? Login" onpress={handlehaveaccount} type="ter" />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30
    },
    pp: {

        margin: 12,
        fontSize: 14
    },
    a: {
        width: '70%',
        maxHeight: 200,
        maxWidth: 300
    },
    title: {
        fontSize: 24,

        margin: 10,
        color: '#051C60'
    }
})
export default Register