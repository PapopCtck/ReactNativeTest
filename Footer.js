import React, { Component } from 'react'
import { Text, View,Button,StyleSheet } from 'react-native'

export default class Footer extends Component {
    
    render() {
        const {onRemoveAll} = this.props
        return (
            <View style={styles.footer}>
            <Button
            title="Delete All"
            color="red"
            onPress={()=>onRemoveAll()}
            >
            
            </Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    footer : {
        padding : 15
    }
})