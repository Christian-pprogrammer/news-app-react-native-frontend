import { View, Text } from 'react-native'
import React from 'react'
import BlockCard from './cards/BlockCard'

import { useNavigation } from '@react-navigation/native'

const FeaturedNews = ({item}) => {
  const navigation = useNavigation();
  return (
    <BlockCard item={item} style={{marginVertical: 15}} onPress={()=>navigation.navigate('NewsDetail', { item })} />
  )
}

export default FeaturedNews