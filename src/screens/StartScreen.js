import React from "react";
import {StyleSheet, Text, View} from "react-native";

export const StartScreen = () =>{
  return(
    <View style={styles.wrap}>
      <Text style={styles.text}>Hello watch products or log in!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00ABF9"
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "yellow"
  }
})