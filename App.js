
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

import { Container, Content, ListItem, Body, Left, Drawer, } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Src/Components/FolderdynamicScreen/Login^Register/index';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Src/Components/FolderstaticScreen/Splash/Splash';
// import Login from './Src/Components/FolderdynamicScreen/Login^Register/Login'

// export default function App() {
//   return (
//     <NavigationContainer>
//       <LoginStack/>
//       </NavigationContainer>
//   );

//   }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      View:<Splash/>
    };
  setTimeout(()=>{
    if(true){
      this.setState({
        View:
        <NavigationContainer>
    
        <Login/>
        </NavigationContainer>
      })
    }
  },2000)
  
  }
  render() {
return(
  this.state.View
 
);
  }
}
export default App;














