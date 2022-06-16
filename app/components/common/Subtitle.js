import { Text } from 'react-native'
import React from 'react'

export default function Subtitle({children, numberOfLines = 2, size = 15}) {
  return (
    <Text 
      numberOfLines={numberOfLines} 
      style={{fontSize: size}}>
        {children}
    </Text>
  )
}
