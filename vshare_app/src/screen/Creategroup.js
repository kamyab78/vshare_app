import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity , StatusBar , Button } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';;
var{height , width}=Dimensions.get('window');

const buttonTextStyle = {
    color: 'red',
    
};
const prev={
    color:'#121212'
}
class Create extends Component{


render() {
  return (
  <View style={styles.container}>
  <View style={{flex: 1}}>
    <ProgressSteps>
        <ProgressStep label="create group" nextBtnTextStyle={styles.btnnext}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.txtacc}>Create tour group</Text>
                 <TextInput style={styles.inp1} placeholder='name'
                placeholderTextColor='white'
                ></TextInput>
                  <TextInput style={styles.inp1} placeholder='id'
                placeholderTextColor='white'
                ></TextInput>
                  <TextInput style={styles.inp1} placeholder='bio'
                placeholderTextColor='white'
                ></TextInput>
            </View>
        </ProgressStep>
        <ProgressStep label="add member" nextBtnTextStyle={styles.btnnext} previousBtnTextStyle={prev}
        onSubmit={() => this.props.navigation.navigate('Homepage')}>
            <View style={{ alignItems: 'center' }}>
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
        marginRight:50
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
        
    }
  


})
export default Create;