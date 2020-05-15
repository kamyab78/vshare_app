import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity , StatusBar , Button } from 'react-native'
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
                <View style={styles.viewgroup}>
<Text style={styles.txtyourgp}>your group</Text>
     <TouchableOpacity style={styles.touchcreate}
                                          onPress={() => this.props.navigation.navigate('Homepage')}
                        >
                            <Text style={styles.txttouch}>create new group</Text>
                        </TouchableOpacity>
                         <Text style={styles.txttouch}>__________________________________</Text>
                </View>
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

   },
   viewgroup:{
width:width*5/6,
height:height*5/6,
backgroundColor:'black',
position:"absolute",
marginLeft:width/12,
marginTop:40,
   },
   touchuser:{
    textAlign: 'center',
    justifyContent: 'center',
    position:'absolute',
    height:40,
    marginLeft:10
   },
   inpsearch:{
    backgroundColor:'rgba(255,255,255,0.2)',
    width:width/2,
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    height:40,
    color:'white',
     position:'absolute',
     marginLeft:width/3
   },
   touchsearch:{
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft:width*6/7,
    height:40
   },
   txttouch:{
       fontSize:15,
color:'white',
textAlign:"center"
   },
   txtyourgp:{
       fontSize:20,
       color:'white',
       fontWeight:'bold',
       position:"absolute",
       marginLeft:10,
       marginTop:20,
       textAlign:'center'
   },
   touchcreate:{
 textAlign: 'center',
        justifyContent: 'center',
        marginLeft: width*5 /11,
        height: 40,
        borderColor: 'white',
        width: 140,
        borderWidth: 1,
         
       marginTop:10,
   },




})
export default login;