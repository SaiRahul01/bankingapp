import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Register';
import Otpverification from './Otpverification';

const RegisterStack = (props) => {
    const regstack=createNativeStackNavigator()
  return (
    <regstack.Navigator screenOptions={{headerShown:false}}>
        <regstack.Screen name='Register'>
            {()=><Register/>}
        </regstack.Screen>
        <regstack.Screen name='otpverificationscreen'>
            {()=><Otpverification/>}
        </regstack.Screen>
    </regstack.Navigator>
  )
}

export default RegisterStack