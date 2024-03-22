import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from './src/components/LoginForm'
// View o ScrollView: Contenedor de elementos

export default function App() {
  return (
    <View style={styles.container}>
      <LoginForm />
      <StatusBar style='auto' />
    </View>
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
