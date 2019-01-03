import {TODO_LIST_LOADED} from "./types";
import firebase from './../../firebase'
export const addTodo=(todoObj)=>dispatch=>{
    return new Promise((resolve, reject)=>{
 
    var userID=firebase.auth().currentUser.uid          
    var ref =firebase.database().ref('lists');
    ref.child(userID+'/userlist').push({
      todoTitle:todoObj.todoTitle,
      todoText:todoObj.todoText,
      time: firebase.database.ServerValue.TIMESTAMP
    }).then((event)=>{
        var userTodoListRef= ref.child(userID+'/userlist')
        var todoListArrHolder =[]
        userTodoListRef.on('value', (snapshot) => {
          snapshot.forEach(function (snapshot) {
                    var todoItem = snapshot.val();
                    todoListArrHolder.push(todoItem)
          })
                dispatch({
                type: TODO_LIST_LOADED,
                payload: todoListArrHolder
              })
             resolve('')
          });

    });})
}
export const getPastTodoList=()=>dispatch=>{
    return new Promise((resolve, reject)=>{
      
      
      
        let userID=firebase.auth().currentUser.uid  
        let ref =firebase.database().ref('lists');
        var userTodoListRef= ref.child(userID+'/userlist')
        var todoListArrHolder =[]
    
        userTodoListRef.on('value', (snapshot) => {
          snapshot.forEach(function (snapshot) {
                    var todoItem = snapshot.val();
                    todoListArrHolder.push(todoItem)
          })
              
                dispatch({
                type: TODO_LIST_LOADED,
                payload: todoListArrHolder
              })
             resolve('')
          });
    
    
        });
}