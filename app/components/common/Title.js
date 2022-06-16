import { Text } from 'react-native'
import React from 'react'

export default function Title({children, numberOfLines = 2, size = 18}) {
  return (
    <Text 
      numberOfLines={numberOfLines} 
      style={{fontWeight: 'bold', fontSize: size}}>
        {children}
    </Text>
  )
}
