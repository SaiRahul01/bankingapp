import 'react-native-gesture-handler';
import { View, Text, Button, Pressable,ToastAndroid } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import A from './Home'
import B from './BankTransfers'
import C from './Profile'
import D from './BeneficiaryStack/BenStack'
import E from './Settings'
import G from './BankStatement'
import H from './CustomerAccList'
import II from 'react-native-vector-icons/Ionicons'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import MI from 'react-native-vector-icons/MaterialIcons'
import F from 'react-native-vector-icons/Feather'
import DrawerContent from './DrawerContent.js';
// drawerContent={props=><CustomDrawer {...props} />}
const Drawer = (props) => {
  const handleLogout=()=>{
   
    setTimeout(() => {
      props.setisloggedin(false)
      props.setcustid('');
    }, 500);
    ToastAndroid.show("Logged out!",1000);
 


}

  const Drawerr = createDrawerNavigator()
  return (
    <Drawerr.Navigator drawerContent={(props)=><DrawerContent {...props}/>}
     screenOptions={{ drawerLabelStyle: {}, drawerActiveBackgroundColor: 'black', drawerActiveTintColor: 'white',headerTintColor:'black',headerTitleAlign:'center',headerShown:true,headerTitleStyle:{fontFamily:'',fontSize:24},headerRight:()=>(<Pressable onPress={handleLogout}><MI name='logout' size={30} style={{marginRight:10,color:'red'}}/></Pressable>) }}>

      <Drawerr.Screen name='My Account' >
        {()=><A {...props}/>}
      </Drawerr.Screen>

      <Drawerr.Screen name='Bank Transfers'   >
        {()=><B {...props}/>}
      </Drawerr.Screen>

      <Drawerr.Screen name='Profile' >
        {() => <C isloggedin={props.isloggedin} setisloggedin={props.setisloggedin} {...props} />}
      </Drawerr.Screen>

      <Drawerr.Screen name='Beneficiaries' >
        {() => <D {...props} />}
      </Drawerr.Screen>

      <Drawerr.Screen name='Bank Statement'>
        {() => <G {...props} isloggedin={props.isloggedin} setisloggedin={props.setisloggedin} />}
      </Drawerr.Screen>
      
      <Drawerr.Screen name='Settings'>
        {() => <E {...props} isloggedin={props.isloggedin} setisloggedin={props.setisloggedin} />}
      </Drawerr.Screen>

      <Drawerr.Screen name='Accounts List'>
        {() => <H {...props} isloggedin={props.isloggedin} setisloggedin={props.setisloggedin} />}
      </Drawerr.Screen>
      

    </Drawerr.Navigator>
  )
}

export default Drawer