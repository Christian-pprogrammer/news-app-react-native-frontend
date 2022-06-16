import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VerticalList from './lists/VerticalList'

const EntertainmentNews = ({data}) => {
  return (
    <VerticalList title="Entertainment News" data={data} />
  )
}

export default EntertainmentNews

const styles = StyleSheet.create({})