
import Login from './Login';
import Register from './Register';
import HomeScreen from './../homeScreen/index';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
function LoginStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gesturesEnabled: false
  }}>
 
      <Stack.Screen name="Login" component={Login} initialRouteName={Login} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
export default LoginStack;