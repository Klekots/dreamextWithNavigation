import React from "react";
import {StyleSheet, View, TouchableOpacity, Text, Alert} from "react-native";


export const ProfileScreen = ({params, navigate}) => {

  const logOut = () => {
    Alert.alert("Log out");
    params.setAuthStatus(false);
    navigate("Start");
  }

  return(
    <>
      <View style={styles.alert}>
        <Text>My profile</Text>
      </View>
      
      <TouchableOpacity style={[styles.btn, styles.btnDanger]} onPress={()=>logOut()}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  alert: {
    backgroundColor: "#00FF7F",
    marginVertical: 50,
    marginHorizontal: 20,
    padding: 30,
    borderRadius: 10,
    alignItems: "center"
  },
  btn: {
    padding: 20,
    marginVertical: 10,
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "white"
  },
  btnDanger: {
    backgroundColor: "red"
  }
})