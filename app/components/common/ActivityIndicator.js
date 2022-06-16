import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const ActivityIndicator = ({visible}) => {
  if(!visible) {
    return null;
  }
  return (
    <View style={styles.container}>
      {
        Platform.OS != 'web' ? 
        <LottieView source={require('../../../98288-loading.json')} autoPlay={true} loop={true} />:
        <Text>Loading...</Text>
      }
      
    </View>
  )
}

export default ActivityIndicator

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  }
})