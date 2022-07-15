import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddBen from './AddBen';
import ViewBen from './ViewBen'
import BenHome from './BenHome';

const BenStack = (props) => {
  const stack=createNativeStackNavigator()
  return (
    <stack.Navigator screenOptions={{headerShown:false}}>
      <stack.Screen name='Home Ben'>
        {()=> <BenHome {...props}/> }
      </stack.Screen>
      <stack.Screen name='Add Beneficiary'>
        {()=> <AddBen {...props}/> }
      </stack.Screen>
      <stack.Screen name='View Beneficiary'>
        {()=><ViewBen/>}
      </stack.Screen>

    </stack.Navigator>
  )
}

export default BenStack