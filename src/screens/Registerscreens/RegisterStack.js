import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Register';
import Otpverification from './Otpverification';

const RegisterStack = (props) => {
    const regstack=createNativeStackNavigator()
    const [mobilenumber, setmobilenumber] = useState('')
    const [custid, setcustid] = useState('')

  return (
    <regstack.Navigator screenOptions={{headerShown:false}}>
        <regstack.Screen name='Register'>
            {()=><Register mobilenumber={mobilenumber} setmobilenumber={setmobilenumber} custid={custid} setcustid={setcustid} />}
        </regstack.Screen>
        <regstack.Screen name='otpverificationscreen'>
            {()=><Otpverification mobilenumber={mobilenumber} setmobilenumber={setmobilenumber} custid={custid} setcustid={setcustid}/>}
        </regstack.Screen>
    </regstack.Navigator>
  )
}

export default RegisterStack