
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
// import SearchIcon from "react-native-vector-icons/Evillcons";
import { SliderBox } from "react-native-image-slider-box";
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import React, { Component } from 'react';
import { Container, Header, View, Title, Content, Text, Left, Right, Body, CardItem, Card,Footer, FooterTab, Button } from 'native-base';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Image, StyleSheet, StatusBar, TextInput, ScrollView, Slider, TouchableOpacity, Picker, Platform, ImageBackground, TouchableHighlight,Linking } from 'react-native';





class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ProvinceText: '',
            ProvinceItem: '',
            isModalVisible: false,
            Shift_title: [
                { name: 'شیفت 1', id: 0 },
                { name: 'شیفت 2', id: 1 },
              
              
            ],
            Province: [
                { name: 'تهران' },
                { name: 'شیراز' },
                { name: 'اصفهان' },
            
            ],
            Shift_type: [

                { name: 'شیفت بامداد' },
                { name: 'شیفت صبح' },
              
            ],

            PickerValue: 'مثلا همه دسته بندی ها',


            images: [
                require('../../../Picture/2856808.png'),

                require('../../../Picture/2856808.png'),

                require('../../../Picture/2856808.png'),
            ],
            Pharmacy_photos: [

                {
                    imge: require('../../../Picture/chemist.png'),
                    title: "داروساز ",
                },


                {
                    imge: require('../../../Picture/network.png'),
                    title: "شرکت دارویی",
                },
                {
                    imge: require('../../../Picture/robot.png'),
                    title: "صنعتی ",
                },

                {
                    imge: require('../../../Picture/pharmacyy.png'),
                    title: "داروخانه",
                },
            ],
            Global: [
                {
                    PahrmacyName: "داروخانه دکتر اکبری",
                    Type: "داروخانه",

                    Date: "تاریخ شیفت :یکشنبه 23 خرداد",
                    Hour: "ساعت شیفت:13:00",
                },

                {
                    PahrmacyName: "داروخانه دکتر اکبری",
                    Type: "داروخانه",
                    Date: "تاریخ شیفت :یکشنبه 23 خرداد",
                    Hour: "ساعت شیفت:13:00",
                },
                {
                    PahrmacyName: "داروخانه دکتر اکبری",
                    Type: "داروخانه",
                    Date: "تاریخ شیفت :یکشنبه 23 خرداد",
                    Hour: "ساعت شیفت:13:00",
                },
            ],

            isSideMenuOpen: false



        };
    }


    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };



    makeCall = () => {
        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${09108000000}';
        } else {
            phoneNumber = 'tel:${09108000000}'
        }
        Linking.openURL(phoneNumber);
    };


    //  disableBackButton=()=>{
    //      BackHandler.exitApp();
    //      return true;
    //  }
    //      componentDidMount()
    //      {
    //         BackHandler.addEventListener('hardwareBackPress',this.disableBackButton);
    //      }


    //      componentDidUnmount()
    //  {
    //  BackHandler.removeEventListener('hardwareBackPress',this.disableBackButton);
    //  }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#0C5B77" />
                <Content>
                    <View style={styles.topheader}>
                        <Left>
                            <Text style={styles.ghazal}> غزال </Text>
                        </Left>

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
                                <Icon name="navicon" size={30} color="#FFFFFF" />

                            </TouchableOpacity>
                        </Right>
                    </View>

                    <View>
                        <SliderBox
                            autoplay
                            circleLoop
                            ImageComponentStyle={{ width: '100%' }}
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            images={this.state.images}
                            sliderBoxHeight={200}
                            dotStyle={{ width: 10, height: 10, borderRadius: 5, marginHorizontal: 0, padding: 0, margin: 0, backgroundColor: "#f2f0ee" }}
                        />
                    </View>

                    <View style={styles.SearchBoxTotal}>
                        <Text style={styles.shift}> کلمه مورد نظر خود را وارد کنید   !</Text>

                        <View style={{ flex: 1, marginTop: 30 }}>
                            {/* <Text style={styles.ShiftTitle}> عنوان شیفت:</Text> */}
{/* 
                            <SearchableDropdown
                                onTextChange={text => console.log(text)}
                                onItemSelect={item => console.log(JSON.stringify(item))}
                                containerStyle={{ padding: 5 }}
                                textInputStyle={styles.TextInputStyle}
                                itemStyle={styles.ItemStyle}
                                itemTextStyle={{ color: '#346BAE', }}
                                itemsContainerStyle={{ maxHeight: '90%', }}
                                items={this.state.Shift_title}
                                placeholder="مثلا:شیفت در داروخانه"
                                resetValue={false}
                                underlineColorAndroid="transparent" />

                            <Text style={styles.Province}>استان:</Text>
                            <SearchableDropdown
                                onTextChange={text => console.log(text)}
                                onItemSelect={item => console.log(JSON.stringify(item))}
                                containerStyle={{ padding: 5 }}
                                textInputStyle={styles.TextInputStyle}
                                itemStyle={styles.ItemStyle}
                                itemTextStyle={{ color: '#346BAE', }}
                                itemsContainerStyle={{ maxHeight: '90%', }}
                                items={this.state.Province}
                                placeholder="مثلا:همه استان ها"
                                resetValue={false}
                                underlineColorAndroid="transparent" />

                            <Text style={{ fontSize: 12, fontFamily: 'IRANSans(FaNum)', color: '#000000', }}> نوع شیفت:</Text> */}
   
                            <SearchableDropdown
                                onTextChange={text => console.log(text)}
                                onItemSelect={item => console.log(JSON.stringify(item))}
                                containerStyle={{ padding: 5 }}
                                textInputStyle={styles.TextInputStyle}
                                itemStyle={styles.ItemStyle}
                                itemTextStyle={{ color: '#346BAE', }}
                                itemsContainerStyle={{ maxHeight: '90%', }}
                                items={this.state.Shift_type}
                                placeholder="مطلب مورد نظرتو  جستجو کن"
                                resetValue={false}
                                underlineColorAndroid="transparent" />

                            {/* <Text style={styles.shifttt}> جستجوی پشرفته:</Text> */}
                            <View style={{  alignItems: 'center' ,paddingVertical:20}}>
                                <TouchableOpacity style={styles.samaneh}  onPress={() => this.props.navigation.navigate('SearchDetails')} >
                                    <Text style={styles.TextSamaneh}> جستجو  </Text>
                                </TouchableOpacity>
                            </View>
                            </View>

                            <View style={styles.container}>
                             
                         
<TouchableOpacity onPress={() => this.props.navigation.navigate('Pharmacist')} style={{   alignItems: 'center'}}>
<Image source={require('../../../Picture/chemist.png')}/>
<Text style={styles.TextPharmacy}>داروساز </Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.props.navigation.navigate('PharmaceuticalDetails')} style={{ alignItems: 'center'}}>
<Image source={require('../../../Picture/network.png')}/>
<Text  style={styles.TextPharmacy}> شرکت دارویی </Text>
</TouchableOpacity><TouchableOpacity onPress={() => this.props.navigation.navigate('IndustrialDetails')} style={{alignItems: 'center'}}>
<Image source={require('../../../Picture/robot.png')}/>
<Text  style={styles.TextPharmacy}> صنعتی </Text>
</TouchableOpacity><TouchableOpacity onPress={() => this.props.navigation.navigate('Details')} style={{   alignItems: 'center'}}>
<Image source={require('../../../Picture/pharmacyy.png')}/>
<Text  style={styles.TextPharmacy}> داروخانه </Text>
</TouchableOpacity>


                             {/* {this.state.Pharmacy_photos.map((item, index) =>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
                                        <View key={index} style={{ alignItems: 'center' }}>
                                            <Image source={item.imge} />
                                            <Text> {item.title} </Text>
                                        </View>
                                    </TouchableOpacity>
                                )} */}
                            
                        </View>
                    </View>
                    <View style={styles.totalbox}>

                        <View style={styles.boxshift}>
                            <Text style={styles.boxshifttext}> جدیدترین شیفت </Text>
                        </View>


                        <View style={styles.box}>

                            {this.state.Global.map((item, index) =>
                                <View key={index}>

                                    <View style={styles.pharmacy_box}>

                                        <View style={styles.pahrmacy}>

                                            <Text style={styles.texti}> {item.PahrmacyName} </Text>
                                            <Text style={{ paddingLeft: 3, paddingTop: 5 }}>
                                                <TouchableOpacity >
                                                    <Icon name="phone-square" size={25} color="#0C5B77" onPress={this.makeCall} />
                                                </TouchableOpacity>
                                            </Text>
                                            <Text style={{ paddingTop: 5, paddingLeft: 5 }}>
                                                <TouchableOpacity>
                                                    <Icon name="comment" size={25} color="#0C5B77" onPress={this.toggleModal} />
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
                                                                <TouchableHighlight onPress={this.toggleModal} >
                                                                    <Text style={{ color: '#212529', fontSize: 14, fontFamily: 'IRANSans(FaNum)', backgroundColor: '#F1F1F1', paddingLeft: 9, paddingRight: 9, paddingTop: 4, paddingBottom: 4 }}>انصراف</Text>
                                                                </TouchableHighlight>
                                                            </View>

                                                            <View style={{ width: '20%', marginRight: 20, alignItems: 'center' }}>
                                                                <TouchableOpacity onPress={this.toggleModal} >
                                                                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontFamily: 'IRANSans(FaNum)', backgroundColor: '#0C5B77', paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3 }}>ارسال</Text>
                                                                </TouchableOpacity>
                                                            </View>

                                                        </View>
                                                    </View>
                                                </Modal>
                                            </Text>
                                        </View>
                                        <Text style={styles.textii}> {item.Type} </Text>
                                        <Text style={styles.textii}> {item.Date} </Text>
                                        <Text style={styles.textii}>{item.Hour} </Text>

                                    </View>
                                </View>
                            )}
                        </View>
                    </View>


                </Content>
                <Footer >
          <FooterTab style={{backgroundColor: '#0C5B77'}}>
            <Button vertical  onPress={() => this.props.navigation.navigate('NewsandArticles')}>
            <Icon name="newspaper-o" size={25} color="#FFFFFF" />
              <Text style={styles.TextFooter}> مقالات</Text>
            </Button>
            <Button vertical  onPress={() => this.props.navigation.navigate('Workers')}>
            <Icon name="users" size={25} color="#FFFFFF" />
              <Text style={styles.TextFooter}>کارجویان</Text>
            </Button>
            <Button vertical    onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Icon name="home" size={30} color="#FFFFFF" />
              <Text style={styles.TextFooter}>خانه</Text>
            </Button>
            <Button vertical  onPress={() => this.props.navigation.navigate('profile')}>
            <Icon name="user" size={25} color="#FFFFFF" />
              <Text style={styles.TextFooter}>پروفایل</Text>
            </Button>
            <Button vertical  onPress={() => this.props.navigation.navigate('ShiftList')}>
            <Icon name="list-alt" size={25} color="#FFFFFF" />
              <Text style={styles.TextFooter}> شیفت ها</Text>
            </Button>
          </FooterTab>
        </Footer>
            </Container>
        )
    }
}






const styles = StyleSheet.create({

    Total: {
        width: '100%',

    },
    TextFooter:{
        color: '#FFFFFF',
         fontSize: 10,
          fontFamily: 'IRANSans(FaNum)',
    },
    samaneh: {
        backgroundColor: '#0C5B77',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0C5B77',
        width: '97%',
        height: 50,
        justifyContent: 'center',
     
     
    },
    TextSamaneh: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'IRANSans(FaNum)',
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
    TextPharmacy:{
        fontSize: 12,
        fontFamily: 'IRANSans(FaNum)',
    },
    shift: {
        fontSize: 17,
        fontFamily: 'IRANSans(FaNum)',
        color: '#000000',
    },
    shiftt: {
       
        fontSize: 12,
        fontFamily: 'IRANSans(FaNum)',
        color: '#000000',
    },
    shifttt: {
        fontSize: 12,
        fontFamily: 'IRANSans(FaNum)',
        color: '#346BAE',
    },

    inputtext: {
        backgroundColor: '#F1F1F1',

        borderColor: '#DCDCDC',
        borderWidth: 2,
        borderRadius: 8,
        height: 40,
        width: '100%',
        marginBottom: 20

    },

    container: {
     
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    totalbox: {
        flex: 1,
        flexWrap: 'wrap',
    },
    box: {
        width: '95%',
        backgroundColor: '#FFFFFF',
        height: 360,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderColor: '#B5B5B5',
        shadowColor: '#000000',
        elevation: 7,
        padding: 20,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    boxshift: {
        width: '95%',
        backgroundColor: '#0C5B77',
        height: 60,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        elevation: 7,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 20,
        borderColor: '#B5B5B5',
        shadowColor: '#000000',
    },
    boxshifttext: {

        fontSize: 15,
        fontFamily: 'IRANSans(FaNum)',
        color: '#FFFFFF',
        height: 40,
    },
    ItemStyle: {
        borderRadius: 8,
        padding: 10,
        marginTop: 2,
        backgroundColor: '#FAF9F8',
        borderColor: '#bbb',
        borderWidth: 1,
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
    texti: {
        fontFamily: 'IRANSans(FaNum)',
        color: '#0C5B77',
        padding: 10,
        fontSize: 12,
        paddingLeft: 170
    },
    pahrmacy: {
        flex: 1,

        flexDirection: 'row-reverse',

    },
    textii: {
        paddingRight: 10,
        color: '#858585',
        fontFamily: 'IRANSans(FaNum)',
        fontSize: 10,
    },
    SearchBoxTotal: {
        width: '95%',
        backgroundColor: '#FFFFFF',
        height: 390,
        borderRadius: 15,
        borderColor: '#B5B5B5',
        shadowColor: '#000000',
        elevation: 7,
        margin: 10,
        padding: 20,
       
    },
    ShiftTitle: {
        fontSize: 12,
        fontFamily: 'IRANSans(FaNum)',
        color: '#000000',
    },
    Province: {
        fontSize: 12,
        fontFamily: 'IRANSans(FaNum)',
        color: '#000000',

    },
    TextInputStyle: {
        backgroundColor: '#F1F1F1',
        borderColor: '#DCDCDC',
        borderWidth: 2,
        borderRadius: 8,
        height: 50,
        width: '100%',
        padding: 12,
    }
});


export default HomeScreen;