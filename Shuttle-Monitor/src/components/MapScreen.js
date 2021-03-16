import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, View, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import Map from './Map'
import mapScreenStyles from '../styles/MapScreenStyles'

const image = '../assets/AppBackground.png'

const MapScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View style={ mapScreenStyles.container }>
        <ImageBackground source={require('../assets/AppBackground.png')} style={mapScreenStyles.image}>
          <View style={ mapScreenStyles.mapInfo }>
            <View style={ mapScreenStyles.operationalHours }>
              <Text style={{ fontSize: 20, alignSelf: 'flex-start', color: 'grey'}}>Operational Hours:</Text>
            </View>
            <View style={ mapScreenStyles.times }>
              <Text style={{ color: 'grey' }}>7:30am-10:00am</Text>
              <Text style={{ color: 'grey' }}>2 shuttles</Text>
            </View>
            <View style={ mapScreenStyles.times }>
              <Text style={{ color: 'grey' }}>10:00am-5:00pm</Text>
              <Text style={{ color: 'grey' }}>1 shuttle</Text>
            </View>
          </View>
          <View style={ mapScreenStyles.map }>
            <Map />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen
