import React,{Component} from 'react'
import {View, Button, StyleSheet, Dimensions ,Animated,Image, Easing, ImageBackground , Text, TouchableOpacity} from 'react-native';
var{height , width}=Dimensions.get('window');
class Landing extends Component{
render(){
    return(
<View style={styles.container}>
<ImageBackground style={styles.backgroundPhoto} source={require('./photo/landing.jpg')}>
    {/* <View style={styles.viewHead}>
        <View style={styles.ViewName}>
            <Text>
Vshare
            </Text>
        </View>
        <View style={styles.ViewBtn}>
              <TouchableOpacity
                      style={styles.btnSign}
                    //   onPress={() => this.props.navigation.navigate('History')}
                    >
                        <Text>login/signup</Text>
                    </TouchableOpacity>>
        </View>
    </View> */}
</ImageBackground>
</View>
    )

}

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:height,
        backgroundColor:'#31100f'
    },
    backgroundPhoto:{
           flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    },
    ViewName:{
justifyContent: 'flex-start'
    },
    textName:{
        
    },
    ViewBtn:{
 justifyContent: 'flex-end'
    },
    btnSign:{

    },
    viewHead:{
width:'100%' ,
 height:'10%',
 flexDirection: 'row',
    }

})
export default Landing;
