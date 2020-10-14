




import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { Container, Header, View, Title, Content, Text, Left, Right, Body, CardItem, Button } from 'native-base';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Image, StyleSheet, StatusBar, TextInput, ScrollView, Slider, TouchableOpacity, Picker, Platform, ImageBackground, } from 'react-native';
var items = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'انتقاد' },
    { id: 2, name: 'پیشنهاد' },

];
class CriticsAndSuggestions extends React.Component {
    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#0C5B77" />
                <Content>
                    <View style={styles.topheader}>
                        <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                <Icon name="arrow-left" size={25} color="#FFFFFF" />
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <Title>انتقادات</Title>
                        </Body>
                        <Right >
                            <TouchableOpacity >
                                <Icon name="navicon" size={25} color="#FFFFFF" />
                            </TouchableOpacity>
                        </Right>
                    </View>

                    <CardItem cardBody>
                        <Image source={{ uri: 'http://www.ghazalhealth.com/images/891.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>


                    <View style={{
                        width: '90%',
                        height: 400,
                        backgroundColor: '#FFFFFF',
                        borderColor: '#dfdfdf',
                        borderWidth: 2,
                        shadowColor: '#000000',
                        elevation: 5,
                        borderRadius: 5,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginLeft: 20,
                        marginTop: 20,
                        marginBottom: 20
                    }}>


                        <View style={{ width: '100%', height: 400, backgroundColor: '#ffffff', padding: 10 }} >
                            <Text style={{ marginTop: 10, fontSize: 15, fontFamily: 'IRANSans(FaNum)', color: 'block', }}>
                                نوع نظر
                        </Text>
                            <SearchableDropdown
                                onTextChange={text => console.log(text)}
                                onItemSelect={item => console.log(JSON.stringify(item))}
                                containerStyle={{ padding: 5 }}
                                textInputStyle={{
                                    borderRadius: 5,
                                    borderWidth: 2,
                                    borderColor: '#DCDCDC',
                                    backgroundColor: '#f1f1f1',
                                }}
                                itemStyle={{
                                    padding: 10,
                                    marginTop: 2,
                                    backgroundColor: '#FAF9F8',
                                    borderColor: '#DCDCDC',
                                    borderWidth: 1,
                                }}
                                itemTextStyle={{
                                    color: '#222',
                                    fontSize: 12,
                                    fontFamily: 'IRANSans(FaNum)',
                                }}
                                itemsContainerStyle={{
                                    maxHeight: '60%',
                                }}
                                items={items}
                                defaultIndex={2}
                                placeholder="انتخاب کنید"
                                resetValue={false}
                                underlineColorAndroid="transparent"
                            />
                            <Text style={{ marginTop: 10, fontSize: 15, fontFamily: 'IRANSans(FaNum)', color: 'block', }}>
                                موضوع
                            </Text>
                            <View style={{ padding: 4 }}>
                                <TextInput style={styles.textInputStyle} numberOfLines={5}>
                                    لطفا موضوع مورد نظر خود را اینجا بنویسید
                          </TextInput >
                                <Text style={{ marginTop: 10, fontSize: 15, fontFamily: 'IRANSans(FaNum)', color: 'block', }}>
                                    متن
                            </Text>
                                <TextInput style={styles.textInputStyle} numberOfLines={10}>
                                    لطفا متن مدنظر خود را اینجا بنویسید
                          </TextInput>
                            </View>
                            <TouchableOpacity>

                                <Button style={styles.ButtonStyle}>
                                    <Text style={{
                                        fontSize: 15, fontFamily: 'IRANSans(FaNum)', paddingLeft
                                            : '45%'
                                    }}>انجام </Text>
                                </Button>
                            </TouchableOpacity>

                        </View>
                    </View>

                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({

    Total: {
        width: '100%',

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
        fontSize: 22,
        fontFamily: 'IRANSans(FaNum)',
        color: '#FFFFFF',
        borderColor: '#707070',


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
        borderColor: '#0c5b77',


    }


});
export default CriticsAndSuggestions;