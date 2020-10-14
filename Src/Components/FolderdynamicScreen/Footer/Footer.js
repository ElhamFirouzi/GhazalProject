
import React,{Component} from "react";
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
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles  from './../../Styles'

class Footer extends React.Component {

    render() {
        return (<ScrollView style={Styles.containerFooter}>
                 
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
              <Text style={Styles.ghazalFooter}>  غزاااال  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
              <Text style={Styles.ghazalFooter1}>  درباره ما  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
              <Text style={Styles.ghazalFooter1}>  تماس با ما   </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
              <Text style={Styles.ghazalFooter1}>  قوانین و مقررات   </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
              <Text style={Styles.ghazalFooter1}>  انتقادات و پیشنهادات  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
              <Text style={Styles.ghazalFooter2}>   غزال در شبکه های اجتماعی   </Text>
              </TouchableOpacity>
            
              
<View style={Styles.sotialmediafooter}>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
<Icon name="whatsapp" size={25} color='#FFFFFF'/>
</TouchableOpacity>


<TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
     <Icon name="telegram" size={25} color='#FFFFFF'  />   
</TouchableOpacity>

<TouchableOpacity onPress={()=>this.props.navigation.navigate('List')}>
     <Icon name="instagram" size={25} color='#FFFFFF' />     
</TouchableOpacity>
</View>
<Text style={Styles.ghazalFooter3}>  کارجویان  </Text>

<TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
              <Text style={Styles.ghazalFooter1}>  آگهی های استخدام   </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
              <Text style={Styles.ghazalFooter1}>  ورود/ثبت نام کارجو   </Text>
              </TouchableOpacity>
              <Text style={Styles.ghazalFooter3}> کارفرمایان  </Text>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
              <Text style={Styles.ghazalFooter1}>  درج آگهی استخدام   </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContactUs')}>
              <Text style={Styles.ghazalFooter1}>  ورود به بخش کارفرمایان   </Text>
              </TouchableOpacity>

              <View style={Styles.imagetotall}>
              <Image source={require('./../../../Picture/enamad.jpg')} style={Styles.imageenamad} />

              <Image source={require('./../../../Picture/enamadmeli.jpg')} style={Styles.imageenamad1}/>
<Text style={Styles.ghazalFooter1}> طراح:
<Text style={{ color: '#4bb5b6',fontSize: 14, fontFamily: 'IRANSans(FaNum)', }}> شرکت ایده زرین پرهام</Text>تمامی حقوق وبسایت </Text>
<Text style={Styles.ghazalFooter1}>محفوظ و در اختیار <Text style={{ color: '#4bb5b6',fontSize: 14, fontFamily: 'IRANSans(FaNum)', }}> غزال</Text>  میباشد</Text>
              </View>

</ScrollView>
          
          

    );
    }
}
export default Footer;


