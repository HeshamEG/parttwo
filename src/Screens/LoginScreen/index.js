import React, {Component} from 'react';
import { connect } from "react-redux";
import {userAuthenticate} from './../../stateManegment/actions/AuthAction'
import { withNavigation } from "react-navigation";
import * as Strings from './../../Strings'
import {LoginScreenWrapper,LoginForm,EmailInput,PasswordInput,LoginButton,LoginButtonText,ErorText} from './style'
import { StackActions, NavigationActions } from 'react-navigation';
import {ActivityIndicator,View} from 'react-native'
class LoginScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {loading:false, password:'',email: '' ,emailValidationColor:'green',passwordValidationColor:'green'};
  }
  componentWillMount(){
  }  
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
  validatePassword=(password)=>{
    // console.log(password,password.length)
    return password.length>6;
  }
  navigateToHomeScreen=()=>{
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: Strings.HomeScreen })],
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
const {email,emailValidationColor,password,passwordValidationColor,loading}=this.state
if (loading) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  );
}
    return (
        <LoginScreenWrapper >
        <LoginForm>
          <EmailInput  
          underlineColorAndroid={emailValidationColor}
          onChange ={ () => {
if (!this.validateEmail(email)) {
  this.setState({emailValidationColor:'red'})
  // console.log('not a valid email')
} else {
  this.setState({emailValidationColor:'green'})
  // console.log('valid email')
} }}

placeholder="Email"   onChangeText={(email) => this.setState({email})}
        value={email}
        />
        <PasswordInput     
 onChange ={ () => {
     if (!this.validatePassword(password)) {
  this.setState({passwordValidationColor:'red'})
} else {
  this.setState({passwordValidationColor:'green'})
} }}
underlineColorAndroid={passwordValidationColor}
onChangeText={(password) => this.setState({password})}
value={password}
 secureTextEntry={true} inputType="Password" placeholder="password"/>
        <LoginButton onPress={()=>{
            this.setState({loading:true})
          let user ={email:email,password:password};
          this.props.userAuthenticate(user).then(()=>{
            this.setState({loading:false})
          this.navigateToHomeScreen()
          }).catch(()=>{
            this.setState({loading:false})

          })
          
        }} >
        <LoginButtonText>{Strings.LOGIN_REG}</LoginButtonText>
        </LoginButton>

        </LoginForm>
        <ErorText>{this.props.authError}</ErorText>

      </LoginScreenWrapper>
   
    );
    
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    authError:state.auth.authError
  }
}
  export default connect(mapStateToProps, {
    userAuthenticate
  }) (withNavigation(LoginScreen))

