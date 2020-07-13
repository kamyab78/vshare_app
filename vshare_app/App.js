import React, {Component} from 'react';
import Landing from './src/screen/Landing';
import Login from './src/screen/Login'
import Signup from'./src/screen/Signup'
import Homepage from'./src/screen/Homepage'
import Create from './src/screen/Creategroup'
import Chat from './src/screen/Chatroom'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';





const Main = createStackNavigator(
    {
  LanginPage: {
            screen: Landing,
            navigationOptions: {
                headerShown: false
    },
        },
        Login:{
      screen:Login,
            navigationOptions:{
          headerShown:false
            }
        },
        Signup:{
            screen:Signup,
            navigationOptions:{
                headerShown:false
            }
        },
        Homepage:{
            screen:Homepage,
            navigationOptions:{
                headerShown:false
            }
        },
            Create:{
            screen:Create,
            navigationOptions:{
                headerShown:false
            }
        },
Chat:{
    screen:Chat,
    navigationOptions:{
        headerShown:false
    }
}
    }
);
const AppContainer = createAppContainer(Main);
export  default  class App extends Component {
    render() {
        return (

                <AppContainer/>

        )
    }
}
