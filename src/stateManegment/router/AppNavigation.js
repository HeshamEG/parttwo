import { createStackNavigator } from 'react-navigation'
import HomeScreen from  './../../Screens/HomeScreen'
import LoginScreen from './../../Screens/LoginScreen'
import * as strings from './../../Strings'
import { createAppContainer } from 'react-navigation';


const PrimaryNav = createStackNavigator({
 
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  
  }, {
  // Default config for all screens
  headerMode: 'none',
  headerBackTitle: null,
  initialRouteName: strings.LoginScreen,
})
const AppContainer = createAppContainer(PrimaryNav);
export default AppContainer;

