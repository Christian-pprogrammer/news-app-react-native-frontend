import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VerticalList from './lists/VerticalList'

const PoliticalNews = ({data}) => {
  return (
    <VerticalList title="Political News" data={data} />
  )
}

export default PoliticalNews

const styles = StyleSheet.create({})