import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TextInput, Alert, TouchableOpacity} from "react-native";

import {getData} from "../../server/server";

export const AuthScreen = ({params, navigate}) =>{

  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [btnStatus, setBtnStatus] = useState(false);

  useEffect(()=>{
    if(loginValue.length > 3 && passwordValue.length > 4){
      setBtnStatus(true)
    } else {
      setBtnStatus(false)
    }
  },[loginValue, passwordValue]);

  const authorization = () =>{
    getData({login: loginValue, password: passwordValue}).then((res)=>{
      if(res.authorize === "ok"){
        Alert.alert("Successful login");
        navigate("Start");
        params.setAuthStatus(true);
      } else {
        Alert.alert("The username or password is incorrect, try again!");
        setLoginValue("");
        setPasswordValue("");
      }
    });
  }

  return(
      <View style={styles.modalWrap}>

        <Text style={[styles.text, styles.container]}>Enter login and password</Text>
        
        <TextInput
          style={[styles.container, styles.input, styles.inputLogin]}
          placeholder="Enter login"
          placeholderTextColor={"black"}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={16}
          value={loginValue}
          onChangeText={text => setLoginValue(text)}
        />

        <TextInput
          style={[styles.container, styles.input, styles.inputPassword]} 
          placeholder="Enter password"
          placeholderTextColor={"black"}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={16}
          secureTextEntry={true}
          value={passwordValue}
          onChangeText={text => setPasswordValue(text)}
        />

        <TouchableOpacity style={styles.confirm,{display: btnStatus ? "flex": "none"}} onPress={()=>authorization()}>
          <Text style={[styles.container, styles.confirmText]}>Authorization</Text>
        </TouchableOpacity>
        
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10
  },
  modalWrap: {
    flex: 1,
    paddingTop: 80,
    justifyContent: "flex-start",
    backgroundColor: "#FFCC66"
  },
  text: {
    textAlign: "center",
    fontSize: 26
  },
  input: {
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 16
  },
  inputLogin: {
    borderColor: "red",
  },
  inputPassword: {
    borderColor: "green",
  },
  confirmText: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "green",
    borderRadius: 10
  }
})