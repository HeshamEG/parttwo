import {USER,AUTH_ERROR} from '../actions/types'
const initialState={
    user:[],
    authError:''
    
}

export default function(state=initialState,action){
    console.log('dispatched')
    
    switch(action.type){
    case USER: 
        return {...state,user:action.payload}
    case AUTH_ERROR:
    return {...state,authError:action.payload}

        default:
        return state;
    }
};
// const AuthReducer=[];
// export default AuthReducer;