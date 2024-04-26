import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Alert, } from "react-native";

export default function WelcomeScreen() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [message, setMessage] = useState();

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.text}>
          Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>

        <TextInput 
          value={name} 
          onChangeText={setName} 
          placeholder="Enter your name"
          style={styles.input}
          keyboardType="default" // numeric, twitter, url, email-address, phone-pad
          multiline={false}
          onFocus={() => Alert.alert("Name is focused")}
          onBlur={() => Alert.alert("Blur is active")}
          clearButtonMode="always" // Available only on ios devices
        />

        <TextInput 
          value={lastName} 
          onChangeText={setLastName} 
          placeholder="Enter your lastname"
          style={styles.input}
          keyboardType="default" // numeric, twitter, url, email-address, phone-pad
          // secureTextEntry={true}
        />
        <TextInput 
          value={message} 
          onChangeText={setMessage} 
          placeholder="Please input your message"
          style={[styles.input, styles.message]}
          keyboardType="default" // numeric, twitter, url, email-address, phone-pad
          multiline={true}
          maxLength={120}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  text: { 
    fontSize: 20,
    padding: 20, 
    textAlign: "center",
  },
  input: {
    backgroundColor: "#e5e5e5",
    color: "blue",
    padding: 10,
    margin: 10,
  },
  message: {
    paddingBottom: 140,
  }
});
