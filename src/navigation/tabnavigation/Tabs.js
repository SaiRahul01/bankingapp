import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import A from './Home';
import B from './BankTransfers';
import C from './Profile';
import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import FI from 'react-native-vector-icons/Feather'
import MI from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'
import { useEffect } from 'react';
import auth,{firebase} from '@react-native-firebase/auth'

const Tab=createBottomTabNavigator()
 const Tabs=(props)=>{
    const navigationtool=useNavigation();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
    
            }else{
                navigationtool.navigate("LoginScreen")
            }
        })
    }, [])
    
    
    return(
       
        <Tab.Navigator screenOptions={ {
            
            headerShown:false,
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'black',
            tabBarStyle:{height:60,backgroundColor:'#0d6efd'},
            tabBarLabelStyle:{fontSize:12,marginBottom:10,color:'white'}
            
            
            
            
            
            
        }} >
        <Tab.Screen name="Home"    options={{tabBarIcon:({focused})=>(<Ionicons name='home-outline' color={focused?'white':'black'} size={25} />) }}>
            {()=><A/>}
        </Tab.Screen>

        <Tab.Screen name="BankTransfers" options={{tabBarIcon:({focused})=>(<MCI name='bank-transfer' color={focused?'white':'black'}  size={40} />)}} >
            {()=><B />}
        </Tab.Screen>

        <Tab.Screen name="Profile" options={{tabBarIcon:({focused})=>(<FI name='user' color={focused?'white':'black'}  size={25}  />)}}>
            {()=><C isloggedin={props.isloggedin} setisloggedin={props.setisloggedin} />}
        </Tab.Screen>

    </Tab.Navigator>
    
    )

}
export default Tabs;