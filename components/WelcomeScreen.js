import React from "react";
import { View, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ 
        flex: 1,
      }}
    >
      <Text style={{ 
          fontSize: 20,
          padding: 20, 
          textAlign: "center",
        }}
      >
        Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
    </View>
  )
}
