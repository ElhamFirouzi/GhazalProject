import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,

    TouchableOpacity,
    Button,
    TouchableHighlight
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Content, ListItem, Body, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


import { NavigationContainer } from '@react-navigation/native';




class Slider extends React.Component {
    constructor(props) {
        super(props); {

        }
    }
    render() {
        return (
            <Container>
                <Grid>
                    <Row style={styles.box}>
   
                   
                        <Image source={{ uri: 'http://www.ghazalhealth.com/images/group%2031.png' }} style={{ height: 200, width: null, flex: 1 }} />
                    </Row>
                    <Row>
                        <Content>
                            <ListItem >
                                <Body>
                                  
                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate('Messages')
                                    }}>
                                         <Text style={styles.text}>صندوق پیام</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <Icon active name="envelope" size={25} color="#0C5B77" />
                                </Right>

                            </ListItem >
                            <ListItem >
                                <Body>


                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate('AboutUs')
                                    }}>
                                        <Text style={styles.text}> درباره ما</Text>
                                    </TouchableOpacity>
                                </Body>


                                <Right>
                                    <Icon active name="group" size={25} color="#0C5B77" />
                                </Right>

                            </ListItem>
                            <ListItem >
                                <Body>

                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate('ContactUs')
                                    }}>
                                        <Text style={styles.text}> تماس با ما </Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <Icon active name="phone" size={25} color="#0C5B77" />
                                </Right>

                            </ListItem>
                            <ListItem >
                                <Body>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('NewsandArticles') }}>
                                        <Text style={styles.text}> اخبار و مقالات </Text>
                                    </TouchableOpacity>
                                </Body>

                                <Right>
                                    <Icon active name="newspaper-o" size={23} color="#0C5B77" />
                                </Right>
                            </ListItem>
                            <ListItem >
                                <Body>
                                    
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ShiftList') }}>
                                    <Text style={styles.text}> شیفت های من </Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <Icon active name="user-md" size={26} color="#0C5B77" />
                                </Right>

                            </ListItem>
                            <ListItem >
                                <Body>
                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate('TermsandConditions')
                                    }}>
                                        <Text style={styles.text}> قوانین و مقررات</Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <Icon active name="check-square-o" size={25} color="#0C5B77" />
                                </Right>

                            </ListItem>
                            <ListItem >
                                <Body>

                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate('CriticsAndSuggestions')
                                    }}>
                                        <Text style={styles.text}> انتقادات و شکایات </Text>
                                    </TouchableOpacity>
                                </Body>
                                <Right>
                                    <Icon active name="drivers-license" size={25} color="#0C5B77" />
                                </Right>

                            </ListItem>
                         

                          

                           



                        </Content>
                    </Row>
                </Grid>
            </Container>
        );
    }
}


const styles = StyleSheet.create({

    box: {
        backgroundColor: '#FFFFFF',
        height: 200,
    },
    image: {
        width: '100%'
    },
    text: {
        fontSize: 14,
        fontFamily: 'IRANSans(FaNum)',
     color:'#212529'
      
    }
})






export default Slider;


