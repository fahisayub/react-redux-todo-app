import { ADD_TODO,TOGGLE_TODO,DELETE_TODO, GET_TODO } from "./todo.action.type";

const iniitstate={
  tasks:[],
}
export const todoReducer = (state = iniitstate, {type,payload}) => {
    
    switch(type){
        case ADD_TODO:
            return {
                ...state,
                tasks:[...state.tasks,{...payload}]
            }
        case GET_TODO:return{
          ...state,tasks:payload,
        }
        case TOGGLE_TODO:return null;
        case DELETE_TODO:return null;
        default: return state;
    }
}