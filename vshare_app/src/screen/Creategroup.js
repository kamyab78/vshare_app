import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity , StatusBar , Button } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';;
import Toast from 'react-native-simple-toast'
import AsyncStorage from '@react-native-community/async-storage'
var{height , width}=Dimensions.get('window');

const buttonTextStyle = {
    color: 'red',
    
};
const prev={
    color:'#121212'
}
class Create extends Component{
    constructor (props) {
        super(props)
        this.state = {
     id:null,
     name:null,
     bio:null,
     isValid: false,
    errors: true

        }
    
        this.create = this.create.bind(this)
        this.next_page=this.next_page.bind(this)
      }
create(){
    let coll={}
      var mem=[]
  coll.groupid=this.state.id
  coll.title=this.state.name
  coll.describtion=this.state.bio
  coll.invite_only=true
coll.members=mem

   
    console.log(coll)
   fetch("http://185.206.92.246:8000/groups/", {
    method: 'POST',
    body: JSON.stringify(coll),
    headers: new Headers({
        "accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
        "Authorization": "token d85621746820ea1634d5bd7fb383cd61861c7fc1" 
    })
  }).then(res => res.json())
  .catch(error=> console.error('Error:', error))
  .then((response) => {
      if(response.groupid==coll.groupid && response.describtion == coll.describtion){
        this.setState({ isValid: true });
        Toast.showWithGravity(" create succesfully", Toast.LONG, Toast.CENTER);
       
      }
      else{
        this.setState({ isValid: false });
        Toast.showWithGravity("try again", Toast.LONG, Toast.CENTER);
       
      }
  console.log(response)

}

  );

 

}
next_page(){
    console.log(this.state.isValid)
    if (!this.state.isValid) {
        this.setState({ errors: true });
      } else {
        this.setState({ errors: false });
      }
      console.log(this.state.errors)
}
render() {
  return (
  <View style={styles.container}>
  <View >
    <ProgressSteps>
        <ProgressStep label="create group" onNext={this.next_page} nextBtnTextStyle={styles.btncreate} errors={this.state.errors}>
            <View style={styles.container1}>
                <Text style={styles.txtacc}>Create your group</Text>
                 <TextInput onChangeText={(text1) => this.setState({name: text1})} style={styles.inp1} placeholder='name'
                placeholderTextColor='white'
                ></TextInput>
                  <TextInput onChangeText={(text1) => this.setState({id: text1})} style={styles.inp1} placeholder='id'
                placeholderTextColor='white'
                ></TextInput>
                  <TextInput onChangeText={(text1) => this.setState({bio: text1})} style={styles.inp1} placeholder='bio'
                placeholderTextColor='white'
                ></TextInput>
                     <TouchableOpacity style={styles.btncreate1}
                                          onPress={this.create}
                        >
                            <Text style={styles.txtnext1}>create</Text>
                        </TouchableOpacity>
            </View>
        </ProgressStep>
        <ProgressStep label="add member" nextBtnTextStyle={styles.btnnext} previousBtnTextStyle={prev}
        onSubmit={() => this.props.navigation.navigate('Homepage')}>
            <View style={styles.container1}>
                <Text style={styles.txtacc}>Add your member</Text>
                <View style={styles.viewadd}>
                   <TextInput style={styles.inp1} placeholder='id of member'
                placeholderTextColor='white'
                ></TextInput>
                   <TouchableOpacity style={styles.btnadd}
                                          onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.txtadd}>Add</Text>
                        </TouchableOpacity>
                        </View>
            </View>
        </ProgressStep>
      
    </ProgressSteps>
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
    container1:{
       height:height*2/3,
       alignItems: 'center'

},
    inp1:{
           backgroundColor:'rgba(255,255,255,0.2)',
        width:width*2/3,
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        marginVertical:13,
        color:'white'
    },
    txtacc:{
        color:'white',
        fontSize:30,
        textAlign:"center",
        marginVertical:40
    },
    btnnext:{
        color:'red',
        marginRight:5550
    },
    btnadd:{
 textAlign: 'center',
        justifyContent: 'center',
      width:50,
        height: 47,
        borderColor: 'white',
      
        fontSize:16,
        marginVertical:13,

    
    },

    txtadd:{
               fontSize:15,
color:'white',
textAlign:"center"
    },
    viewadd:{
        flexDirection:'row',
         justifyContent: 'center',
        
    },
    btncreate:{
        textAlign: "right",
        justifyContent: "flex-end",
      width:55,
        height: 47,
        borderColor: 'white',
 marginBottom:-10,
        fontSize:26,
        marginVertical:13,
        marginRight:-width,
        color:"white"

    },
    txtnext:{
        fontSize:25,
        color:'red',
        textAlign:"center",
        
    },

      btncreate1:{
        textAlign: 'center',
        justifyContent: 'center',
      width:75,
        height: 47,
        borderColor: 'white',

        fontSize:26,
        marginVertical:13,
       
        color:"red"

    },
    txtnext1:{
        fontSize:25,
        color:'red',
        textAlign:"center",
        
    },


})
export default Create;