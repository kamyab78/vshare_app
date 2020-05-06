import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions} from 'react-native'
var{height , width}=Dimensions.get('window');
class loginSignup extends Component{
    render(){
        return(
            <View style={styles.container}></View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
               flex:1,
        height:height,
        backgroundColor:'#31100f'
    }
})
export default loginSignup;
