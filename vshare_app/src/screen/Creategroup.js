import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity , StatusBar , Button } from 'react-native'
var{height , width}=Dimensions.get('window');
class Create extends Component{
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
        backgroundColor:'#121212',
        alignItems:'center',
        justifyContent:'center',
       
    },
  


})
export default Create;