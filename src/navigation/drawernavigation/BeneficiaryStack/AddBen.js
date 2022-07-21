import { View, Text, ToastAndroid, Alert } from 'react-native'
import React from 'react'
import CustomInput from '../../../components/inputs/LoginInput'
import { useState } from 'react'
import Btn from '../../../components/buttons/Loginbtn'
import { ScrollView } from 'react-native-gesture-handler'

const AddBen = (props) => {

  const [typee, settypee] = useState('')
  const [accno, setaccno] = useState('')
  const [benfname, setbenfname] = useState('')
  const [branch, setbranch] = useState('')
  const [bank, setbank] = useState('')
  const [ifsccode, setifsccode] = useState('')
  const [email, setemail] = useState('')
  const [phoneNo, setphoneNo] = useState('')
  const [remarks, setremarks] = useState('')


  const handleaddben=()=>{
     
      let a = "http://40.80.91.121:5001/api/AddBenificiary";
      const dataa = {
  
        
          "type": typee,
          "custId": props.custid,
          "accountNo": accno,
          "benfName": benfname,
          "branch": branch,
          "bank": bank,
          "ifscCode": ifsccode,
          "email": email,
          "phoneNo": phoneNo,
          "remarks": remarks
        
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
        if(data.result==='Error')
        {
          Alert.alert("Failed to Add !", "Please check the details you have entered and Try again!");
        }
      
  
  
        })
        .catch((error) => {
            ToastAndroid.show("An Error occured",1000);
        });





  }

 


  return (
   


    <ScrollView>
      <View style={{ margin: 50, marginTop: 15 }}>

        <CustomInput placeholder='Type' value={typee} setValue={settypee} />
        <CustomInput placeholder='Account Number' value={accno} setValue={setaccno} />
        <CustomInput placeholder='Beneficiary Name' value={benfname} setValue={setbenfname} />
        <CustomInput placeholder='Branch' value={branch} setValue={setbranch} />
        <CustomInput placeholder='Bank' value={bank} setValue={setbank} />
        <CustomInput placeholder='IFSC Code' value={ifsccode} setValue={setifsccode} />
        <CustomInput placeholder='Email' value={email} setValue={setemail} />
        <CustomInput placeholder='Mobile Number' value={phoneNo} setValue={setphoneNo} />
        <CustomInput placeholder='Remarks' value={remarks} setValue={setremarks} />
        <Btn type='primary' btntext='Add' onpress={handleaddben} />




      </View>
    </ScrollView>
  )
}

export default AddBen