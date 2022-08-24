import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer, StackActions, DefaultTheme } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import  Home  from './screens/MealsApp/Home'
import Meals from './screens/MealsApp/Meals'
import Details from './components/Details'
import { TailwindProvider } from 'tailwindcss-react-native'




const Stack = createNativeStackNavigator()

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'rgba(255,255,255,1)'
    }
}  

const homeOptions = {
    title: 'Home Page'
}

const Test = () => (<View><Text>hello</Text></View>)
const App = () => {
    const [fontsLoaded] = useFonts({
        'roboto-slab-regular': require('./assets/fonts/RobotoSlab-Regular.ttf')
    })


    if (!fontsLoaded) return null
    return (
        <TailwindProvider>
            <NavigationContainer theme={theme}>
                <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName="HomeScreen">
                    <Stack.Screen name="HomeScreen" component={Home} options={homeOptions}  />
                    <Stack.Screen name="MealsScreen" component={Meals} />
                </Stack.Navigator>
            </NavigationContainer>
        </TailwindProvider>
    )
}

export default App

