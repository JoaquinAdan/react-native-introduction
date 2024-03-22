import React from 'react'
import { TextInput, Button, View } from 'react-native'

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder='Correo electrónico' />
      <TextInput placeholder='Contraseña' secureTextEntry />
      <Button title='Iniciar sesión' onPress={() => console.log('Enviado')} />
    </View>
  )
}
