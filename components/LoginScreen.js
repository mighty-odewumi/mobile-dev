import { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TextInput, } from "react-native";

export default function LoginScreen() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to Your Account</Text>
      <TextInput 
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput 
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        style={styles.input}
        keyboardType="default"
        secureTextEntry={true}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 40,
  },
  regularText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#e5e5e5",
    padding: 10,
    margin: 10,
  }
});
