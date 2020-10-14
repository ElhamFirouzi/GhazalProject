
import * as React from 'react';
import { Button, View ,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import  profile from './../profile/index';
import Slider from './../SideBar/DrawerMenuScreen';
import Header from './../Header/Header';
import TermsandConditions from './../../FolderstaticScreen/Terms and Conditions/Terms and Conditions';
import AboutUs from './../../FolderstaticScreen/about_us/AboutUs';
import NewsandArticles from './../News and Articles/News and Articles';
import ContactUs from './../../FolderstaticScreen/contact us/ContactUs';
import CriticsAndSuggestions from './../CriticsAndSuggestion/CriticsAndSuggestion';
import Details from './Details';
import ArticleDetail from './../News and Articles/ArticleDetail';
import  IndustrialDetails from './IndustrialDetails';
import   PharmaceuticalDetails from './PharmaceuticalDetails';
import Pharmacist from './Pharmacist';
import Messages from './../Messages/Messages';
import ShiftList from './../News and Articles/ShiftList';
import ShiftDetail from './../News and Articles/ShiftDetail';
import Workers from './../workers/index';
import SearchDetails from './SearchDetails';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gesturesEnabled: false
  }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}  initialRouteName="HomeScreen" />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Header" component={Header}/>
      <Stack.Screen name="Slider" component={Slider}/>
      <Stack.Screen name="TermsandConditions" component={TermsandConditions}/>
      <Stack.Screen name="AboutUs" component={AboutUs}/>
      <Stack.Screen name="NewsandArticles" component={NewsandArticles}/>
      <Stack.Screen name="CriticsAndSuggestions" component={CriticsAndSuggestions}/>
      <Stack.Screen name="ArticleDetail" component={ArticleDetail}/>
      <Stack.Screen name="profile" component={profile}/>
      <Stack.Screen name="PharmaceuticalDetails" component={PharmaceuticalDetails}/>
      <Stack.Screen name="IndustrialDetails" component={IndustrialDetails}/>
      <Stack.Screen name="Pharmacist" component={Pharmacist}/>
      <Stack.Screen name="Messages" component={Messages}/>
      <Stack.Screen name="ShiftList" component={ShiftList}/>
      <Stack.Screen name="ShiftDetail" component={ShiftDetail}/>
      <Stack.Screen name="Workers" component={Workers}/>
      <Stack.Screen name="SearchDetails" component={SearchDetails}/>
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <Slider {...props}/> } drawerPosition={'right'}  >
     <Drawer.Screen name="MyStack" component={MyStack}  />
      <Drawer.Screen name="ContactUs" component={ContactUs}  />
    </Drawer.Navigator>
  );
}


export default DrawerNavigator;