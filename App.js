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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import RootNavigator from './navigators/RootNavigator';

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

  // const Stack = createNativeStackNavigator();

  // const Tab = createBottomTabNavigator();

  // const Drawer = createDrawerNavigator();
  
  return (
    <NavigationContainer>
      <RootNavigator />
       {/* <View style={styles.container}> */}
        {/* <LittleLemonHeader /> */}
        <StatusBar style="auto" />
        {/* <Tab.Navigator 
          screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size, }) => {
              let iconName;

              if (route.name === "Welcome") {
                iconName = focused
                  ? "home"
                  : "home-outline"
              } else if (route.name === "Menu") {
                  iconName = "list";
              } else if (route.name === "Settings") {
                iconName = "cog";
              }

              return <Ionicons name={iconName} color={color} size={size} />
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "grey",
          })}
        >
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          <Tab.Screen name="Menu" component={ScrollMenu}/>
          <Tab.Screen name="Settings" component={ScrollMenu}/>
        </Tab.Navigator> */}

        {/* <Footer />  */}
      {/* </View> */}
      
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
