import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import Btn from '../../components/buttons/Loginbtn'
import CustomInput from '../../components/inputs/LoginInput'
import { useState } from 'react'

const Settings = (props) => {
  const changenewpassword=()=>{
    let a = "http://40.80.91.121:5001/api/ResetPassword";
    const dd = {
      
      
        "userName": props.custid,
        "password": oldpassword,
        "newPassword": newpassword
      
        
    }
    fetch(a, {
        method: 'POST',
        headers: {
            
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dd),
    })
        .then((response) => response.json())
        .then((data) => {
          console.log("DATA BELOW\n");
          console.log(oldpassword+" "+newpassword);
          console.log(data);
          if(data==0)
          {
            ToastAndroid.show("API is not Yet ready!!",1000);
            return;
          }
           
            
           
            

        })
        .catch((error) => {

        });
    


  }
  const [newpassword, setnewpassword] = useState('')
  const [oldpassword, setoldpassword] = useState('')
    const handleLogout=()=>{
       
        setTimeout(() => {
          props.setisloggedin(false)
        }, 500);
        ToastAndroid.show("Logged out!",1000);
    

    }
  return (
    <View>
 
      <View style={{width:'80%',marginLeft:'10%',marginTop:100}}>
      <CustomInput placeholder='Old Password' value={oldpassword} setValue={setoldpassword}/>
        <CustomInput placeholder='New Password' value={newpassword} setValue={setnewpassword}/>
        <Btn btntext="Change Password" type="primary" onpress={changenewpassword}/>
      
       
     
      </View>
     <View style={{width:'80%',marginLeft:'auto',marginRight:'auto',marginTop:250}}>
     <Btn btntext="Logout" onpress={handleLogout} style={{width:50,marginTop:40}} type="danger"/>
     </View>
    </View>
  )
}

export default Settings