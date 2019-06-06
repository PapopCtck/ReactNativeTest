import React, { Component } from 'react'
import { Text, View,Button,StyleSheet,TextInput} from 'react-native'


export default class Login extends Component {
    state = {
        username : '',
        // password :''
    }
    static navigationOptions = {
        header: null,
        headerVisible: false
        
    }
    handleLogin = () =>{
        if(!this.state.username){
           return alert('Please input username')
        }
        // if(!this.state.password){
        //    return alert('input password')
        // }
        this.props.navigation.navigate('Todo' , {
            username : this.state.username
        })
    }
    render() {
        return (
            <View style={styles.Login}>
                {/* <Text> Login </Text> */}
                <TextInput
                style={styles.Input}
                    placeholder="Please input user name"
                    onChangeText={
                        (username) => this.setState({username})
                    }
                ></TextInput>
                {/* <TextInput
                style={styles.Input}
                    secureTextEntry={true}
                    placeholder="password"
                    onChangeText={
                        (password) => this.setState({password})
                    }
                ></TextInput> */}
                <Button
                title="login"
                onPress={this.handleLogin}
                >
                   
                </Button>
                {/* <Button
                title="Todo"
                onPress={()=>this.props.navigation.navigate('Todo')}
                ></Button> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Login: {
        flex : 1,
        justifyContent : "center",
        alignItems: "center"
        
    },
    Input:{
        padding:15,
        height:50,

    }
})

