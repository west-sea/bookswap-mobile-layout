import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./Splash";
import Start from "./Start";
import Main from "./Main";
import Welcome from "./Welcome";
import Onboarding2 from "./Onboarding2";
import Home from "./Home";
import Search from "./Search";
import HomeNotification from "./HomeNotification";


//const Start = "Start";
//const Main = "Main";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
      <Stack.Screen name="Search" component={Search} options={{headerShown: false,}}/>
      <Stack.Screen name="HomeNotification" component={HomeNotification} options={{headerShown: false,}}/>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false,}}/>
      <Stack.Screen name="Start" component={Start} options={{headerShown: false,}}/>
      <Stack.Screen name="Main" component={Main} options={{headerShown: false,}}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false,}}/>
      <Stack.Screen name="Onboarding2" component={Onboarding2} options={{headerShown: false,}}/>
      
      
    </Stack.Navigator>
  );
}
