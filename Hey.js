import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'
import FetchUserLocation from './FetchUserLocation'
import UsersMap from './UsersMap'

export default class Hey extends Component {
    state = {
        userLocation : null,
      }
    handleGetLocation=()=>{
        console.log("Location")
        navigator.geolocation.getCurrentPosition(location => {
            this.setState({
                userLocation : {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
                }
            })
          });
        console.log(this.state)
    }
    render() {
        return (
            <View style={styles.container}>
                <FetchUserLocation style={styles.Map} handleGetLocation={this.handleGetLocation}></FetchUserLocation>
                <UsersMap userLocation={this.state.userLocation}></UsersMap>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex: 1,

        alignItems: "center",
    },

})
