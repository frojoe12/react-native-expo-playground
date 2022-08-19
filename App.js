import React, { useCallback, useEffect, useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, StackActions, DefaultTheme } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Inter_300Light } from '@expo-google-fonts/inter';
import Home from "./components/Home"
import Details from "./components/Details"


const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgba(255,255,255,1)"
  }
}  

const homeOptions = {
  title: "Home Page"
}


const App = () => {
  const [loaded] = useFonts({
    RobotoSlabRegular: require("./assets/fonts/RobotoSlab-Regular.ttf")
  })
  if (!loaded) return null
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={homeOptions} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

