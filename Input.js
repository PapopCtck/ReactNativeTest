import React, { Component } from 'react'
import { Text, View,TextInput,StyleSheet } from 'react-native'

export default class Input extends Component {
    state = {
        text:''
    }
    onChangeText = (text) => this.setState({text})
    onSubmitText = () => {
        const {onSubmitText} = this.props
        const {text} = this.state
        if(!text) return
        onSubmitText(text)
        this.setState({text:''})
    }
    render() {
        
        const {placeholder} = this.props
        const {text} = this.state
        return (
            <TextInput 
            style={styles.input}
            placeholder={placeholder}
            value={text}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitText}
            />
        )
    }
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        height:50
    }
})
