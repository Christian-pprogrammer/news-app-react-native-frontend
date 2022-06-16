import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'

export default function FlatCard({item, onPress}) {
  const { thumbnail, title, description } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: thumbnail}} style={styles.image} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <Subtitle>{description}</Subtitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    height: 80
  },
  image: {
    flex: 0.35,
    height: '100%'
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5
  }
})