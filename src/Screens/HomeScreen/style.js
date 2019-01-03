import styled from 'styled-components/native'

export const HomeScreenWrapper = styled.View`
  flex:1;
`
export const RenderSeparator=styled.View`
height: 1;
width: 86%;
background-color: #CED0CE;
margin-left: 14%;

`
export const AddTodoModal=styled.Modal`
flex:1;
justify-content:center;
align-items:center;
`
export const TodoTitle=styled.TextInput`
width: 80%;
border: 1px solid papayawhip;

`
export const TodoText=styled.TextInput`
width: 100%;
height:80%;
border: 1px solid papayawhip;
background-color: #CED0CE;
`