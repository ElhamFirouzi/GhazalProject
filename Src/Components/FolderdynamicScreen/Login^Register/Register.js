import React from 'react';
import { View, Text, Image,Alert, StyleSheet, TextInput, ScrollView, Slider, StatusBar, TouchableOpacity, color, Dimensions, ImageBackground, TouchableHighlight } from 'react-native';
import Styles from '../../Styles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// const screenWidth = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
import { Body, Container, Header, Icon, Left, Right, FooterTab, Content, Button, Item, Input, Footer } from 'native-base';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Login from './Login';

class Register extends React.Component {


    constructor() {
        super();
        this.state = {
            Shift_title: [
                { name: 'ثبت نام به عنوان کاربر عادی', id: 0 },
                { name: "ثبت نام به عنوان مالک داروخانه", id: 1 },
                { name: ' ثبت نام به عنوان مالک صنعت ', id: 2 },
                { name: 'ثبت نام به عنوان شرکت دارو سازی ', id: 3 },
                { name: 'ثبت نام به عنوان شرکت دارو ساز ', id: 4 },

            ], 

          
                email: '',
                /* userName: '',*/
                nationalCode: '',
                password: '',
                Name: '',
                mobilePresenter: '',
                mobile: '',
                load: false,
                validated: true,
                englishChar: false,
                persianCharN: false,
                persianCharF: false,
                avatarSource: null,
                PictureUrl: null,
                period: false,
                ovulation: false,
                status: false,
                isDeletePicture: false,
                validatedEmail: true,
                modal: false,
                dateOk: false,
                reservationDate: '',
                ShowCounter:false,
                Showbtn:true
         
           
        }



    }
    convertToEnglishNumber(input) {
        return input.replace(/[\u06F0-\u06F9]/g, function (m) {
            return persianDigits.indexOf(m);
        });
    }



  
    registerUser=()=>{
        let isValid = true;
        let chars = this.state.mobile.split('');


        if (this.state.mobile.length < 1) {
            Alert.alert(
                'خطا',
                'لطفاشماره موبایل خود را وارد نمایید',
                [
                    {
                        text: 'تایید',
                        style: 'cancel'
                    },
                ],
                {cancelable: false}
            );
            isValid = false;
        }

        else if (chars[0] !== '0') {
            Alert.alert(
                'خطا',
                'لطفا شماره همراه را با صفر ابتدایی وارد کنید',
                [
                    {
                        text: 'تایید', onPress: () => {
                        },
                        style: 'cancel'
                    },
                ],
                {cancelable: false}
            );
            isValid = false;
        }

        else  if (this.state.mobile.length < 10) {
            Alert.alert(
                'خطا',
                'تعداد ارقام شماره موبایل باید بیشتر از 10 رقم باشد',
                [
                    {
                        text: 'تایید',
                        style: 'cancel'
                    },
                ],
                {cancelable: false}
            );
            isValid = false;
        }
       else if (this.state.password.length < 1) {
            Alert.alert(
                'خطا',
                'لطفا ' +
                ' کد فعالسازی خودا را وارد نمایید',
                [
                    {
                        text: 'تایید',
                        style: 'cancel'
                    },
                ],
                {cancelable: false}
            );
            isValid = false;
        }
        if (isValid) {
            this.setState({load: true});
            this.props.navigation.navigate('HomeScreen')

        }



    }

   



    render() {
        return (
            <Container>
            <StatusBar backgroundColor="#0C5B77" />
           
            <Content>
            <Image source={require('../../../Picture/18424.jpg')}
                    style={Styles.RegisterLogin} />
                      <Text style={Styles.LoginText}>ثبت نام</Text>

<Text style={Styles.LoginText1}> لطفا موارد زیر را تکمیل کنید:</Text>
<Text style={Styles.LoginTextMobile}>موبایل:</Text>
<View style={{ alignItems: 'center' }}>
    <TextInput style={Styles.LoginTextMobile1}
        placeholder='موبایل خود را بدین شکل وارد کنید:09121234567'
        ref="mobile"
        maxLength={11}
        keyboardType={'number-pad'}
        onChangeText={(mobile) => this.setState({mobile:this.convertToEnglishNumber(mobile) })}
    />
</View>
<Button transparent style={Styles.ButtonLogin} onPress={() => {
                                        this.profilePress()
                                    }}>
                                        <Text style={Styles.ButtonTxtReview}> دریافت کد فعال سازی</Text>
                                    </Button>
            
                                    <Text style={Styles.LoginTextMobile}>کدفعالسازی:</Text>
                <View style={{ alignItems: 'center' }}>
                    <TextInput style={Styles.LoginTextMobile1}
                     onChangeText={(password) => this.setState({password:this.convertToEnglishNumber(password) })}
                        placeholder=' کد فعال سازی را اینجا وارد کنید'
                        ref="mobile"
                        maxLength={11}
                        keyboardType={'number-pad'}
                    />
                </View>
               
                <View style={{ marginLeft: 17 }}>


                               

<SearchableDropdown
            onTextChange={text => console.log(text)}
            onItemSelect={item => console.log(JSON.stringify(item))}
            containerStyle={{ padding: 5 }}
            textInputStyle={styles.TextInputStyle}
            itemStyle={styles.ItemStyle}
            itemTextStyle={{ color: '#346BAE', }}
            itemsContainerStyle={{ maxHeight: '80%', }}
            items={this.state.Shift_title}
            placeholder="ثبت نام به عنوان کاربر عادی "
            resetValue={false}
            underlineColorAndroid="transparent" />

</View>    
<View style={{ flexDirection: 'row-reverse', paddingTop: 20, paddingBottom: 20 }}>
{!this.state.load && (
<TouchableOpacity  onPress={() => { this.registerUser()}}

    

    style={{
        backgroundColor: '#ffffff',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#0c5b77',
        width: 150,
        height: 50,
        justifyContent: 'center',
        marginRight: 20,
paddingRight:10,
    }}>
    <Text style={{
        color: '#0c5b77',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'IRANSans(FaNum)'
    }}>ایجاد حساب کاربری   </Text>
</TouchableOpacity>
   )}

<TouchableOpacity onPress={() => {
    this.props.navigation.navigate('Login')
}}
    style={{
        backgroundColor: '#ffffff',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#0c5b77',
        width: 80,
        height: 50,
        justifyContent: 'center',
        marginRight: 10

    }}>
    <Text style={{
        color: '#0c5b77',

        fontSize: 14,
        paddingRight: 25,
        fontFamily: 'IRANSans(FaNum)'
    }}>ورود   </Text>
</TouchableOpacity>
</View>  


       

            </Content>
         
                    
        </Container>
        );
    }
}
export default Register;


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
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#0C5B77',
        width: 117,
        height: 38,
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
        backgroundColor: '#F1F1F1',
        borderColor: '#DCDCDC',
        borderWidth: 1,
        width:'96%'

       
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
        height: 530,
        borderRadius: 15,
        borderColor: '#B5B5B5',
        shadowColor: '#000000',
        elevation: 7,
        margin: 10,
        padding: 20
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
        fontSize: 12, fontFamily: 'IRANSans(FaNum)',
        backgroundColor: '#F1F1F1',
        borderColor: '#DCDCDC',
        borderWidth: 2,
        borderRadius: 8,
        height: 48,
        width: '96%',
        paddingRight: 10,
        color: '#8d759a',
    }
});