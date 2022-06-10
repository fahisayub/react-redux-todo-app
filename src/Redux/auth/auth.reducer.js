import {LOGIN_REQUEST,LOGOUT_REQUEST} from './auth.action.type';

const initialState={isLoggedin:false}; 
export const authReducer=(state=initialState,{type})=>{
    console.log(type);
    switch(type){
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoggedin:true,
            }
            case LOGOUT_REQUEST:
            return{
                ...state,
                isLoggedin:false,
            }
           
        default:return state;
    }
}
