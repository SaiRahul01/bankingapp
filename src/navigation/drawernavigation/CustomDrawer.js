import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import drawerbg from '../../../assets/images/drawerbg.jpg'

const CustomDrawer = (props) => {
  return (
   <View style={{flex:1}}>
     <DrawerContentScrollView {...props}>
        {/* <ImageBackground source={drawerbg} style={{height:'100%',width:'100%'}}>

        </ImageBackground> */}
        <DrawerItemList {...props}/>
            
   
    </DrawerContentScrollView>
    <View style={{borderWidth:1,marginBottom:50,height:50}}>
        <Pressable onPress={props.setisloggedin(false)}>
            <Text style={{marginTop:'auto',marginBottom:'auto',fontSize:25,marginLeft:'20%'}}>Log out</Text>
        </Pressable>
    </View>
   </View>
  )
}

export default CustomDrawer