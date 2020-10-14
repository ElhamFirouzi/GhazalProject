import  React from 'react';
import {View, Text, Image,ImageBackground, StyleSheet, TextInput, ScrollView, Slider, TouchableOpacity,color,ActivityIndicator,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var bg=require('./../../../Picture/aaa.jpg')

class  Splash extends React.Component {

constructor(props){
    super(props);

         
                     }





    render() {
        return (
            <ImageBackground   source={bg} style={{ height: '100%', width: null, flex: 1}}>
            <View style={{justifycontent:'center',alignItems:'center',}}>
   
          
             </View>
            </ImageBackground>
    );
    }
}


export default Splash;