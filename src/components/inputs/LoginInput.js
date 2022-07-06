import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const LoginInput = ({value,setValue,placeholder,ste,type}) => {
  return (
    <View style={p.root}>
      
      <TextInput 
      keyboardType={type}
      placeholder={placeholder}
      style={p.inputstyle}
      value={value}
      onChangeText={setValue}
      secureTextEntry={ste}
      
      />
    </View>
  )
}
const p=StyleSheet.create({
    root:{
        backgroundColor:'white',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10 ,
        marginVertical:7
    },
    inputstyle:{

    }
})

export default LoginInput