import { View, Text } from 'react-native'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import React, { useState } from 'react'
import DP from 'react-native-date-picker'

const BankStatement = (props) => {
    const [accounttype, setaccounttype] = useState('')
    const [accNo, setaccNo] = useState('')
    const [startdate, setstartdate] = useState(new Date())
    const [enddate, setenddate] = useState('')
    const [Open, setOpen] = useState(false)



  return (
    <View style={{marginLeft:'auto',marginRight:'auto',width:'80%'}} >
      <Text>BankStatement</Text>
      <CustomInput placeholder="Account type" value={accounttype} setValue={setaccounttype}   ste={false}/>
      <CustomInput placeholder="Account Number" value={accNo} setValue={setaccNo}   ste={false}/>
      {/* <CustomInput placeholder="Start date" value={startdate} setValue={setstartdate}   ste={false}/> */}
      <DP
        modal
        open={Open}
        date={startdate}
        onConfirm={(date) => {
          setOpen(false)
          setstartdate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <CustomInput placeholder="End date" value={enddate} setValue={setenddate}   ste={false}/>
      <Btn btntext='Generate' type='primary'/>
    </View>
  )
}

export default BankStatement