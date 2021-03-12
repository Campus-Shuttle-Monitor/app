import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height * 0.6
const width = Dimensions.get('window').width * 0.85

const styles = StyleSheet.create({
  map: {
    height,
    width,
    borderRadius: 15
  }
})

const Map = () => {
  return (
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 37.9485,
        longitude: -91.77154,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121
      }}
    ></MapView>
  )
}

export default Map
