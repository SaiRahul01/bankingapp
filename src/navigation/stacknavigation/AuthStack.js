import React, { useContext ,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,

  View,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/signinscreens/Login';
import RegisterStack from '../../screens/Registerscreens/RegisterStack';




const AuthStack = (props) => {


 
  const Stack=createNativeStackNavigator()


  return (
  
    <Stack.Navigator screenOptions={{headerShown:false}}>
        
        <Stack.Screen name='LoginScreen'>
            {()=><Login isloggedin={props.isloggedin} setisloggedin={props.setisloggedin}/>}
        </Stack.Screen>
        <Stack.Screen name='RegisterScreen'>
            {()=><RegisterStack/>}
        </Stack.Screen>
        
        
    </Stack.Navigator>
   
  );
};

const styles = StyleSheet.create({
  root:{

    backgroundColor:'#F9FBFC'
  }
});

export default AuthStack;
