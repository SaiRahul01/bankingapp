import { View, Text,StyleSheet,Image,ToastAndroid, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import Monkey from '../../../assets/images/monkey.png'
import auth,{firebase} from '@react-native-firebase/auth'
import Btn from '../../components/buttons/Loginbtn'
import {useNavigation} from '@react-navigation/native'
import MI from 'react-native-vector-icons/MaterialIcons'
import profileicon from '../../../assets/images/profile.png'
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'


const Logout = (props) => {
  const navigationtool=useNavigation();
  const [userdetails, setuserdetails] = useState({})

  useEffect(() => {

    let a = "http://40.80.91.121:5001/api/CustomerProfile";
    const dd = {
      
        "custId": props.custid,
        
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
          
            setuserdetails(data[0])
            console.log(userdetails);
            
           
            
           
            

        })
        .catch((error) => {

        });
    







  }, [])
  

    const handleLogout=()=>{
        
        setTimeout(() => {
          props.setisloggedin(false)
        }, 500);
        ToastAndroid.show("Logged out!",1000);
    

    }
  return (
    <ScrollView>
      <View style={[styles.root,{marginBottom:100}]}>
      
      <Image source={profileicon} style={{height:120,width:120,marginLeft:'auto',marginRight:'auto',marginTop:30}} resizeMode="contain"/>
      {/* <Text style={{textAlign:'center',marginTop:50,fontSize:30,fontFamily:'Slabo27px-Regular'}}>My Profile</Text> */}
      
      <View style={{ elevation:2,borderWidth:1,height:50,flexDirection:'row',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto',backgroundColor:'white',borderColor:'#e8e8e8'}}>
        <View >
        <Text style={{fontSize:18,color:'#4C76E2',marginLeft:'20%'}}>Name</Text>
        </View>
        <View>
        <Text style={{fontSize:18,color:'black',marginLeft:'25%'}}>{userdetails.Name}</Text>
        </View>
      </View>

      <View style={{elevation:2,borderWidth:1,height:50,flexDirection:'row',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto',backgroundColor:'white',borderColor:'#e8e8e8'}}>
        <View >
        <Text style={{fontSize:18,color:'#4C76E2',marginLeft:'13%'}}>Membership No</Text>
        </View>
        <View>
        <Text style={{fontSize:18,color:'black',marginLeft:'10%'}}>{userdetails.MEMBERSHIP_NO}</Text>
        </View>
      </View>

      <View style={{elevation:2,borderWidth:1,height:50,flexDirection:'row',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto',backgroundColor:'white',borderColor:'#e8e8e8'}}>
        <View >
        <Text style={{fontSize:20,color:'#4C76E2',marginLeft:'20%'}}>Mobile</Text>
        </View>
        <View>
        <Text style={{fontSize:17,color:'black',marginLeft:'20%'}}>+91 {userdetails.PhoneNo}</Text>
        </View>
      </View>
      <View style={{elevation:2,borderWidth:1,height:50,flexDirection:'row',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto',backgroundColor:'white',borderColor:'#e8e8e8'}}>
        <View >
        <Text style={{fontSize:18,color:'#4C76E2',marginLeft:'22%'}}>Email</Text>
        </View>
        <View>
        <Text style={{fontSize:18,color:'black',marginLeft:'40%'}}>{userdetails.EMail?userdetails.EMail:'NULL'}</Text>
        </View>
      </View>

      <View style={{elevation:2,borderWidth:1,height:50,flexDirection:'row',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto',backgroundColor:'white',borderColor:'#e8e8e8'}}>
        <View >
        <Text style={{fontSize:18,color:'#4C76E2',marginLeft:'20%'}}>PanCard</Text>
        </View>
        <View>
        <Text style={{fontSize:18,color:'black',marginLeft:'33%'}}>{userdetails.Pancard?userdetails.Pancard:"NULL"}</Text>
        </View>
      </View>

      <View style={{elevation:2,borderWidth:1,height:'auto',flexDirection:'row',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto',backgroundColor:'white',borderColor:'#e8e8e8'}}>
        <View >
        <Text style={{fontSize:18,color:'#4C76E2',marginLeft:'20%'}}>Address</Text>
        </View>
        <View style={{width:'58%'}}>
        <Text style={{ padding:10,fontSize:15,color:'black',marginLeft:'15%',flexWrap:'wrap',flex:1,marginTop:'auto',height:'auto',paddingTop:'auto',marginTop:'10%',marginBottom:'10%'}}>{userdetails.Address}</Text>
        </View>
      </View>

      <View style={{elevation:2,borderWidth:1,height:50,flexDirection:'row',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto',backgroundColor:'white',borderColor:'#e8e8e8'}}>
        <View >
        <Text style={{fontSize:18,color:'#4C76E2',marginLeft:'20%'}}>Nominee</Text>
        </View>
        <View>
        <Text style={{fontSize:18,color:'black',marginLeft:'20%'}}>{userdetails.NOMINEE}</Text>
        </View>
      </View>

      <View style={{elevation:2,borderWidth:1,height:50,flexDirection:'row',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto',backgroundColor:'white',borderColor:'#e8e8e8'}}>
        <View >
        <Text style={{fontSize:18,color:'#4C76E2',marginLeft:'20%'}}>Created</Text>
        </View>
        <View>
        <Text style={{fontSize:18,color:'black'}}>{userdetails.dtCreatedDate}</Text>
        </View>
      </View>
    
     
      
    </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    root:{
  
    },
    title:{

    },
    welcometxt:{
      fontSize:20,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:80,
      marginBottom:80,
      color:'red'
    },
    monkeyimg:{
      height:'30%',
      width:'40%',
      alignItems:'center',
      justifyContent:'center',
      marginLeft:'auto',
      marginRight:'auto',
      marginBottom:80
    },
    profile:{

      marginTop:40,
      fontSize:40,
      textAlign:'center',
      color:'#076cfa',
   
    },
    row:{
      
    }
})

export default Logout