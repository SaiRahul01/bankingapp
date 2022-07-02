import { View, Text ,StyleSheet,Pressable} from 'react-native'
import React from 'react'

const Loginbtn = ({onpress,btntext,type}) => {
  return (
    <Pressable style={[styles.root,styles[`root_${type}`]]} onPress={onpress}>
      <Text style={[styles.logintxt,styles[`logintxt_${type}`]]}>{btntext}</Text>
    </Pressable >
  )
}
const styles=StyleSheet.create({
    root:{
       
        width:'100%',
        padding:15,
        marginVertical:10,
        alignItems:'center',
        borderRadius:5
    },
    root_primary:{
        backgroundColor:'#3B71F3',
      
    },
    root_ter:{
        backgroundColor:'white',
        
    },
    root_second:{
        borderColor:'#3B71F3',
        borderWidth:1
    },
    logintxt:{
        color:'white',
        fontWeight:'bold'
    },
    logintxt_ter:{
        color:'gray',
        
    },
    logintxt_primary:{
        color:'white'
    },
    logintxt_second:{
        color:'#3B71F3'
    }

})

export default Loginbtn