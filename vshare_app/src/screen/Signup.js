import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity} from 'react-native'
var{height , width}=Dimensions.get('window');
class signup extends Component{
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
        backgroundColor:'#1F1B24',
        alignItems:'center',
        justifyContent:'center'
    }


})
export default signup;