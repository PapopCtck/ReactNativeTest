import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Title extends Component {
    
    render() {
        const {children} = this.props
        return (
            <View style={styles.header}>
                <Text style={styles.title}> {children} </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title:{
        textAlign : 'center',
        color: 'white'
    },
    header:{
        backgroundColor: 'skyblue',
        padding: 15
    }
})
