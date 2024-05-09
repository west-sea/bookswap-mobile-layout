import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./Start";
import Main from "./Main";
import Welcome from "./Welcome";
import Onboarding2 from "./Onboarding2";
import Home from "./Home";
import Message from "./Message";


//const Start = "Start";
//const Main = "Main";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Message" component={Message}/>
    </Tab.Navigator>
  );
}
