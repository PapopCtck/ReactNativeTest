import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

export default class FetchUserLocation extends Component {
    
    render() {
        return (
            <View>
                
                <Button title="Get location" onPress={this.props.handleGetLocation}></Button>
            </View>
        )
    }
}
