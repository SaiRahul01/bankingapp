import { View, Text, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import CustInput from '../../../components/inputs/LoginInput'
import Btn from '../../../components/buttons/Loginbtn'

const ViewBen = (props) => {
  const handleviewben=()=>{

    
    let a = "http://40.80.91.121:5001/api/ViewBenificiary";
    const dataa = {

      "custId": props.custid
    }
    fetch(a, {
      method: 'POST',
      headers: {
        //   'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataa),
    })
      .then((response) => response.json())
      .then((data) => {
      
      console.log(data);
      if(data.message==="Account details not Found")
      {
        
        Alert.alert("Failed!","Either the type is incorrect or there is no beneficiary added by You!")
        return;
      }



      })
      .catch((error) => {

      });


  }
  const [type, settype] = useState('')
  return (
    <View style={{margin:50}}>
    
      <CustInput value={type} setValue={settype} placeholder='Type'/>
      <Btn btntext='View' onpress={handleviewben} type='primary'/>
    </View>
  )
}

export default ViewBen