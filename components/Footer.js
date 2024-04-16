import React from "react";
import { Text, View, } from "react-native";

export default function Footer() {
  return (
    <View style={{ 
      backgroundColor: "blue",
      alignItems: "center",
    }}>
      <Text style={{ 
        color: "white",
        padding: 20,
      }}>
        All rights reserved by Little Lemon, 2024
      </Text>
    </View>
  )
}
