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
      
      <View style={{borderWidth:1,height:50,flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto'}}>
        <View >
        <Text style={{fontSize:20,color:'#4C76E2'}}>Name</Text>
        </View>
        <View>
        <Text style={{fontSize:20,color:'black'}}>{userdetails.Name}</Text>
        </View>
      </View>

      <View style={{borderWidth:1,height:50,flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto'}}>
        <View >
        <Text style={{fontSize:18,color:'#4C76E2'}}>Membership No</Text>
        </View>
        <View>
        <Text style={{fontSize:20,color:'black'}}>{userdetails.MEMBERSHIP_NO}</Text>
        </View>
      </View>

      <View style={{borderWidth:1,height:50,flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto'}}>
        <View >
        <Text style={{fontSize:20,color:'#4C76E2'}}>Mobile</Text>
        </View>
        <View>
        <Text style={{fontSize:17,color:'black'}}>+91 {userdetails.PhoneNo}</Text>
        </View>
      </View>
      <View style={{borderWidth:1,height:50,flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto'}}>
        <View >
        <Text style={{fontSize:20,color:'#4C76E2'}}>Email</Text>
        </View>
        <View>
        <Text style={{fontSize:20,color:'black'}}>{userdetails.EMail?userdetails.EMail:'NULL'}</Text>
        </View>
      </View>

      <View style={{borderWidth:1,height:50,flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto'}}>
        <View >
        <Text style={{fontSize:20,color:'#4C76E2'}}>PanCard</Text>
        </View>
        <View>
        <Text style={{fontSize:20,color:'black'}}>{userdetails.Pancard?userdetails.Pancard:"NULL"}</Text>
        </View>
      </View>

      <View style={{borderWidth:1,height:150,flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto'}}>
        <View >
        <Text style={{fontSize:20,color:'#4C76E2'}}>Address</Text>
        </View>
        <View style={{width:'35%'}}>
        <Text style={{fontSize:15,color:'black'}}>{userdetails.Address}</Text>
        </View>
      </View>

      <View style={{borderWidth:1,height:50,flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto'}}>
        <View >
        <Text style={{fontSize:20,color:'#4C76E2'}}>Nominee</Text>
        </View>
        <View>
        <Text style={{fontSize:15,color:'black'}}>{userdetails.NOMINEE}</Text>
        </View>
      </View>

      <View style={{borderWidth:1,height:50,flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%',marginTop:20,marginLeft:'auto',marginRight:'auto'}}>
        <View >
        <Text style={{fontSize:20,color:'#4C76E2'}}>Created</Text>
        </View>
        <View>
        <Text style={{fontSize:15,color:'black'}}>{userdetails.dtCreatedDate}</Text>
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