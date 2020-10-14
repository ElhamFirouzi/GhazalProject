




import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { Container, Header, View, Title, Content, Text, Left, Right, Body, CardItem ,Button,Card} from 'native-base';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Image, StyleSheet, StatusBar, TextInput, ScrollView, Slider, TouchableOpacity, Picker, Platform, ImageBackground, } from 'react-native';

class NewsandArticles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
            isModalVisible: false,
            AdvertisingBox: [
                {
                    id:1,
                    imge: require('../../../Picture/DrImage.jpg'),
                    title: "     اگر دچار کرونا شده‌اید",
                    body:  "   اول و از همه مهمتر این که در خانه بمانید      "
                },
                {
                    id:2,
                    imge: require('../../../Picture/DrImage.jpg'),
                    title: "    ای دی 2 اگر دچار کرونا شده‌اید",
                    body:  "   اول و از همه مهمتر این که در خانه بمانید      "
                   
                },
                {
                    id:3,
                    imge: require('../../../Picture/DrImage.jpg'),
                    title: "    ای دی 3 اگر دچار کرونا شده‌اید",
                    body:  "   اول و از همه مهمتر این که در خانه بمانید      "
                 
                   
            
                },
            
            ]


        }
    }

    render() {
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
            
           
          <View style={styles.container}>{
                        this.state.AdvertisingBox.map((item, id) =>
                            <View key={id} style={{marginBottom:30,  elevation: 5,borderColor:'#9A9A9A',
                                shadowColor: '#9A9A9A',width: '90%'}}>
                                <Image style={styles.imgee} source={item.imge}/>
                            
                               
                                <Text    style={styles.textii}>{item.title}</Text>
                                <Text  numberOfline={5} style={styles.bodyy}>{item.body}</Text>
                              
                                
                                <TouchableOpacity>
                                <Button block light onPress={() => this.props.navigation.navigate('ArticleDetail',{item})} >
                                <Text style={styles.Article}>مشاهده کامل مقالات</Text>
                                  </Button>
                                </TouchableOpacity>
                            </View>
                          
                        )
                       

                    }
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
    textInputStyle:{ padding: 12, 
        backgroundColor: '#F1F1F1',
         borderColor: '#DCDCDC', 
         borderWidth: 2,
          height: 55, width: '100%',
          color: '#ababab',
           fontSize: 12
           , fontFamily: 'IRANSans(FaNum)',
           borderRadius:5,
           
         },
        ButtonStyle:{
        marginLeft:3,
        backgroundColor:'#0C5B77',
        borderRadius:5,
        borderWidth: 2,
        height: 55, width: '98%',
        marginTop:15,
        fontSize: 12
       , fontFamily: 'IRANSans(FaNum)',
       }  ,

       container: {
       backgroundColor: '#f2f0ee',
       paddingLeft:35,
       paddingTop:30,
    },
    imgee: {
        backgroundColor: '#fff',
        width: "100%",
        height: 320,
        fontSize: 100
    },
    textii: {
  
        fontSize: 18,
        fontFamily: 'IRANSansMobile',
        color:'#0C5B77',
    },
    footee:{
        fontSize: 15,
        textAlign: 'right',
        fontFamily: 'IRANSansMobile',
        color:'#0C5B77',
        paddingRight:20,
        borderBottomColor: 'rgba(0,0,0,.125)',
        borderBottomWidth: 2,



    },
    bodyy: {
    
        fontFamily: 'IRANSansMobile',
        fontSize: 15,
        borderBottomColor: 'rgba(0,0,0,.125)',
        borderBottomWidth: 2,
        textAlign: 'right',
       paddingRight:10
    
    },
  
    imgeee: {
        backgroundColor: '#fff',
   flex:1,
        flexWrap:'wrap',

    },
    Article:{
        fontFamily: 'IRANSansMobile',
        fontSize: 15,
        color:'#0C5B77',
    }
});
export default NewsandArticles;