import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import ScrollMenu from './components/ScrollMenu';
import LoginScreen from './components/LoginScreen';
import { useState } from 'react';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const loggedInText = (
    <View style={styles.loggedInText}>
      <Text>Welcome to your Account :)</Text>
      <Text>You are logged in!</Text>
    </View>
  );
  
  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 20, }}>I'm so excited right now :), innit?😎</Text> */}
      <LittleLemonHeader />
      <StatusBar style="auto" />
      <WelcomeScreen />
      {/* {loggedIn ? (<LoginScreen setLoggedIn={setLoggedIn} />)
        : loggedInText
      } */}
      
      {/* <ScrollMenu /> */}
      {/* <Footer /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  loggedInText: {
    justifyContent: "center",
    textAlign: "center",
  },
});
