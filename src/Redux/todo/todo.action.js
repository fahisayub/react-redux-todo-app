import { ADD_TODO,TOGGLE_TODO,DELETE_TODO,GET_TODO } from "./todo.action.type";
import axios from "axios";

export const addTodo = (payload)=>(dispatch) => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/tasks`,payload).then(res => {
        console.log(res);
        dispatch({type:ADD_TODO,payload:res.data});
    });
        
    }
export const getTodo=()=>(dispatch)=>{
     axios.get(`${process.env.REACT_APP_BASE_URL}/tasks`).then(res=>{
        dispatch({
            type:GET_TODO,
            payload:res.data
        });
        console.log(res.data);
    }).catch(err=>{
        console.log(err)
    }
    )
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload:id,
    };
    }
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload:id,
    }
}
