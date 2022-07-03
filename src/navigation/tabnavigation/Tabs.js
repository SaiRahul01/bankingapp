import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import A from './Home';
import B from './BankTransfers';
import C from './Logout';
import {NavigationContainer} from '@react-navigation/native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import MI from 'react-native-vector-icons/MaterialIcons'
import {useNavigation} from '@react-navigation/native'
import { useEffect } from 'react';
import auth,{firebase} from '@react-native-firebase/auth'

const Tab=createBottomTabNavigator()
 const Tabs=()=>{
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
       
        <Tab.Navigator screenOptions={{
            
            headerShown:false,
            tabBarActiveTintColor:'blue',
            tabBarInactiveTintColor:'black'
            
            
        }} >
        <Tab.Screen name="Home" component={A} options={{tabBarIcon:({focused})=>(<Ionicons name='home-outline' color={focused?'blue':'black'} size={30} />)}}/>
        <Tab.Screen name="Bank Transfers" component={B} options={{tabBarIcon:({focused})=>(<MCI name='bank-transfer' color={focused?'blue':'black'}  size={40} />)}} />
        <Tab.Screen name="Logout" component={C} options={{tabBarIcon:({focused})=>(<MI name='logout' color={focused?'blue':'black'}  size={30} />)}}/>
    </Tab.Navigator>
    
    )

}
export default Tabs;