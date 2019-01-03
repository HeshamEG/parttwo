import styled from 'styled-components/native'

export const LoginScreenWrapper = styled.View`
  background-color: papayawhip;
  flex:1;
  justify-content:center;
  align-items:center;
`

export const LoginForm = styled.View`
  background-color:#FFF;
  justify-content:center;
  align-items:center;
  width:70%;
  position:relative;
  z-index:5;
  height:300px;
  border:2px solid #FFF;
border-radius:20px; 
`
export const EmailInput = styled.TextInput`
  width:80%;
  height:50px;
  border:2px solid #FFF;
border-radius:20px; 
`
export const PasswordInput = styled.TextInput`
margin-top:3px;
width:80%;
height:50px;
border:2px solid #FFF;
border-radius:20px; 
`
export const LoginButton = styled.TouchableOpacity`
margin-top:20px;
background-color:#3d6eff;
justify-content:center;
align-items:center;
width:60%;
height:20%;
border-radius:20px; 
`
export const LoginButtonText = styled.Text`
color:#FFF;
`
export const ErorText = styled.Text`
color:red;
`
