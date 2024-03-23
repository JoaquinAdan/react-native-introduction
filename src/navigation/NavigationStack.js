import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SettingsScreen from '../screens/SettingsScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator()

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}
