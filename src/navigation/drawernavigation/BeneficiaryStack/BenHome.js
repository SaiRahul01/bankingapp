import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import {useNavigation} from '@react-navigation/native'

const BenHome = (props) => {
    const navigationtool=useNavigation();

  return (
    <View style={styles.roott}>
    

      <Pressable style={[styles.root,styles[`root_primary`]]} onPress={()=>navigationtool.navigate("Add Beneficiary")}>
      <Text style={[styles.logintxt,styles[`logintxt_primary`]]}>Add Beneficiary</Text>
      <FA5 name='angle-double-right' style={{color:'white'}} size={30}/>
      </Pressable >

      <Pressable style={[styles.root,styles[`root_primary`],{marginTop:40}]} onPress={()=>navigationtool.navigate("View Beneficiary")}>
      <Text style={[styles.logintxt,styles[`logintxt_primary`]]}>View Beneficiary</Text>
      <FA5 name='angle-double-right' style={{color:'white'}} size={30}/>
      </Pressable >


    </View>
  )
}
const styles=StyleSheet.create({
    roott:{
        margin:40,
  
        marginTop:'40%'
    },
    root:{
       
        width:'80%',
        padding:15,
        marginVertical:10,
        alignItems:'center',
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-around',
        marginLeft:'10%',
        marginRight:'10%'
    },
    root_primary:{
        backgroundColor:'#3B71F3',
      
    },
    root_danger:{
        backgroundColor:'crimson'
    }
    ,
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
        color:'white',
        fontSize:20
    },
    logintxt_second:{
        color:'#3B71F3'
    }

})

export default BenHome