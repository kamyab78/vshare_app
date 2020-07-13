import React, { Component } from 'react'
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity , StatusBar , Button } from 'react-native'
import Sidebar from 'react-native-sidebar';
var{height , width}=Dimensions.get('window');
class chatroom extends Component{
    render(){
        return(
            <View style={styles.container}>

<abbr title="Online Members">
        
                </abbr>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{
        flex:1,
 height:height,
 backgroundColor:'#121212',
 alignItems:'center',
 justifyContent:'center',

},
})
export default chatroom