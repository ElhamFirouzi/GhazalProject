
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
    Button,
    CheckBox,
    TextInput,
    Alert,
    BackHandler
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
const persianDigits = "۰۱۲۳۴۵۶۷۸۹";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showchecked: false,
            mobile: '',
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

        };
    }
    togglechecked() {
        const doescheked = this.state.showchecked
        this.setState({ showchecked: !doescheked })
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

        else  if (this.state.mobile.length < 11) {
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
                'پسورد خود را وارد نمایید',
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
    //  disableBackButton=()=>{
    //      BackHandler.exitApp();
    //      return true;
    //  }
    //      componentWillMount()
    //      {
    //         BackHandler.addEventListener('hardwareBackPress',this.disableBackButton);
    //      }


    //  componentWillUnmount()
    //  {
    //  BackHandler.removeEventListener('hardwareBackPress',this.disableBackButton);
    //  }



    render() {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar
                backgroundColor="#F1F1F1"

            />
            <View style={{
                width: '95%', backgroundColor: '#FFFFFF', height: 410, borderRadius: 15, borderColor: '#ced4da'
                , shadowColor: '#000000', elevation: 7
            }}>

                <Text style={{ fontSize: 16, fontFamily: 'IRANSans(FaNum)', color: '#212529', textAlign: 'center', paddingTop: 20 }}>ورود</Text>
                <Text style={{ fontSize: 14, fontFamily: 'IRANSans(FaNum)', color: '#0C5B77', paddingTop: 20, paddingRight: 20 }}>موبایل:</Text>
                <View style={{ alignItems: 'center' }}>
                    <TextInput style=
                        {{
                            fontSize: 12, fontFamily: 'IRANSans(FaNum)', backgroundColor: '#F1F1F1', borderColor: '#DCDCDC', borderWidth: 2,
                            borderRadius: 8,
                            height: 50, width: '90%', paddingRight: 10,
                            color: '#8d759a',
                        }}
                        placeholder='موبایل خود را بدین شکل وارد کنید:09121234567'
                        ref="mobile"
                        maxLength={11}
                        keyboardType={'number-pad'}
                        value={this.state.mobile}
                        onChangeText={(mobile) => this.setState({ mobile: this.convertToEnglishNumber(mobile) })}
                    />
                </View>


                  <Text style={{ fontSize: 14, fontFamily: 'IRANSans(FaNum)', color: '#0C5B77', paddingRight: 20, paddingTop: 20 }}>رمز عبور:</Text>
                  <View style={{ alignItems: 'center' }}>
                           <TextInput style={{  
                        fontSize: 12, fontFamily: 'IRANSans(FaNum)', paddingRight: 10, backgroundColor: '#F1F1F1',
                        borderColor: '#DCDCDC', borderWidth: 2, borderRadius: 8, height: 50, width: '90%', color: '#8d759a'
                    }}
                        placeholder='رمز عبور را اینجا وارد کنید'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password: this.convertToEnglishNumber(password) })}
                    />
                </View>

                <View style={{ flexDirection: 'row-reverse', paddingTop: 20 }}>
                    <Text style={{
                        fontFamily: 'IRANSans(FaNum)',
                        color: '#0C5B77',
                        fontSize: 15,
                        paddingRight: 20,
                    }}>به خاطر بسپار؟</Text>
                    <CheckBox
                        value={this.state.showchecked}
                        onValueChange={() => this.togglechecked()}

                    />

                </View>

                <View style={{ flexDirection: 'row-reverse', paddingTop: 20, }}>
                {!this.state.load && (
                    <TouchableOpacity  onPress={() => {
                                    this.registerUser()
                  
                    }}
                        style={{
                            backgroundColor: '#0c5b77',
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: '#0c5b77',
                            width: 80,
                            height: 50,
                            justifyContent: 'center',
                            paddingRight:5,
                            marginRight: 20
                        }}>
                        <Text style={{
                            color: '#ffffff',
                            textAlign: 'center',
                            fontSize: 14,
                            fontFamily: 'IRANSans(FaNum)'
                        }}>ورود  </Text>
                    </TouchableOpacity>
    
                            )}


                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Register')
                    }}
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: 50,
                            borderWidth: 2,
                            borderColor: '#0c5b77',
                            width: 100,
                            height: 50,
                            justifyContent: 'center',
                            marginRight: 20,
                            paddingRight:5,

                        }}>
                        <Text style={{
                            color: '#0c5b77',
                            textAlign: 'center',
                            fontSize: 14,

                            fontFamily: 'IRANSans(FaNum)'
                        }}>ثبت نام  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        );
    }
}
export default Login;