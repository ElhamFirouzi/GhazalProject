




import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { Container, Header, View, Title, Content, Text, Left, Right, Body, CardItem ,Button,Card} from 'native-base';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Image, StyleSheet, StatusBar, TextInput, ScrollView, Slider, TouchableOpacity, Picker, Platform, ImageBackground, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';
class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
            isModalVisible: false,
          
            AdvertisingBox: [
                {
                    id: ' ردیف 1',
                    Sender: ' لیلا ',
                    Reciver: "      الهام  ",
                    PostType:  " تست",
                    Condition:'تست',
                    Title:'تستی',
                    Description:' اپلیکیشن غزال اپلیکیشن غزال توضیحات ',
                    InsertDate:' 3/07/99',
                },
                {
                    id: 'ردیف 1',
                    Sender: 'ارسال کننده ',
                    Reciver: "     دریافت کننده ",
                    PostType:  "نوع ارسال",
                    Condition:'وضعیت',
                    Title:'عنوان',
                    Description:'توضیحات ',
                    InsertDate:'تاریخ درج',
                },
                {
                    id: 'ردیف 1',
                    Sender: 'ارسال کننده ',
                    Reciver: "     دریافت کننده ",
                    PostType:  "نوع ارسال",
                    Condition:'وضعیت',
                    Title:'عنوان',
                    Description:'توضیحات ',
                    InsertDate:'تاریخ درج',
                },
            
            ]


        }
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    toggleModall=()=>{
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
                            <Title> لیست پیام ها </Title>
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

          <View style={styles.container}>{
                        this.state.AdvertisingBox.map((item, id) =>
                            <View key={id} style={{  
                             width: '100%',paddingBottom:10}}>

            <Card style={{alignItems:'flex-end'}}>
            <CardItem>
                <Text style={styles.textBox}> ردیف :{item.id}</Text>
             </CardItem>
           
            <CardItem>
            <Text style={styles.textBox}>ارسال کننده : {item.Sender}</Text>    
             </CardItem>


             <CardItem>
             <Text style={styles.textBox}>دریافت کننده : {item.Reciver}</Text>     
             </CardItem>

             <CardItem>
             <Text style={styles.textBox}> نوع ارسال : {item.PostType}</Text>          
             </CardItem>

             <CardItem>
             <Text style={styles.textBox}> وضعیت  : {item.Condition}</Text>     
             </CardItem>

             <CardItem>
             <Text style={styles.textBox}> عنوان   : {item.Title}</Text>     
             </CardItem>

             <CardItem>
             <Text   style={styles.textBox} numberOfline={5}> توضیحات   : {item.Description}</Text>     
             </CardItem>

             <CardItem>
             <Text style={styles.textii}> تاریخ درج  : {item.InsertDate}</Text>    
             </CardItem>

<CardItem style={{ flexDirection:'row',}}>
  <Left>
  <TouchableOpacity >
    <View style={{backgroundColor:'#dc3545',width:100,height:100,borderRadius:5,}}>
    <Icon name="comment" size={25} color="#FFFFFF" onPress={this.toggleModall} style={{alignItems:'center',textAlign:'center'}}> مشاهده کامل متن</Icon>    
    </View>

</TouchableOpacity>
<TouchableOpacity >
    <View style={{backgroundColor:'#0C5B77',width:60,height:60,borderRadius:5,}}>
    <Icon name="reply" size={25} color="#FFFFFF" onPress={this.toggleModal} style={{alignItems:'center',textAlign:'center'}}> پاسخ</Icon>    
    </View>

</TouchableOpacity>
<Modal isVisible={this.state.isModalVisible} animationType='slide' >
                                                    <View style={{ width: 350, height: 300, backgroundColor: '#FFFFFF' }}>
                                                        <Text style={{ color: '#212529', fontFamily: 'IRANSans(FaNum)', marginBottom: 30, fontSize: 22, }} >ارسال پیام!</Text>
                                                        <View style={{ flexWrap: "wrap", justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-around', }}>
                                                            <TextInput style={{ backgroundColor: '#F1F1F1', borderColor: '#DCDCDC', fontFamily: 'IRANSans(FaNum)', borderWidth: 2, borderRadius: 8, height: 50, width: '90%', padding: 12, }} numberOfLines={2} placeholder="  عنوان" />
                                                            <TextInput style={{ backgroundColor: '#F1F1F1', borderColor: '#DCDCDC', fontFamily: 'IRANSans(FaNum)', borderWidth: 2, borderRadius: 8, height: 50, width: '90%', padding: 12, marginBottom: 30 }} numberOfLines={10} placeholder="  پیام خود را وارد کنید" />
                                                        </View>
                                                          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', }}>

                                                            <View style={{ width: '20%', marginRight: 20, alignItems: 'center' }}>
                                                                <TouchableOpacity onPress={this.toggleModal} >
                                                                    <Text style={{ color: '#212529', fontSize: 14, fontFamily: 'IRANSans(FaNum)', backgroundColor: '#F1F1F1', paddingLeft: 9, paddingRight: 9, paddingTop: 4, paddingBottom: 4 }}>انصراف</Text>
                                                                </TouchableOpacity>
                                                            </View>

                                                            <View style={{ width: '20%', marginRight: 20, alignItems: 'center' }}>
                                                                <TouchableOpacity onPress={this.toggleModal} >
                                                                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'IRANSans(FaNum)', backgroundColor: '#0C5B77', paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3 }}>ارسال</Text>
                                                                </TouchableOpacity>
                                                            </View>

                                                        </View>
                                                    </View>
                                                </Modal>








                                                <Modal isVisible={this.state.isModalVisible} animationType='slide' >
                                                    <View style={{ width: 350, height: 300, backgroundColor: '#FFFFFF' }}>
                                                        <Text style={{ color: '#212529', fontFamily: 'IRANSans(FaNum)', marginBottom: 30, fontSize: 22, paddingRight:30 ,
                                                    paddingTop:15}} >ارسال hh!</Text>
                                                        <View style={{ flexWrap: "wrap", justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-around', }}>
                                                            <TextInput style={{ backgroundColor: '#F1F1F1', borderColor: '#DCDCDC', fontFamily: 'IRANSans(FaNum)', borderWidth: 2, borderRadius: 8, height: 50, width: '90%', padding: 12, marginBottom:10}} numberOfLines={2} placeholder="  عنوان" />
                                                            <TextInput style={{ backgroundColor: '#F1F1F1', borderColor: '#DCDCDC', fontFamily: 'IRANSans(FaNum)', borderWidth: 2, borderRadius: 8, height: 50, width: '90%', padding: 12, marginBottom: 30 }} numberOfLines={10} placeholder="  پیام خود را وارد کنید" />
                                                        </View>
                                                          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', }}>

                                                            <View style={{ width: '20%', marginRight: 20, alignItems: 'center' }}>
                                                                <TouchableOpacity onPress={this.toggleModall} >
                                                                    <Text style={{ color: '#212529', fontSize: 14, fontFamily: 'IRANSans(FaNum)', backgroundColor: '#F1F1F1', paddingLeft: 9, paddingRight: 9, paddingTop: 4, paddingBottom: 4 }}>انصراف</Text>
                                                                </TouchableOpacity>
                                                            </View>

                                                            <View style={{ width: '20%', marginRight: 20, alignItems: 'center' }}>
                                                                <TouchableOpacity onPress={this.toggleModall} >
                                                                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'IRANSans(FaNum)', backgroundColor: '#0C5B77', paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3 }}>ارسال</Text>
                                                                </TouchableOpacity>
                                                            </View>

                                                        </View>
                                                    </View>
                                                </Modal>

  </Left>


</CardItem>
            </Card>
            

              
                            </View> )}
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
     
      
       paddingTop:30,




    },
    imgee: {
        backgroundColor: '#fff',
        width: "100%",
        height: 320,
        fontSize: 100


    },
    textii: {
        fontSize: 15,
        fontFamily: 'IRANSansMobile',
        color:'#0C5B77'
    },
    textBox: {
        fontSize: 15,
        fontFamily: 'IRANSansMobile',
        color:'#212529'
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
        flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'center',
        fontFamily: 'IRANSansMobile',
        fontSize: 15,
        borderBottomColor: 'rgba(0,0,0,.125)',
        borderBottomWidth: 2,
        paddingRight:20

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
export default Messages;