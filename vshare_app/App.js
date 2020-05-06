import React, {Component} from 'react';
import Landing from './src/screen/Landing';
import Login from './src/screen/Login'
import Signup from'./src/screen/Signup'
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
