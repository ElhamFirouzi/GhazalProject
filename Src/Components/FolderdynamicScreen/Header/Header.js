
import React, { Component } from "react";
import {
    TouchableHighlight,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
    Button, TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends React.Component {

    render() {
        return (



            <View style={{ width: '100%' }}>
                <View style={{

                    width: '100%', backgroundColor: '#0c5b77', height: 65,
                    alignItems: 'center', paddingLeft: '5%'
                    , flexDirection: 'row-reverse'
                    , borderColor: '#B5B5B5', shadowColor: '#000000', elevation: 7
                }}>
                    <StatusBar
                        backgroundColor="#0c5b77"
                    />
                    <View style={{justifyContent:'space-between',flex:1,flexDirection:'row-reverse'}}>
                    <TouchableOpacity onPress={() => 
                        
                        
                        
                        this.props.navigation.navigate('HomeScreen')}>
                        <Icon name="navicon" size={25} color="#ffffff" />
                    </TouchableOpacity>
                    <Text style={{fontSize: 16, fontFamily: 'IRANSans(FaNum)',color:'#FFFFFF',paddingLeft:20}}> غزال</Text>
                    </View>
                </View>
            </View>

        );
    }
}
export default Header;