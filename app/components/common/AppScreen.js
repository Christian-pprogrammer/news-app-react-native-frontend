import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import React from 'react'

const AppScreen = ({children}) => {
  return (
    <ScrollView style={styles.container}>
      {children}
    </ScrollView>
  )
}

export default AppScreen

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1
  }
})