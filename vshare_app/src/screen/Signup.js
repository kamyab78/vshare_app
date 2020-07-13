import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity} from 'react-native'
var{height , width}=Dimensions.get('window');
class signup extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.mainview}>
                           <Text style={styles.txtCreate}>Create your account</Text>
                <TextInput style={styles.inp} placeholder='enter your firstname'
                placeholderTextColor='white'
                ></TextInput>
                    <TextInput style={styles.inp} placeholder='enter your lastname'
                placeholderTextColor='white'
                ></TextInput>
                    <TextInput style={styles.inp} placeholder='enter your username'
                placeholderTextColor='white'
                ></TextInput>
                    <TextInput style={styles.inp} placeholder='enter your email'
                placeholderTextColor='white'
                ></TextInput>
                    <TextInput style={styles.inp} placeholder='enter your password'
                placeholderTextColor='white'
                ></TextInput>
           
                <TouchableOpacity style={styles.btnlogin}
                                          onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.txtlogin}>signup</Text>
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
        backgroundColor:'#121212',
        alignItems:'center',
        justifyContent:'center'
    },
    txtCreate:{
fontSize:40,
        marginVertical:50,
        color:'white'
    },
    inp:{
        backgroundColor:'rgba(255,255,255,0.2)',
        width:width*2/3,
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        marginVertical:13,
        color:'white'
    },
    mainview:{
           flex:1,
        marginBottom:height/15,
        backgroundColor:'#121212',
        alignItems:'center',
        justifyContent:'center'
    },
   txtlogin:{
        textAlign:"center",
        color:'white',
fontSize:20,
 justifyContent: 'center',

    },
    btnlogin:{
        borderColor:'white',
        borderWidth:1, width:120,
        height:50
        ,borderRadius:20,
        justifyContent:'center',
         marginVertical:40,
         width:width*2/3,
        borderRadius:25,
        backgroundColor:'#1c313a'
    },


})
export default signup;