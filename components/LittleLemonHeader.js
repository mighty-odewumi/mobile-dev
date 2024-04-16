import React from "react";
import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{
      flex: .2,
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Text 
        style={{ 
          fontSize: 20,
          padding: 20,
          color: "white",
        }}
        numberOfLines={1}
      >
        Welcome to <Text style={{ fontWeight: "bold", }}>Little Lemon :)</Text>
      </Text>
    </View>
  )
}
