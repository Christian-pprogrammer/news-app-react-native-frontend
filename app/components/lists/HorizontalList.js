import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Title from '../common/Title'
import SmallCard from '../cards/SmallCard'
import { useNavigation } from '@react-navigation/native';

const HorizontalList = ({title, data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.listStyle}>
      <Title size={20}>{title}</Title>
      <FlatList 
        data={data} 
        keyExtractor={item=>item.id} 
        horizontal 
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><SmallCard onPress={()=>navigation.push("NewsDetail", {item})} item={item} /> }/>
    </View>
  )
}

export default HorizontalList

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15
  }
})