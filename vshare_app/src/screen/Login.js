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
<Text>you don't have accout?</Text>
<TouchableOpacity 
                                          onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text >register</Text>
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
        marginVertical:height*2/9
    },
    mainview:{
        flex:1,
        marginBottom:height/2,
        backgroundColor:'#1F1B24',
        alignItems:'center',
        justifyContent:'center'
    },
    viewforsignup:{
        flexDirection:'row'
    }

})
export default login;
