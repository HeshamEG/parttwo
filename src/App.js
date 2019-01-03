import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import store from "./stateManegment/store";
import { Provider } from "react-redux";
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import * as Strings from './Strings'
import AppNavigation from './stateManegment/router/AppNavigation'
class App extends Component{
  constructor(){
    super()
    this.state={currentScreen:Strings.LoginScreen}
  }
  render() {
    // const {currentScreen}=this.state
    return (

      <Provider store={store}> 
       <AppNavigation/>
 </Provider>
   
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
