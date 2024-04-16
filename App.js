import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "space-between",
    }}>
      {/* <Text style={{ fontSize: 20, }}>I'm so excited right now :), innit?😎</Text> */}
      <LittleLemonHeader />
      <StatusBar style="auto" />
      <WelcomeScreen />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
