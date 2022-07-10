import React, { useContext ,useState,useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,

  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/navigation/tabnavigation/Tabs';
import AuthStack from './src/navigation/stacknavigation/AuthStack';
import Drawerbox from './src/navigation/drawernavigation/Drawer.js'




const App = () => {

  // const {user, setuser} = useContext(AuthContext)
  // const [initializing, setInitializing] = useState(true);
  const [usermobilenumber, setusermobilenumber] = useState('')
  const [custid, setcustid] = useState('')
  const [isloggedin, setisloggedin] = useState(false)
  const [isloading, setisloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
       setisloading(false)
    }, 2000);
  }, [])
  
 
  const Stack=createNativeStackNavigator()
  if(isloading){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator  size={'large'}/>
      </View>
    )
  }



  return (

        <NavigationContainer>
            {
                isloggedin?
                  <Drawerbox custid={custid} setcustid={setcustid} isloggedin={isloggedin} setisloggedin={setisloggedin}/> 
                :<AuthStack custid={custid} setcustid={setcustid} isloggedin={isloggedin} setisloggedin={setisloggedin}/>
             
            }
          

          


        </NavigationContainer>

  
   
   
  );
};

const styles = StyleSheet.create({
  root:{

    backgroundColor:'#F9FBFC'
  }
});

export default App;
