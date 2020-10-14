

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, StatusBar, TextInput, ScrollView, Slider, TouchableOpacity, Picker, Platform ,ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './../../FolderdynamicScreen/Header/Header';


class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideMenuOpen: false
        }
    }

  
    render() {
        return (


            <ImageBackground style={ styles.imgBackground } 
            resizeMode='cover' 
            source={require('./../../../Picture/axe.jpg')}>

            <ScrollView>
                 <StatusBar backgroundColor="#0C5B77" />
                 
                 
               

                <View style={styles.Total}>

                    <View style={styles.topheader}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                            <Icon name="arrow-left" size={25} color="#FFFFFF" />
                        </TouchableOpacity>
                        <Text style={styles.ghazal}> غزال </Text>

                        <TouchableOpacity onPress={() => {
                                if (this.state.isSideMenuOpen) {
                                    { this.props.navigation.openDrawer(); }
                                }
                                else {
                                    { this.props.navigation.closeDrawer(); }
                                }
                                this.setState({ isSideMenuOpen: !this.state.isSideMenuOpen })
                            }
                            }>
                                <Icon name="navicon" size={25} color="#FFFFFF" />

                            </TouchableOpacity>
                    </View>
                  
                    <View style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center',marginTop:250 }}>
                        <Text style={styles.Terms}> درباره ما </Text>
                 </View>
                   
                </View>
           
            </ScrollView>
            </ImageBackground>

        )




    }


}


const styles = StyleSheet.create({

    Total: {
        width: '100%',
     

    },
    imgBackground: {
        width: '100%',
        height: '100%',
     
},
    topheader: {
        flex: 1,
        backgroundColor: '#0C5B77',
        width: '100%',
        height: 70,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    

    },
    ghazal: {
        fontSize: 22,
        fontFamily: 'IRANSans(FaNum)',
        color: '#FFFFFF',
        borderColor: '#707070',


    },
   

  

 
    totalbox: {
        flex: 1,
        flexWrap: 'wrap',
    },
    

    Terms:{fontWeight:"bold",
        fontSize: 25,
        fontFamily: 'IRANSans(FaNum)',
        color: 'black',
       textAlign:'center'
    },

   
   
});


export default AboutUs;