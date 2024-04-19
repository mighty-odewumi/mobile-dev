import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text 
        style={headerStyles.mainText}
        numberOfLines={1}
      >
        Welcome to <Text style={headerStyles.subText}>Little Lemon :)</Text>
      </Text>
    </View>
  )
}

const headerStyles = StyleSheet.create({
  container: {
    flex: .1,
    backgroundColor: "blue",
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: { 
    fontSize: 20,
    padding: 20,
    color: "white",
  },
  subText: { 
    fontWeight: "bold", 
  }
});
