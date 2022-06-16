import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Title from '../common/Title'
import Subtitle from '../common/Subtitle'

export default function BlockCard({style, imageStyle, item, onPress}) {
  const { thumbnail, title, description } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container,style]}>
        <Image source={{uri: thumbnail}} style={[styles.image, imageStyle]} />
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
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200
  },
  contentContainer: {
    padding: 5
  }
})