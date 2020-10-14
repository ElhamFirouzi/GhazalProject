




import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { Container, Header, View, Title, Content, Text, Left, Right, Body, CardItem ,Button,Card} from 'native-base';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Image, StyleSheet, StatusBar, TextInput, ScrollView, Slider, TouchableOpacity, Picker, Platform, ImageBackground,TouchableHighlight ,Linking} from 'react-native';
import Modal from 'react-native-modal';
class ShiftList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
            isModalVisible: false,
            Global: [
                {
                    id:1,
                    Shift: '1شیفت هفتگی',
                    PahrmacyName: "داروخانه دکتر اکبری",
                    Type: "نوع شیفت:هفتگی",
                    location: 'تهران نیاوران ',
                    Hour: "ساعت شیفت :  9.00تا 17.00",

                    gender: 'مرد'
                },

                {
                    id:2,
                    Shift: 'شیفت هفتگی',
                    PahrmacyName: "داروخانه دکتر اکبری",
                    Type: "نوع شیفت:هفتگی",
                    location: 'تهران نیاوران ',
                    Hour: "ساعت شیفت :  9.00تا 17.00",
                    gender: 'مرد'
                },
                {
                    id:3,
                    Shift: 'شیفت هفتگی',
                    PahrmacyName: "داروخانه دکتر اکبری",
                    Type: "نوع شیفت:هفتگی",
                    location: 'تهران نیاوران ',
                    Hour: "ساعت شیفت :  9.00تا 17.00",

                    gender: 'زن'
                },
            ],


        }
    } ;
    makeCall = () => {
        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${09108000000}';
        } else {
            phoneNumber = 'tel:${09108000000}'
        }
        Linking.openURL(phoneNumber);
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
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
                            <Title style={styles.ghazal}>آگهی ها </Title>
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
                    <Image source={{ uri: 'http://www.ghazalhealth.com/images/group%2031.png' }}  style={{ height: 200, width: null, flex: 1 }} />
                        
                    </CardItem>
                    
           
            <View >

                            {this.state.Global.map((item, index) =>
                                <View key={index}>

                                    <View style={styles.boxsmall}>

                                        <View >
                                      
                                            <Text style={styles.ShiftText}>  {item.Shift} </Text>
                                           
                                            <Text style={styles.Pharmacystyle}> {item.PahrmacyName} </Text>
                            <Text style={styles.PharmacyOther}> <Icon name="map-marker" size={20} color="#858585" /> {item.location} </Text>
                                            <Text style={styles.PharmacyOther}> <Icon name="calendar" size={20} color="#858585"  /> {item.Type} </Text>
                                            <Text style={styles.PharmacyOther}> <Icon name="clock-o" size={20} color="#858585" />{item.Hour} </Text>
                                            <Text style={styles.PharmacyOther}> <Icon name="female" size={20} color="#858585"  />|<Icon name="male" size={20} color="#858585"  />  {item.gender} </Text>
                                            <View style={{flex:1,flexWrap:'wrap',}}>
                                            <Text >
                                                    <TouchableOpacity style={{ paddingRight:10 }}>
                                                        <Icon name="folder-open" size={25} color="#0C5B77" onPress={() => this.props.navigation.navigate('ShiftDetail',{item})}/>
                                                    </TouchableOpacity>
                                                </Text>
                                                <Text >
                                                    <TouchableOpacity >
                                                        <Icon name="phone-square" size={25} color="#0C5B77" onPress={this.makeCall} />
                                                    </TouchableOpacity>
                                                </Text>
                                               

                                                <Text style={{marginLeft:10,}}>
                                                    <TouchableOpacity>
                                                        <Icon name="comment" size={25} color="#0C5B77" onPress={this.toggleModal} />
                                                    </TouchableOpacity>
                                                    
                                                    <Modal isVisible={this.state.isModalVisible} animationType='slide' >
                                                        <View style={{ width: 350, height: 300, backgroundColor: '#FFFFFF' }}>
                                                            <Text style={{ color: '#212529', fontFamily: 'IRANSans(FaNum)', marginBottom: 30, fontSize: 22, }} >ارسال پیام!</Text>
                                                            <View style={{ flexWrap: "wrap", justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-around', }}>
                                                                <TextInput style={styles.textInputStylee} numberOfLines={2} placeholder="  عنوان" />
                                                                <TextInput style={styles.textInputStyle} numberOfLines={10} placeholder="  پیام خود را وارد کنید" />
                                                            </View>

                                                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', }}>

                                                                <View style={{ width: '20%', marginRight: 20, alignItems: 'center' }}>
                                                                    <TouchableHighlight onPress={this.toggleModal} >
                                                                        <Text style={styles.Cancel}>انصراف</Text>
                                                                    </TouchableHighlight>
                                                                </View>

                                                                <View style={{ width: '20%', marginRight: 20, alignItems: 'center' }}>
                                                                    <TouchableOpacity onPress={this.toggleModal} >
                                                                        <Text style={styles.submit}>ارسال</Text>
                                                                    </TouchableOpacity>
                                                                </View>

                                                            </View>
                                                        </View>
                                                    </Modal>

                                                </Text>
                                            
                                            </View>
                                        </View>


                                    </View>
                                </View>
                            )}
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
        fontSize: 20,
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
        textAlign:'justify',
    },
    bodybox:{
textAlign:'justify',
    },
    totalbox: {
        flex: 1,
        flexWrap: 'wrap',
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
    },
    box: {
        width: '95%',
        backgroundColor: '#FFFFFF',
     
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderColor: '#B5B5B5',
        shadowColor: '#000000',
        elevation: 7,
        padding: 20,
       margin:15,
    },
    pharmacy_box: {

        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 93,
        borderRadius: 15,
        borderColor: '#B7B7B7',
        borderWidth: 1,
        elevation: 3,
        marginBottom: 20,
    },
    pahrmacy: {
        flex: 1,

        flexDirection: 'row-reverse',

    },
    boxsmall: {
        width: '95%',
        backgroundColor: '#F1F1F1',
        height: 250,
        borderRadius: 15,
        borderColor: '#B5B5B5',
        shadowColor: '#000000',
        elevation: 5,
        padding: 20,
        margin: 10,
    },
    ShiftText: {

        fontSize: 16,
        textAlign: 'right',
        fontFamily: 'IRANSansMobile',
        color: '#212529',
      
    },
    Pharmacystyle:{
        fontSize: 18,
        textAlign: 'right',
        fontFamily: 'IRANSansMobile',
        color: '#0c5b77',
        
    },
    PharmacyOther:{
        fontSize: 12,
        textAlign: 'right',
        fontFamily: 'IRANSansMobile',
        color: '#858585',
        
    },
    submit:{
        color: '#FFFFFF',
         fontSize: 15,
         fontFamily: 'IRANSans(FaNum)', 
         backgroundColor: '#0C5B77', 
         paddingLeft: 10, 
         paddingRight: 10, 
         paddingTop: 3, 
         paddingBottom: 3 
    },
    Cancel:{
        color: '#212529', 
        fontSize: 14,
         fontFamily: 'IRANSans(FaNum)',
          backgroundColor: '#F1F1F1',
           paddingLeft: 9, 
           paddingRight: 9,
            paddingTop: 4,
             paddingBottom: 4 
    },
    TextInputModal:{
        backgroundColor: '#F1F1F1',
         borderColor: '#DCDCDC', 
        fontFamily: 'IRANSans(FaNum)',
         borderWidth: 2,
          borderRadius: 8,
           height: 50, 
           width: '90%',
            padding: 12, 
            marginBottom: 30
    },
    textInputStylee:{
        backgroundColor: '#F1F1F1',
         borderColor: '#DCDCDC', 
         fontFamily: 'IRANSans(FaNum)',
          borderWidth: 2, 
          borderRadius: 8,
           height: 50, 
           width: '90%', 
           padding: 12,
    }
});
export default ShiftList;