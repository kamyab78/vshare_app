import React,{Component} from 'react'
import {View, Button, StyleSheet, Dimensions ,Animated,Image, Easing, ImageBackground , Text, TouchableOpacity} from 'react-native';
var{height , width}=Dimensions.get('window');
class Landing extends Component{
render(){
    return(
<View style={styles.container}>

</View>
    )

}

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:height,
        backgroundColor:'#31100f'
    },

})
export default Landing;
