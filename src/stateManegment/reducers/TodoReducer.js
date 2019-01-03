import {TODO_LIST_LOADED} from '../actions/types'
const initialState={
    todoList:[],    
}

export default function(state=initialState,action){    
    switch(action.type){
    case TODO_LIST_LOADED: 
        return {...state,todoList:action.payload}
        default:
        return state;
    }
};
