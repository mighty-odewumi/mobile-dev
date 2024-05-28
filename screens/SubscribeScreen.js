import { useState } from 'react';
import { View, Image, TextInput, Pressable, Alert, Text, StyleSheet, } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {

  const [email, setEmail] = useState(null);

  function handlePress() {
    Alert.alert("Thanks for subscribing to our newsletter!");
    setEmail("");
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/little-lemon-logo.png")}
        style={styles.image}
      />

      <Text style={styles.introText}>Subscribe to our newsletter to get our latest delicious recipes!</Text>

      <TextInput 
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder='Enter your email address'
        style={styles.input}
      />

      <Pressable 
        disabled={!validateEmail(email)} 
        onPress={() => handlePress()}
      >
        <Text style={[styles.button, validateEmail(email) ? {backgroundColor: "blue" } : { backgroundColor: "grey"}]}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
    textAlign: "center",
  },
  image: {
    resizeMode: "center",
    width: 200,
    height: 200,
    margin: 70,
    marginBottom: 20,
  },
  introText: {
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    margin: 20,
    padding: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#56ffff",
    borderRadius: 20,
  },
  button: {
    color: "white",
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
    margin: 20,
  },
});
