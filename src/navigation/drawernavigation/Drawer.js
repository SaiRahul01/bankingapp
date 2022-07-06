import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import A from './A'
import B from './B'
import C from './C'

const Drawer = () => {
    const Drawerr=createDrawerNavigator()
  return (
    <Drawerr.Navigator>
        <Drawerr.Screen name='First' component={A}/>
        <Drawerr.Screen name='Second' component={B}/>
        <Drawerr.Screen name='Third' component={C}/>
    </Drawerr.Navigator>
  )
}

export default Drawer