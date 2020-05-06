import React, {Component} from 'react';
import {
    View,
    Button,
    StyleSheet,
    Dimensions,
    Animated,
    Image,
    Easing,
    ImageBackground,
    Text,
    TouchableOpacity,
} from 'react-native';
import {withOrientation} from 'react-navigation';

var {height, width} = Dimensions.get('window');

class Landing extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundPhoto} source={require('./photo/landing.jpg')}>

                    <View style={[styles.viewHead]}>

                        <Text style={styles.textName}>
                            Vshare
                        </Text>


                        <TouchableOpacity style={styles.btnSign}
                                          onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.txtBtn}>login/signup</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.viewExplain}>
                        <Text style={styles.txtExplain}>
                            Vshare is a web-base service which allows you to watch a video file with other users
                            at the same time.
                            You can talk through the movie with each other

                        </Text>


                    </View>
                </ImageBackground>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        backgroundColor: '#31100f',
    },
    backgroundPhoto: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    ViewName: {
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    textName: {
        fontSize: 21,
        color: '#ffffff',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    ViewBtn: {
        justifyContent: 'flex-end',
    },
    btnSign: {
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: width * 3 / 7,
        height: 47,
        borderColor: 'white',
        width: 140,
        borderWidth: 1,
    },
    viewHead: {

        width: '100%',
        height: '10%',
        flexDirection: 'row'
    },
    txtBtn: {
        fontSize: 19,
        color: '#ffffff',
        textAlign: 'center',
        justifyContent: 'center',
    },
    viewExplain: {
        backgroundColor: '#ffffff',
       width:10,
        marginBottom:29


    },
    txtExplain: {fontSize:25,
        textAlign:'center'
    },
});
export default Landing;
