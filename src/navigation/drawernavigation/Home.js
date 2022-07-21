import { View, Text, StyleSheet, Image, Pressable,RefreshControl } from 'react-native'
import React, { useEffect } from 'react'

import auth, { firebase } from '@react-native-firebase/auth'
import Btn from '../../components/buttons/Loginbtn'
import { useNavigation } from '@react-navigation/native'
import { Table, Row, Rows } from 'react-native-table-component';
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'


const A = (props) => {
  const navigationtool = useNavigation();
  const [accountdetails, setaccountdetails] = useState([])
  const [isrefreshing, setisrefreshing] = useState(false)

  const getcustomerdetials = () => {


    let a = "http://40.80.91.121:5001/api/AccountDetails";
    const dataa = {

      "custId": props.custid
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
        console.log(data.payload);
        setaccountdetails(data.payload)




      })
      .catch((error) => {

      });




  }
  useEffect(() => {
    getcustomerdetials();
  }, [])
  
  const handlerefresh=()=>{
    setisrefreshing(true);
    setTimeout(() => {
      setisrefreshing(false);
      getcustomerdetials()
    }, 2000);
  }




  const handleLogout = () => {

    auth().signOut().then(() => {
      ToastAndroid.show("Logged out", 1000)
      // navigationtool.navigate("LoginScreen")

    })
  }

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={isrefreshing} onRefresh={handlerefresh}/>}>
      <View style={styles.root}>

{/* <Text style={styles.welcometxt}>My Accounts</Text> */}

{/* <Image source={Monkey} style={styles.monkeyimg} resizeMode="contain"/> */}
{
  accountdetails.map((item) => (
    <View key={item.account} style={styles.card} >
      <View style={styles.row}>
        <View>
          <Text style={{color:'#0384fc',marginLeft:'20%',fontSize:18}}>Module</Text>
        </View>
        <View>
          <Text  style={{color:'black',marginLeft:30,fontSize:18}}>{item.Module}</Text>
        </View>

      </View>
      <View style={styles.row}>

        <View>
          <Text  style={{color:'#0384fc',marginLeft:'20%',fontSize:18}} >Account</Text>
        </View>
        <View>
          <Text style={{color:'black',marginLeft:30,fontSize:18}}>{item.account}</Text>
        </View>

      </View>
      <View style={styles.row}>
        <View>
          <Text  style={{color:'#0384fc',marginLeft:'20%',fontSize:18}}>Balance</Text>
        </View>
        <View>
          <Text style={{color:'black',marginLeft:30,fontSize:18}}>${item.Balance}</Text>
        </View>

      </View>


    </View>
    
  ))
}






{/* <Pressable>
  <Btn btntext='Get Details' type='primary' onpress={getcustomerdetials}></Btn>
</Pressable> */}




</View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  root: {
    marginTop:30
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20
  },
  welcometxt: {
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    marginBottom: 40,
    color: 'red'
  },
  monkeyimg: {
    height: '30%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 80
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  card: {
    borderWidth: 1,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 150,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5,
    marginTop:20,
    backgroundColor:'white',
    borderColor:'#e8e8e8',
    elevation:5
    



  },
  row: {

    height: '20%',
    marginBottom: 10,
    marginTop: 10,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    flexDirection: 'row',
  
  

  }
})

export default A