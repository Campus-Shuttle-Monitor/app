import React from 'react'
import MapView from 'react-native-maps'
import {Dimensions, StyleSheet} from 'react-native'

const height = Dimensions.get('window').height * 0.6
const width = Dimensions.get('window').width * 0.85

const styles = StyleSheet.create({
    map: {
        height,
        width,
        borderRadius: 15
    }
})

export const Map = (): JSX.Element => (
    <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
            latitude: 37.9485,
            longitude: -91.77154,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
        }}
    />
);
