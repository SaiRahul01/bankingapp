import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,

  View,
} from 'react-native';
import LoginScreen from './src/screens/signinscreens/Login'
import RegisterScreen from './src/screens/Registerscreens/Register'
import ConfirmRegister from './src/screens/Registerscreens/ConfirmRegister'
import ForgotPassword from './src/screens/signinscreens/ForgotPassword';
import NewPassword from './src/screens/signinscreens/NewPassword';
// import Navigation from './src/navigation/index'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/HomeScreens/Home';



const App = () => {
 
  const Stack=createNativeStackNavigator()
 

  return (
  
        <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown:false}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="HomeScreen" component={Home}></Stack.Screen>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen}></Stack.Screen>
            <Stack.Screen name="ConfirmRegister" component={ConfirmRegister}></Stack.Screen>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
            <Stack.Screen name="New Password" component={NewPassword}></Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
  root:{

    backgroundColor:'#F9FBFC'
  }
});

export default App;
