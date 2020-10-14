
import React, { Component } from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, View, Title, Content, Text, Left, Right, Body, CardItem ,Button,Card} from 'native-base';

import { Image, StyleSheet, StatusBar, TextInput, ScrollView, Slider, TouchableOpacity, Picker, Platform, ImageBackground, } from 'react-native';




    class ShiftDetail extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                
            isModalVisible: false,
           
                    Description:'پرستار شیفت صبح بخش اول',
                    Mobile:'09188728955',
                    Educational_status:'فارغ التحصیل',
                    Last_update:'04/06/1399',
                    City:'سنندج',
                    Statee:'کردستان',
                    Neighbourhood:'بهاران'
                    
            

          
            }
        } ;
  
    render() {
        const { id, gender, Hour, Shift,location ,Type,PahrmacyName} = this.props.route.params.item;
    return (
        <Container>
            <StatusBar backgroundColor="#0C5B77" />
            <Content>
            <View style={styles.topheader}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                <Icon name="arrow-left" size={25} color="#FFFFFF" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>اخبارو مقالات</Title>
                        </Body>
                        <Right >
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
                        </Right>
                    </View>

                    <CardItem cardBody>
                        <Image source={{ uri: 'http://www.ghazalhealth.com/images/891.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>


                <View style={styles.box}>
               
                <Text style={styles.ghazall}> { PahrmacyName}</Text>
                <Text style={styles.ghazall}> {Shift}</Text>
                <Text style={styles.ghazall}> {Hour}</Text>

                        <Text style={styles.ghazall}> توضیحات:{this.state.Description}</Text>
                        <Text style={styles.ghazall}> وضعیت تحصیلی:{this.state.Educational_status}</Text>
                       
                    <Text style={styles.ghazall}> {gender}</Text>
                    <Text style={styles.ghazall}> واپسین به روز رسانی:{this.state.Last_update}</Text>
                    <Text style={styles.ghazall}> استان|موقعیت مکانی:{this.state.statee}</Text>
                    <Text style={styles.ghazall}> شهرستان :{this.state.City}</Text>
                    <Text style={styles.ghazall}> نام محله  :{this.state.Neighbourhood}</Text>
                 
                  

                </View>


            </Content>


        </Container>
      );
            }
}
export default ShiftDetail;

const styles = StyleSheet.create({

    Total: {
        width: '100%',

    },
    box: {
        width: '95%',
        backgroundColor: '#F1F1F1',
       alignItems:'center',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderColor: '#B5B5B5',
        shadowColor: '#000000',
        elevation: 7,
        padding: 20,
      margin:10
    },
    imgBackground: {
        width: '100%',
        height: '50%',
        // position:'absolute',
        // zIndex:0

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
        fontSize: 20,
        fontFamily: 'IRANSans(FaNum)',
        color: '#FFFFFF',
    },
    ghazall: {
        fontSize: 15,
        fontFamily: 'IRANSans(FaNum)',
        color: '#3c4858',
    },
    totalbox: {
        flex: 1,
        flexWrap: 'wrap',
    },
    Terms: {
        fontWeight: "bold",
        fontSize: 25,
        fontFamily: 'IRANSans(FaNum)',
        color: 'black',
        textAlign: 'center',
        paddingTop: 130
    },
    textInputStyle: {
        padding: 12,
        backgroundColor: '#F1F1F1',
        borderColor: '#DCDCDC',
        borderWidth: 2,
        height: 55, width: '100%',
        color: '#ababab',
        fontSize: 12
        , fontFamily: 'IRANSans(FaNum)',
        borderRadius: 5,

    },
    ButtonStyle: {
        marginLeft: 3,
        backgroundColor: '#0C5B77',
        borderRadius: 5,
        borderWidth: 2,
        height: 55, width: '98%',
        marginTop: 15,
        fontSize: 12
        , fontFamily: 'IRANSans(FaNum)',
    },

    container: {
        backgroundColor: '#f2f0ee',
        paddingLeft: 35,
        paddingTop: 30,




    },
    imgee: {
        backgroundColor: '#fff',
        width: "100%",
        height: 320,
        fontSize: 100


    },
    textii: {

        fontSize: 15,
        textAlign: 'right',
        fontFamily: 'IRANSansMobile',
        color: '#0C5B77',
        paddingRight: 20


    },

    bodyy: {
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'IRANSansMobile',
        fontSize: 15,
        borderBottomColor: 'rgba(0,0,0,.125)',
        borderBottomWidth: 2,
        paddingRight: 20

    },
    imgeee: {
        backgroundColor: '#fff',
        flex: 1,
        flexWrap: 'wrap',

    },
    Article: {
        fontFamily: 'IRANSansMobile',
        fontSize: 15,
        color: '#0C5B77',
    }
});