import { Text, Button, View } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

export default function HomeScreen(props) {
  const { navigation } = props
  const goToSettings = () => {
    navigation.navigate('Settings')
  }
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button title='Ajustes' onPress={goToSettings} />
    </View>
  )
}
