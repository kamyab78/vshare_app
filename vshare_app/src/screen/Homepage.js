import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity , StatusBar } from 'react-native'
var{height , width}=Dimensions.get('window');
class login extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.viewhead}>
     <TouchableOpacity style={styles.touchuser}
                                          onPress={() => this.props.navigation.navigate('Homepage')}
                        >
                            <Text style={styles.txttouch}>username</Text>
                        </TouchableOpacity>
                        <TextInput style={styles.inpsearch}></TextInput>
                             <TouchableOpacity style={styles.touchsearch}
                                          onPress={() => this.props.navigation.navigate('Homepage')}
                        >
                            <Text style={styles.txttouch}>search</Text>
                        </TouchableOpacity>
            </View>
            <View style={styles.viewbody}>
                <View style={styles.viewgroup}></View>
            </View>
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
   viewhead:{
width:width,

height:60,
flexDirection:'row'
   },
   viewbody:{
width:width,
height:height*5/6,
backgroundColor:'black'
   },
   viewgroup:{
width:width*5/6,
height:height*5/6,
backgroundColor:'white',
position:"absolute",
marginLeft:width/12,
marginTop:40,
   },
   touchuser:{
    textAlign: 'center',
    justifyContent: 'center',
    position:'absolute',
    height:45,
    marginLeft:10
   },
   inpsearch:{
    backgroundColor:'rgba(255,255,255,0.2)',
    width:width/2,
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    height:45,
    color:'white',
     position:'absolute',
     marginLeft:width/3
   },
   touchsearch:{
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft:width*6/7,
    height:45
   },
   txttouch:{
       fontSize:15,
color:'white',
 position:'absolute'
   }


})
export default login;