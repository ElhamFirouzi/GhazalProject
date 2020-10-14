
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
  Button, TextInput,
} from 'react-native';
import { Container, Header, Left, Right, Body, Title, Content, Form, Item, Input, Label,Alert } from 'native-base';
import Headerr from './../Header/Header';
import Footer from "../Footer/Footer";
import Styles from './../../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

let uri = null;
let type = '';
let fileName = '';
let thisComponent = null;
const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

class profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideMenuOpen: false,
      email: '',
      nationalCode: '',
      password: '',
      repeatPassword: '',
      name: '',
      lastName: '',
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
      Mobile: '',
      Pass: '',
      token: ''


    };
  }
  
  profilePress = () => {
    let isValid = true;
    let chars = this.state.mobile.split('');

    if (this.state.email.length !== 0 && !this.state.validatedEmail) {

        this.refs['email']._root.focus();

        isValid = false;
    } else if (this.state.password.length < 1) {
        Alert.alert(
            'خطا',
            'لطفا رمز عبور خود را وارد نمایید',
            [
                {
                    text: 'تایید', onPress: () => {
                        this.refs['password']._root.focus()
                    },
                    style: 'cancel'
                },
            ],
            {cancelable: false}
        );
        isValid = false;
    } else if (this.state.repeatPassword.length < 1) {
        Alert.alert(
            'خطا',
            'لطفا رمز عبور خود را دوباره وارد نمایید',
            [
                {
                    text: 'تایید', onPress: () => {
                        this.refs['repeatPassword']._root.focus()
                    },
                    style: 'cancel'
                },
            ],
            {cancelable: false}
        );
        isValid = false;
    } else if (this.state.repeatPassword !== this.state.password) {
        this.refs['password']._root.focus();
        this.refs['repeatPassword']._root.clear();
        this.refs['password']._root.clear();
        isValid = false;
    } else if (this.state.name.length < 1) {
        Alert.alert(
            'خطا',
            'لطفا نام خود را  وارد نمایید',
            [
                {
                    text: 'تایید', onPress: () => {
                        this.refs['name']._root.focus()
                    },
                    style: 'cancel'
                },
            ],
            {cancelable: false}
        );
        isValid = false;

    } else if (this.state.persianCharN) {
        this.refs['name']._root.focus();
        isValid = false;
    } /*else if (this.state.lastName.length < 1) {
        Alert.alert(
            'خطا',
            'لطفا نام خانوادگی خود را وارد نمایید',
            [
                {
                    text: 'تایید', onPress: () => {
                        this.refs['lastName']._root.focus()
                    },
                    style: 'cancel'
                },
            ],
            {cancelable: false}
        );
        isValid = false;
    } */ else if (this.state.persianCharF) {
        this.refs['lastName']._root.focus();
        isValid = false;
    } else if (this.state.nationalCode.length !== 0 && this.state.nationalCode.length < 10) {
        this.refs['nationalCode']._root.focus();
        isValid = false;
    } else if (this.state.mobile.length < 11) {
        Alert.alert(
            'خطا',
            'لطفا شماره تلفن همراه خود را  وارد نمایید',
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
    } else if (chars[0] !== '0') {
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

    if (isValid) {
        this.setState({load: true});
        this.registerUser();
    }


};
  validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!reg.test(text)) {

      this.setState({
        email: text,
        validatedEmail: false,
      });
      return false;
    } else {

      this.setState({ email: text, validatedEmail: true, });
    }
  };

  _focusNextField(nextField) {
    this.refs[nextField]._root.focus()
  }

  contain_Persian_Char = (str, type) => {

    let EnglishChar = /[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?،؛]/g;
    if (type === 'u') {
      let PersianOrASCII = /[\u0600-\u06FF\s!@#$%^&*()+=\[\]{};':"\\|,.<>\/?،؛]/g;
      if (str.search(PersianOrASCII) !== -1) {
        this.setState({ englishChar: true });
      } else
        this.setState({ englishChar: false });
    } else if (type === 'n') {
      if (str.search(EnglishChar) !== -1) {
        this.setState({ persianCharN: true });
      } else {
        this.setState({ persianCharN: false });
      }
    } else if (type === 'f') {
      if (str.search(EnglishChar) !== -1) {
        this.setState({ persianCharF: true });
      } else
        this.setState({ persianCharF: false });
    }
  };
  convertToEnglishNumber(input) {
    return input.replace(/[\u06F0-\u06F9]/g, function (m) {
      return persianDigits.indexOf(m);
    });
  };
  

  render() {
    return (

      <Container>
        <Header style={{ backgroundColor: "#0c5b77", height: 60 }}>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name="arrow-left" size={25} color="#FFFFFF" />
            </TouchableOpacity>
          </Left>
          <Right>
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
          </Right>
        </Header>
        <StatusBar backgroundColor="#0c5b77" />
        <Content >


          <View style={Styles.ProfileHeader}>
            <View style={Styles.Textheader}>
              <Text style={Styles.text}>نوع: داروخانه</Text>
              <Text style={Styles.text}> ویرایش اطلاعات  </Text>
            </View>



            {/* <View style={{ paddingLeft: 80 }}>
            <Image source={require('./../../../Picture/network.png')}
              style={Styles.imagestyle} />
 </View>  */}

            <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>

            {/* <View Styles={Styles.selectImage}>
                                    {
                                        this.state.avatarSource !== null && this.state.PictureUrl === null ?
                                        <Image style={Styles.imageProfile} source={this.state.avatarSource}/> :
                                        this.state.PictureUrl !== null &&
                                        <Image style={Styles.imageProfile} source={{uri: this.state.PictureUrl}}/>
                                    }

                                    <TouchableOpacity
                                        style={Styles.btnSelectImage}
                                   >
                                        <Text style={Styles.txtBtnSelectImage}>
                                            انتخاب عکس
                                        </Text>
                                    </TouchableOpacity>
                                </View> */}
              <Text style={{ fontSize: 14, fontFamily: 'IRANSans(FaNum)', color: '#000000', marginBottom: 8, marginTop: 13 }}> ایمیل :</Text>
              <TextInput style={Styles.TextInputProfile}
                placeholder='  SuperVisor@Ghazal.com '
                ref="email"
                onChangeText={(email) => this.validateEmail(email)}
                onSubmitEditing={() => this._focusNextField('password')}
                value={this.state.email}
              />
              {this.state.email.length !== 0 && !this.state.validatedEmail ?
                <Text style={Styles.txtAlarmLogin}>
                  ایمیل معتبر نیست
                                    </Text> : null}
              <Text style={{ fontSize: 14, fontFamily: 'IRANSans(FaNum)', color: '#000000', marginBottom: 8, marginTop: 13 }}> نام :</Text>
              <TextInput style={Styles.TextInputProfile}
                placeholder='  SuperVisor '
                ref="name"
                onSubmitEditing={() => this._focusNextField('lastName')}
                onChangeText={(name) => this.setState({ name: name })}
                onBlur={() => this.contain_Persian_Char(this.state.name, 'n')}
                value={this.state.name}

              />
              {this.state.persianCharN ?
                <Text style={Styles.txtAlarmLogin}>
                  نام بایستی صرفا کاراکتر های فارسی باشد
                                    </Text> : null}


              <Text style={{ fontSize: 14, fontFamily: 'IRANSans(FaNum)', color: '#000000', marginBottom: 8, marginTop: 13 }}> پسورد :</Text>
              <TextInput style={Styles.TextInputProfile}
                placeholder='  Pass@234 '
                ref="password"
                password={true}
                onSubmitEditing={() => this._focusNextField('repeatPassword')}
                onChangeText={(password) => this.setState({ password: password })}
                value={this.state.password}
              />
              {this.state.password !== '' && this.state.password.length < 4 ?
                <Text style={Styles.txtAlarmLogin}>
                  رمز عبور بایستی بیش از 4 کارکتر باشد
                                    </Text> : null}


              <Text style={{ fontSize: 14, fontFamily: 'IRANSans(FaNum)', color: '#000000', marginBottom: 8, marginTop: 13 }}> تکرار پسورد :</Text>
              <TextInput style={Styles.TextInputProfile}
                placeholder='  Pass@234 '
                ref="repeatPassword"
                onSubmitEditing={() => this._focusNextField('name')}
                onChangeText={(repeatPassword) => this.setState({ repeatPassword: repeatPassword })}
                value={this.state.repeatPassword}
              />
              {this.state.password !== this.state.repeatPassword && this.state.repeatPassword !== '' ?
                <Text style={Styles.txtAlarmLogin}>
                  رمز عبور با تکرار آن یکسان نیست
                                    </Text> : null
              }
              <Text style={{ fontSize: 14, fontFamily: 'IRANSans(FaNum)', color: '#000000', marginBottom: 8, marginTop: 13 }}> نام خانوادگی :</Text>
              <TextInput style={Styles.TextInputProfile}
                placeholder='  Company '
                ref="lastName"
                onSubmitEditing={() => this._focusNextField('nationalCode')}
                onChangeText={(lastName) => this.setState({ lastName: lastName })}
                onBlur={() => this.contain_Persian_Char(this.state.lastName, 'f')}
                value={this.state.lastName}
              />
              {this.state.persianCharF ?
                <Text style={Styles.txtAlarmLogin}>
                  نام خانوادگی بایستی صرفا کاراکتر های فارسی باشد
                                    </Text> : null}

              <Text style={{ fontSize: 14, fontFamily: 'IRANSans(FaNum)', color: '#000000', marginBottom: 8, marginTop: 13 }}> کد ملی :</Text>
              <TextInput style={Styles.TextInputProfile}
                placeholder='  3720300555 '
                ref="nationalCode"
                maxLength={10}
                onSubmitEditing={() => this._focusNextField('mobile')}
                onChangeText={(nationalCode) => {
                  this.setState({ nationalCode: nationalCode })
                }}

                value={this.state.nationalCode}
              />
              {this.state.nationalCode.length !== 0 && this.state.nationalCode.length < 10 ?
                <Text style={Styles.txtAlarmLogin}>
                  کد ملی 10 رقم است
                                    </Text> : null}

              <Text style={{ fontSize: 14, fontFamily: 'IRANSans(FaNum)', color: '#000000', marginBottom: 8, marginTop: 13 }}> موبایل :</Text>
              <TextInput style={Styles.TextInputProfile}
                placeholder='0912111111'
                ref="mobile"
                maxLength={11}
                keyboardType='numeric'
                onChangeText={(mobile) => {
                  this.setState({ mobile: this.convertToEnglishNumber(mobile) })
                }}
                value={this.state.mobile}

              />
              {this.state.mobile !== '' && this.state.mobile.length < 11 ?
                <Text style={Styles.txtAlarmLogin}>
                  شماره تلفن همراه 11 رقم است
                                    </Text> : null}


                                    <TouchableOpacity
                                         onPress={()=>{this.profilePress()}}
                                        style={styles.ButtonStyle}
                                    >
                                        <Text style={{color:'#FFFFFF',}}>ویرایش حساب کاربری</Text>
                                    </TouchableOpacity>

            </View>



          </View>
        </Content>
      </Container>






    );
  }
}
export default profile;
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
  selectImage: {
    alignItems: 'center',
    justifyContent: 'center',
    /* margin: 10*/
},
imageProfile: {
    borderWidth: 2,
    borderColor: GLOBAL.OFFICIAL_PURPEL_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    width: 120,
    height: 120,
    marginBottom: 10
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
    borderRadius: 8,
    borderWidth: 2,
    height: 45, width: '60%',
    marginTop: 15,
    fontSize: 12
    , fontFamily: 'IRANSans(FaNum)',
   marginTop:40,
  alignItems:'center',
  justifyContent:'center',
  borderColor:'#DCDCDC'

  }


});