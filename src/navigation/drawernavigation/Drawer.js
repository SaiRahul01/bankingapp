import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import A from './Home'
import B from './BankTransfers'
import C from './Profile'
import II from 'react-native-vector-icons/Ionicons'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import F from 'react-native-vector-icons/Feather'
import CustomDrawer from './CustomDrawer';
// drawerContent={props=><CustomDrawer {...props} />}
const Drawer = (props) => {
  const Drawerr = createDrawerNavigator()
  return (
    <Drawerr.Navigator  screenOptions={{ drawerLabelStyle: {}, drawerActiveBackgroundColor: 'black', drawerActiveTintColor: 'white' }}>

      <Drawerr.Screen name='Home' component={A} options={{ drawerIcon: ({ focused, size }) => (<II name='home' color={focused ? 'white' : 'black'} size={20} />) }} />

      <Drawerr.Screen name='Bank Transfers' component={B} options={{ drawerIcon: ({ focused, size }) => (<MCI name='bank-transfer-out' color={focused ? 'white' : 'black'} size={30} />) }} />

      <Drawerr.Screen name='Profile' options={{ drawerIcon: ({ focused, size }) => (<F name='user' color={focused ? 'white' : 'black'} size={20} />) }}>
        {() => <C isloggedin={props.isloggedin} setisloggedin={props.setisloggedin} />}
      </Drawerr.Screen>
      
      

    </Drawerr.Navigator>
  )
}

export default Drawer