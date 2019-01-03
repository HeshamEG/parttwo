import {USER,AUTH_ERROR} from "./types";
import firebase from './../../firebase'
export const userAuthenticate=(user)=>dispatch=>{
    return new Promise((resolve, reject)=>{
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((logedinUser)=>{
            console.log(logedinUser)
                  dispatch({
          type: USER,
          payload: logedinUser
        })
        resolve('')

        }).catch(function(error) {
            console.log(error.code==='auth/user-not-found')
            if(error.code==='auth/user-not-found'){
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((userCreated)=>{
                    console.log(userCreated)
                          dispatch({
                  type: USER,
                  payload: userCreated
                })
                resolve('')
                }).catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    dispatch({
                        type: AUTH_ERROR,
                        payload: errorMessage
                      })
            reject('')
                  });
                    }else{
            var errorCode = error.code;
            var errorMessage = error.message;
            dispatch({
                type: AUTH_ERROR,
                payload: errorMessage
              })
            reject('')
        }
          });
        });
}