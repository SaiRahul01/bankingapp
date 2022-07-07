import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import Btn from '../../components/buttons/Loginbtn'

const Settings = (props) => {
    const handleLogout=()=>{
       
        setTimeout(() => {
          props.setisloggedin(false)
        }, 500);
        ToastAndroid.show("Logged out!",1000);
    

    }
  return (
    <View>
 
      <View style={{width:'80%',marginLeft:'10%',marginTop:300}}>
        <Btn btntext="Change Password" type="primary"/>
      
       
      <Btn btntext="Logout" onpress={handleLogout} style={{width:50}} type="danger"/>
      </View>
    </View>
  )
}

export default Settings