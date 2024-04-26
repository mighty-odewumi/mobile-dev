import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import ScrollMenu from './components/ScrollMenu';
import LoginScreen from './components/LoginScreen';

export default function App() {

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 20, }}>I'm so excited right now :), innit?😎</Text> */}
      <LittleLemonHeader />
      <StatusBar style="auto" />
      {/* <WelcomeScreen /> */}
      <LoginScreen />
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
});
