import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import {MapView} from 'expo'

export default class UsersMap extends Component {
    render() {
        return (
            <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={this.props.userLocation}
        provider={MapView.PROVIDER_GOOGLE}

      >
          <MapView.Marker coordinate={this.props.userLocation}/>
      </MapView>
        )
    }
}
const styles = StyleSheet.create({
    map:{
        flex:1,
        position:'absolute',
        top:50,
        bottom:0,
        left:0,
        right:0
    }
})
