import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import A from './Home'
import B from './BankTransfers'
import C from './Profile'

const Drawer = (props) => {
    const Drawerr=createDrawerNavigator()
  return (
    <Drawerr.Navigator screenOptions={{}}>
        <Drawerr.Screen name='Home' component={A}/>
        <Drawerr.Screen name='Bank Transfers' component={B}/>
        <Drawerr.Screen name='Profile'>
          {()=><C isloggedin={props.isloggedin} setisloggedin={props.setisloggedin}/>}
        </Drawerr.Screen>
    </Drawerr.Navigator>
  )
}

export default Drawer