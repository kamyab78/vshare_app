import React , {Component} from 'react';
import{View ,StyleSheet,Dimensions , TextInput,Text,TouchableOpacity , StatusBar , Button } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';;
var{height , width}=Dimensions.get('window');

const buttonTextStyle = {
    color: 'red'
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
        <ProgressStep label="create group" nextBtnTextStyle={buttonTextStyle}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.txtacc}>Create tour account</Text>
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
        <ProgressStep label="add member" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={prev}>
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 2!</Text>
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
    }
  


})
export default Create;