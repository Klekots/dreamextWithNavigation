import React from "react";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Ionicons} from "@expo/vector-icons";

import {StartScreen} from "../screens/StartScreen";
import {ProductsScreen} from "../screens/ProductsScreen";
import {AuthScreen} from "../screens/AuthScreen";
import {ProfileScreen} from "../screens/ProfileScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Products: {
      screen: ProductsScreen,
      navigationOptions: {
        tabBarIcon: info => (
          <Ionicons name="ios-albums" size={25} color={info.tintColor} />
        )
      }
    },
    Start: {
      screen: StartScreen,
      navigationOptions: {
        tabBarIcon: info => (
          <Ionicons name="ios-hand" size={25} color={info.tintColor} />
        )
      }
    },
    MyProfile: {
      screen: ({ screenProps, navigation }) => {
        if (screenProps.authStatus) {
          return <ProfileScreen params={screenProps} {...navigation} />;
        } else {
          return <AuthScreen params={screenProps} {...navigation} />;
        }
      },
      navigationOptions: {
        tabBarIcon: info => (
          <Ionicons name="ios-contact" size={25} color={info.tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Start",
    tabBarOptions: {
      activeTintColor: "#9323F3",
      labelStyle: {
        fontSize: 14
      },
      style: {
        backgroundColor: "white"
      }
    }
  }
);

export default createAppContainer(TabNavigator);
