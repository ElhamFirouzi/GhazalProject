
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
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Title, Content, Left, Right, Body, CardItem, Button, Card } from 'native-base';



function ArticleDetail(props) {
    /* 2. Get the param */
    const { id, imge, title, body } = props.route.params.item;

    return (
        <Container>
            <StatusBar backgroundColor="#0C5B77" />
            <Content>
                <View style={styles.topheader}>
                    <Left>
                        <Button transparent onPress={() => props.navigation.navigate('NewsandArticles')}>
                            <Icon name="arrow-left" size={25} color="#FFFFFF" />
                        </Button>
                    </Left>
                    <Right>
                        <Title style={styles.ghazal}> غزال</Title>
                    </Right>

                </View>
                <View>
                    <Image styles={{ height: '50%', width: 100 }} source={imge}></Image>
                    <Text  style={styles.textii}> {title}</Text>
                    <Text style={styles.bodyy}> {body}</Text>

                </View>


            </Content>


        </Container>
    );
}
export default ArticleDetail;

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
        fontSize: 20,
        fontFamily: 'IRANSans(FaNum)',
        color: '#FFFFFF',



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