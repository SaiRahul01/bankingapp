import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,

  View,
} from 'react-native';
import LoginScreen from './src/screens/signinscreens/Login'
import RegisterScreen from './src/screens/Registerscreens/Register'



const App = () => {
 

 

  return (
    <SafeAreaView style={styles.root}  >
     <RegisterScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{

    backgroundColor:'#F9FBFC'
  }
});

export default App;
