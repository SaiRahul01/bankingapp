import { View, Text, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import INP from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'

const Modulewisecustacc = (props) => {
  const [module, setmodule] = useState('')
  const handlemodwise=()=>{
    let a = "http://40.80.91.121:5001/api/ModulewiseCustomerAccountList";
      const dataa = {
        "module": module,
        "custId":props.custid
        
        
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
        
      
  
  
        })
        .catch((error) => {
            ToastAndroid.show("An Error occured",1000);
            setmodule('')
        });
  }
  return (
    <View style={{margin:40}}>
   
      <INP value={module} setValue={setmodule} placeholder='Module'/>
      <Btn btntext='Show' type='primary' onpress={handlemodwise}/>
      
    </View>
  )
}

export default Modulewisecustacc