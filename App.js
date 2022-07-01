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



const App = () => {
 

 

  return (
    <SafeAreaView style={styles.root}  >
     <LoginScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{

    backgroundColor:'#F9FBFC'
  }
});

export default App;
