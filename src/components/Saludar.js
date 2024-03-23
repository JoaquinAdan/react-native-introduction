import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

export default function Saludar({ firstname, lastname }) {
  return <Text>¡Hola{(firstname || lastname) && ', ' + `${firstname}${lastname ? ' ' + lastname : ''}`}!</Text>
}

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
}
