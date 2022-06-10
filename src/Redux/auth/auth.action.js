import {LOGIN_REQUEST,LOGOUT_REQUEST} from './auth.action.type';

export const login=()=>{
    return ({
        type:LOGIN_REQUEST,
        
    })
    
}
export const logout=()=>{
    return({
        type:LOGOUT_REQUEST,
    })

}
