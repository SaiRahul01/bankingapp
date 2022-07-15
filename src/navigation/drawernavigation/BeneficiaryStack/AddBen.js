import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import CustomInput from '../../../components/inputs/LoginInput'
import { useState } from 'react'
import Btn from '../../../components/buttons/Loginbtn'
import { ScrollView } from 'react-native-gesture-handler'

const AddBen = (props) => {
  const handleaddben=()=>{
      ToastAndroid.show("Addded Successfully",1000);
  }
  const [typee, settypee] = useState('')
  const [accno, setaccno] = useState('')
  const [benfname, setbenfname] = useState('')
  const [branch, setbranch] = useState('')
  const [bank, setbank] = useState('')
  const [ifsccode, setifsccode] = useState('')
  const [email, setemail] = useState('')
  const [phoneNo, setphoneNo] = useState('')
  const [remarks, setremarks] = useState('')



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