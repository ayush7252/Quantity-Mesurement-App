import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './src/Screens/Main'
import Length from './src/Screens/Length'
import Temperature from './src/Screens/Temperature'
import Weight from './src/Screens/Weight'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/Screens/Login'
import Signup from './src/Screens/Signup'
import Home from './src/Screens/Home'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    // <Main />
    // <Length />
    // <Temperature />
    // <Weight />
    // <Login />
    // <Signup />
    // <Home />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
        <Stack.Screen name="Length" component={Length} options={{headerShown: false }} />
        <Stack.Screen name="Temperature" component={Temperature} options={{headerShown: false }} />
        <Stack.Screen name="Weight" component={Weight} options={{headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})