import { View, Text ,Button, Pressable} from 'react-native'
import CustomInput from '../../components/inputs/LoginInput'
import Btn from '../../components/buttons/Loginbtn'
import React, { useState } from 'react'
import DP from 'react-native-date-picker'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ei from 'react-native-vector-icons/EvilIcons'

const BankStatement = (props) => {
    const [accounttype, setaccounttype] = useState('')
    const [accNo, setaccNo] = useState('')
    const [startdate, setstartdate] = useState(new Date())
    const [enddate, setenddate] = useState(new Date())
    const [Open, setOpen] = useState(false)

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmstartdate = (date) => {
    setstartdate(date);
    hideDatePicker();
  };
  const handleConfirmenddate = (date) => {
    setenddate(date);
    hideDatePicker();
  };



  return (
    <View style={{marginLeft:'auto',marginRight:'auto',width:'80%',marginTop:100}} >
    
      <CustomInput placeholder="Account type" value={accounttype} setValue={setaccounttype}   ste={false}/>
      <CustomInput placeholder="Account Number" value={accNo} setValue={setaccNo}   ste={false}/>
      {/* <CustomInput placeholder="Start date" value={startdate} setValue={setstartdate}   ste={false}/> */}
     <View style={{borderWidth:1 ,justifyContent:'space-around',alignItems:'center',flexDirection:'row',backgroundColor:'white',marginTop:20,height:45,borderRadius:2 ,borderColor:'#e8e8e8'}}>
     <Text style={{color:'black',fontSize:20}}>{startdate.getDate()}-{startdate.getMonth()}-{startdate.getFullYear()}</Text>
      {/* <Button title="Show Date Picker"  /> */}
      <Pressable onPress={showDatePicker}>
      <Ei name='calendar' size={40} style={{color:'green'}}/>
      </Pressable>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmstartdate}
        onCancel={hideDatePicker}
      />
     </View>


     <View style={{borderWidth:1 ,justifyContent:'space-around',alignItems:'center',flexDirection:'row',backgroundColor:'white',marginTop:20,height:45,borderRadius:2 ,borderColor:'#e8e8e8' }}>
     <Text style={{color:'black',fontSize:20}}>{enddate.getDate()}-{enddate.getMonth()}-{enddate.getFullYear()}</Text>
      {/* <Button title="Show Date Picker"  /> */}
      <Pressable onPress={showDatePicker}>
      <Ei name='calendar' size={40} style={{color:'green'}}/>
      </Pressable>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmenddate}
        onCancel={hideDatePicker}
      />
     </View>



    
      <View style={{marginTop:50}}>
      <Btn btntext='Generate' type='primary'/>
      </View>
    </View>
  )
}

export default BankStatement