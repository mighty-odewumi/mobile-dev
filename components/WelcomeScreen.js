import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Alert, Image, ImageBackground, } from "react-native";

export default function WelcomeScreen() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  return (
    // <KeyboardAvoidingView 
    //   style={styles.container} 
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
      <View keyboardDismissMode="on-drag" style={styles.container} >

        <ImageBackground 
          source={require("../assets/favicon.png")}
          style={styles.image}
          resizeMode="contain"
        >
          <Text style={styles.text}>
            Little Lemon, your local Mediterranean Bistro
          </Text>
        </ImageBackground>

        {/* <Image 
          source={require("../assets/favicon.png")}
          style={styles.image}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel="Image"
        /> */}

        
        {/* <Image 
          source={require("../assets/splash.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Image 
          source={require("../assets/icon.png")}
          style={styles.image}
          resizeMode="contain"
        /> */}

        {/* <TextInput 
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
        /> */}
      </View>
    // </KeyboardAvoidingView>
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
    color: "blue",
  },
  input: {
    backgroundColor: "#e5e5e5",
    color: "blue",
    padding: 10,
    margin: 10,
  },
  message: {
    paddingBottom: 140,
  },
  image: {
    // height: 100,
    // width: 300,
    flex: 1,
    justifyContent: "center",
  },
});
