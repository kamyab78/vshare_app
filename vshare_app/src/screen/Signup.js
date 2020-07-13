import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity} from 'react-native'
import Toast from 'react-native-simple-toast'
var{height , width}=Dimensions.get('window');
class signup extends Component{
    constructor (props) {
        super(props)
        this.state = {
          user: null,
          pass:null,
          fname:null,
          lname:null,
          email:null,

        }
    
        this.signup = this.signup.bind(this)
      }
      signup(){
        let coll={}
      
        coll.username=this.state.user
        coll.password=this.state.pass
        coll.email=this.state.email
        coll.firstname=this.state.fname
        coll.lastname=this.state.lname
        coll.password2=this.state.pass

       
        console.log(coll)
       fetch("http://185.206.92.246:8000/user/signup/", {
        method: 'POST',
        body: JSON.stringify(coll),
        headers: new Headers({
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "application/json"
        })
      }).then(res => res.json())
      .catch(error=> console.error('Error:', error))
      .then((response) => {
         
          if(response.email==coll.email){
         
              this.props.navigation.navigate('Login')
          }
          else{
             
              Toast.showWithGravity(" incorect format", Toast.LONG, Toast.CENTER);
          }
  
    }
      );
      }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.mainview}>
                           <Text style={styles.txtCreate}>Create your account</Text>
                <TextInput onChangeText={(text1) => this.setState({fname: text1})} style={styles.inp} placeholder='enter your firstname'
                placeholderTextColor='white'
                ></TextInput>
                    <TextInput onChangeText={(text2) => this.setState({lname: text2})} style={styles.inp} placeholder='enter your lastname'
                placeholderTextColor='white'
                ></TextInput>
                    <TextInput onChangeText={(text3) => this.setState({user: text3})} style={styles.inp} placeholder='enter your username'
                placeholderTextColor='white'
                ></TextInput>
                    <TextInput onChangeText={(text4) => this.setState({email: text4})} style={styles.inp} placeholder='enter your email'
                placeholderTextColor='white'
                ></TextInput>
                    <TextInput onChangeText={(text5) => this.setState({pass: text5})} style={styles.inp} placeholder='enter your password'
                placeholderTextColor='white'
                ></TextInput>
           
                <TouchableOpacity style={styles.btnlogin}
                                          onPress={this.signup}
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