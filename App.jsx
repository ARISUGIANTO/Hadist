import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import DetailScreen from './pages/setting';
import HomeScreen from './pages/home';
import DetailHadis from './pages/detail';
// fontAwesomeIcon
import { library } from '@fortawesome/fontawesome-svg-core';
import { faL, fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
library.add(fas);

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Mytabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#E48F45"
      barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon="fas fa-home" color={color} size={25} />
          ),
        }} />
      <Tab.Screen name="Setting" component={DetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon="info-circle" color={color} size={25} />
          ),
        }} />
    </Tab.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Mytabs}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name="Detail"
          component={DetailHadis}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})