import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity} from 'react-native'
var{height , width}=Dimensions.get('window');
class login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.mainview}>
                <Text style={styles.Wel}>Welcome to Vshare</Text>
                <TextInput style={styles.inp} placeholder='enter username or email'
                placeholderTextColor='white'
                ></TextInput>
                <TextInput style={styles.inp} placeholder='password'
                placeholderTextColor='white'
                ></TextInput>


                <View style={styles.viewforsignup}>
<Text style={styles.txtnotregister}>you don't have accout?</Text>
<TouchableOpacity style={styles.btnsignup}
                                          onPress={() => this.props.navigation.navigate('Signup')}
                        >
                            <Text style={styles.txtbtnregister}>register</Text>
                        </TouchableOpacity>
                </View>


                <TouchableOpacity 
                                          onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text >login</Text>
                        </TouchableOpacity>
                </View>
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
    },
    inp:{
        backgroundColor:'rgba(255,255,255,0.2)',
        width:width*2/3,
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        marginVertical:13
    },
    Wel:{
        fontSize:40,
        marginVertical:height*1/7
    },
    mainview:{
        flex:1,
        marginBottom:height/5,
        backgroundColor:'#1F1B24',
        alignItems:'center',
        justifyContent:'center'
    },
    viewforsignup:{
        flexDirection:'row',
        marginTop:5,
        marginVertical:100,
        width:width/2,
    }
    ,
    btnsignup:{
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft:10
    },
    txtbtnregister:{
fontSize:15,
color:'white'
    },
    txtnotregister:{
fontSize:15,
color:'white'
    },
    txtlogin:{

    }


})
export default login;
