import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import ScrollMenu from './components/ScrollMenu';
import LoginScreen from './components/LoginScreen';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const loggedInText = (
    <View style={styles.loggedInText}>
      <Text>Welcome to your Account :)</Text>
      <Text>You are logged in!</Text>
    </View>
  );

  const LogoTitle = () => {
    return (
      <Image 
        source={require("./assets/favicon.png")} 
        style={{ 
          height: 40, 
          width: 300,
          alignSelf: "center",
          resizeMode: "contain",
        }}
      />
    )
  }

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <LittleLemonHeader /> */}
        <StatusBar style="auto" />
        {/* {loggedIn ? (<LoginScreen setLoggedIn={setLoggedIn} />) : loggedInText }  */}
        <Stack.Navigator 
          initialRouteName='Welcome' 
          screenOptions={{headerStyle: {backgroundColor: ""}, headerTitleStyle: {color: "white"} }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title: "Home", headerTitle: () => <LogoTitle />}}/>
          <Stack.Screen name="Menu" component={ScrollMenu}/>
        </Stack.Navigator>
        <Footer /> 
      </View>
      
    </NavigationContainer>
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
