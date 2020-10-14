
import {StyleSheet, Dimensions, ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
const screenWidth = Dimensions.get('window').width;


export default StyleSheet.create({
    RegisterLogin:{
   width:wp('100%'),
   height:hp('30%'),
    },


    LoginText:{
        fontFamily: 'IRANSans(FaNum)',
        fontSize: 20,
        color: '#212529',
        marginTop:20,
        marginRight:20
     
    },
    LoginText1:{
        fontFamily: 'IRANSans(FaNum)',
        fontSize: 16,
        color: '#212529',
        marginTop:20,
        marginRight:20
     
    },
    LoginTextMobile:{
        fontSize:14,
        fontFamily:'IRANSans(FaNum)',
        color:'#0C5B77',
        paddingTop:20,
        paddingRight:20
    },
    LoginTextMobile1:{
        fontSize:12,fontFamily:'IRANSans(FaNum)',
        backgroundColor:'#F1F1F1',
        borderColor:'#DCDCDC',
         borderWidth:2,
         borderRadius: 8,
         height: 50,
         width:'90%',
         paddingRight:10,
         color:'#8d759a',
    },
    ButtonLogin:{
            borderWidth:1,
            borderRadius:50,
            borderColor:'#0c5b77',
            width:wp('40%'),
            height:hp('7%'),
         marginLeft:wp('53%'),
            marginTop:20,
            justifyContent :'center',
            backgroundColor:'#0c5b77',
           

    },
    ButtonTxtReview:{
        color:'#fff',
        fontFamily:'IRANSans(FaNum)',
        fontSize:12,
      
    },

containerFooter:{
    width:'100%',
    backgroundColor:'#0c5b77',
    height:'100%'

},
ghazalFooter:{
    color:'#FFFFFF', 
    fontSize: 18, 
    fontFamily: 'IRANSans(FaNum)',
    paddingRight:20,
    paddingTop:10,
    borderBottomColor:'#FFFFFF',
    borderBottomWidth:1,
    paddingBottom:10,
    fontWeight: "bold",
},
ghazalFooter1:{
    color:'#FFFFFF', 
    fontSize: 14, 
    fontFamily: 'IRANSans(FaNum)',
 paddingRight:20,
 paddingTop:10,
},
ghazalFooter2:{
    color:'#FFFFFF', 
    fontSize: 18, 
    fontFamily: 'IRANSans(FaNum)',
    borderBottomColor:'#FFFFFF',
    borderBottomWidth:1,
    paddingRight:14,
    paddingBottom:10,
    paddingTop:25,
    fontWeight: "bold"
},
sotialmediafooter:{
    flexDirection: 'row-reverse',
    flex:1,
    justifyContent:'space-around',
   marginTop:10,


},
ghazalFooter3:{
    color:'#FFFFFF', 
    fontSize: 18, 
    fontFamily: 'IRANSans(FaNum)',
    borderBottomColor:'#FFFFFF',
    borderBottomWidth:1,
    fontWeight: "bold", 
    paddingTop:25,
    paddingRight:20, 
},
imagetotall:{
flex:1,
alignItems:'center',
paddingTop:20
},
imageenamad:{
    width:250,
    height:250,
    borderRadius: 150,
    borderColor:'#3d7dcc',
    borderWidth:3,

},
imageenamad1:{
    width:250,
    height:250,
    borderRadius: 150,
    borderColor:'#3d7dcc',
    borderWidth:3,
marginTop:20,

},
profilebox:{
    width:'95%',
    height:800,
    backgroundColor:'#FFFFFF',
    borderRadius: 8,
    borderColor:'#f7f7f7',
  marginTop:'3%',
  marginBottom:'3%',
   marginLeft:'2.5%'
   
},
text:{
    fontSize:12,
    color:'#212529',
    fontFamily:'IRANSans(FaNum)',
},

Textheader:{
    flexDirection: 'row',
    height:60,
   
    justifyContent:'space-around',
paddingTop:'2%',
fontFamily:'IRANSans(FaNum)',
backgroundColor:'#f7f7f7',
},

imagestyle:{
    height: 200, 
    width: '50%',
    marginTop:20
},
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
   ButtonStyle:{

   
  
   borderRadius:5,
     borderWidth: 2,
      height: 55, width: '98%',
 
       fontSize: 12
       , fontFamily: 'IRANSans(FaNum)',
   },

   ProfileHeader:{
    width:'95%'  ,
     backgroundColor: '#FFFFFF',
     height:900, 
     marginHorizontal:10,
     marginTop:10,
     marginBottom:10,
     borderRadius:8,borderWidth:5,  
     borderColor: '#f7f7f7',
     shadowColor:'#000000',
      elevation: 7,
   },
   TextInputProfile:{
    fontSize: 12, fontFamily: 'IRANSans(FaNum)',
     backgroundColor: '#F1F1F1', 
     borderColor: '#DCDCDC', 
     borderWidth: 2,
    borderRadius: 8,
    height: 50,
     width: '90%',
     paddingRight: 10,
    color: '#8d759a',
   },
 
   txtAlarmLogin: {
    fontFamily: 'IRANSans(FaNum)',
    color: 'red',
    fontSize: 12
},
boxsmall: {
    width: '95%',
    backgroundColor: '#FFFFFF',
    height: 250,
    borderRadius: 15,
    borderColor: '#B5B5B5',
    shadowColor: '#000000',
    elevation: 5,
    padding: 20,
    margin: 10,
},

});