import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import NavigationStack from './src/navigation/NavigationStack'
import NavigationTab from './src/navigation/NavigationTab'
import NavigationDrawer from './src/navigation/NavigationDrawer'

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
