import React, { Component } from 'react'
import { Text, View,StyleSheet,ScrollView, } from 'react-native'
import Title from './Title'
import Input from './Input'
import List from './List'
import Footer from './Footer'
import StatusBar from './StatusBar'

export default class Todo extends Component {
    componentDidMount(){
        console.log(this.props.navigation.dangerouslyGetParent().getParam('username'))
    }
    static navigationOptions = {
        headerTitle: "Title"
    }
    state = {
        todos: ['Sample','Another One']
      }
      onAddTodo = (text) =>{
        const {todos} = this.state
        this.setState({
          todos: [text,...todos]
        })
      }
      onRemoveTodo = (index) =>{
        const {todos} =this.state
        this.setState({
          todos:todos.filter((todo,i)=> i !== index)
        })
      }
      onRemoveAll = ()=>{
        this.setState({
          todos: []
        })
      }
      render() {
        const {todos} =this.state

        const username = this.props.navigation.dangerouslyGetParent().getParam('username')
        return (
          <View style={styles.container}>
              <StatusBar
              backgroundColor = "skyblue"
              barStyle = "light-content"
              ></StatusBar>
              <Title>Welcome {username}</Title>
            <Input
              placeholder={'Type a todo, then hit enter!'}
              onSubmitText={this.onAddTodo}
            />
            <ScrollView
          >
            <List
            list={todos}
            onPressItem={this.onRemoveTodo}
            />
            </ScrollView>     
            <Footer 
            onRemoveAll={this.onRemoveAll}></Footer>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
  });
  