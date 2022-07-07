import { View, Text, StyleSheet, Image, ToastAndroid } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer'
import { Avatar,Caption,Drawer  } from 'react-native-paper'
import bankingdrawer from '../../../assets/images/bankdrawer.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ff from '../../../assets/fonts/Dancing_Script/DancingScript-Bold.ttf'
import MI from 'react-native-vector-icons/MaterialIcons'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import FA from 'react-native-vector-icons/FontAwesome'
import II from 'react-native-vector-icons/Ionicons'

const DrawerContent = (props) => {
    const handlelogout=()=>{
        console.log(props);
        // ToastAndroid.show(props,1000);
        // props.setisloggedin(false)
    }
  return (
   <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
        <View style={styles.drawercontent}>
            <View style={[styles.userinfo, {flexDirection:'column',alignItems:'center'}]}>
                <View style={{marginTop:35,marginLeft:5,padding:0}}>
                   
                    <Image  source={require('../../../assets/images/bankdrawer.png')} size={40} style={{backgroundColor:'white',padding:10,width:80,height:80,marginLeft:'auto',marginRight:'auto'}}/>
                    
                </View>
                <View>
                <Text style={[{marginTop:10,marginLeft:20,fontSize:25,color:'crimson',fontFamily:'KantumruyPro-Regular'}]}>Banking App</Text>
                
                </View>
            </View>
            {/* // Main bg section ends */}
            <View style={[styles.row,styles.userinfo]}>
               <Drawer.Section >
                <DrawerItem label="My Account" icon={()=><MI name='account-balance' size={25} style={{marginRight:-10}}/>} style={{marginTop:40}} onPress={()=>props.navigation.navigate("My Account")}/>

                <DrawerItem label="E Deposits" icon={()=><FA name='rupee' size={25} style={{marginLeft:5}} />} style={{}} onPress={()=>props.navigation.navigate("E-Deposits")}/>


                <DrawerItem label="Bank Transfers" icon={()=><MCI name='bank-transfer' size={35} style={{marginRight:-18}}/>} style={{}} onPress={()=>props.navigation.navigate("Bank Transfers")}/>

                <DrawerItem label="Profile" icon={()=><MCI name='account-circle' size={25} style={{marginLeft:2,marginRight:-8}}/>} style={{}} onPress={()=>props.navigation.navigate("Profile")}/>

                <DrawerItem label="Settings" icon={()=><II name='ios-settings-sharp' size={25} style={{marginLeft:2,marginRight:-8}}/>} style={{}} onPress={()=>props.navigation.navigate("Settings")}/>


                
               </Drawer.Section>
               <Drawer.Section style={{marginTop:290,borderWidth:0,borderBottomWidth:0}}>
               <Caption style={{textAlign:'center'}}>Powered by </Caption>
                <Caption style={{fontSize:17,textAlign:'center'}}>Techverve Solutions</Caption>
               </Drawer.Section>

            </View>
            

        </View>
            
    </DrawerContentScrollView>
   </View>
  )
}
const styles=StyleSheet.create({

})

export default DrawerContent