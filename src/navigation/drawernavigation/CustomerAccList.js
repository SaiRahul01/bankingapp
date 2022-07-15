import { View, Text ,StyleSheet,ScrollView,RefreshControl} from 'react-native'
import React, { useEffect, useState } from 'react'

const CustomerAccList = (props) => {
const [customeracclist, setcustomeracclist] = useState([])
const [isrefreshing, setisrefreshing] = useState(false)


    const getcustomeraccdetails = () => {


        let a = "http://40.80.91.121:5001/api/CustomerAccountList";
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
          
          setcustomeracclist(data.payload)
            console.log(customeracclist);
    
    
    
          })
          .catch((error) => {
    
          });
    
    
    
    
      }
      const handlerefresh=()=>{
        setisrefreshing(true);
        setTimeout(() => {
          setisrefreshing(false);
          getcustomeraccdetails()
        }, 2000);
      }


      useEffect(() => {
        getcustomeraccdetails()
      
        
      }, [])
      
  return (
    <ScrollView refreshControl={<RefreshControl refreshing={isrefreshing} onRefresh={handlerefresh}/>}>
    <View style={styles.root}>

{/* <Text style={styles.welcometxt}>My Accounts</Text> */}

{/* <Image source={Monkey} style={styles.monkeyimg} resizeMode="contain"/> */}
{
customeracclist.map((item) => (
  <View key={item.id} style={styles.card} >
    <View style={styles.row}>
      <View>
        <Text style={{color:'#0384fc',marginLeft:'20%',fontSize:18}}>Branch Code</Text>
      </View>
      <View>
        <Text  style={{color:'black',marginLeft:30,fontSize:18}}>{item.BranchCode}</Text>
      </View>

    </View>
    <View style={styles.row}>

      <View>
        <Text  style={{color:'#0384fc',marginLeft:'5%',fontSize:15}} >Customer Account No</Text>
      </View>
      <View>
        <Text style={{color:'black',marginLeft:30,fontSize:18}}>{item.CustAcNo}</Text>
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

export default CustomerAccList