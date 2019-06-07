import React, { Component } from 'react'
import {createStackNavigator,createAppContainer, createSwitchNavigator, createDrawerNavigator,DrawerItems} from 'react-navigation'
import {SafeAreaView,View,Button} from 'react-native'
import Todo from './Todo'
import Login from './Login'
import Hey from './Hey';
import { ScrollView } from 'react-native-gesture-handler';

export const Drawer = createDrawerNavigator(
  {
      Todo : Todo,
      Location : Hey
  },
  {
      contentComponent:(props) => (
          <View style={{flex:1}}>
              <ScrollView forceInset={{ top: 'always', horizontal: 'never' }}>
                  <DrawerItems {...props} />
                  
              </ScrollView>
              <View style={{padding :10}}>
              <Button title="Logout" color="red"/>
              </View>
          </View>
      ),
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle'
  })
const AppNavigator = createSwitchNavigator({
    Home: Login,
    Todo : Drawer

    
},{
    initialRouteName: "Home",
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'skyblue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }
}

)

export default createAppContainer(AppNavigator)