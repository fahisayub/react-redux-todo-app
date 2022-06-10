import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/auth/auth.action';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
const Login = () => {
    const dispatch=useDispatch();
    const {isLoggedin}=useSelector(state=>state.auth);
    const navigate=useNavigate();
    const authfn=()=>{
      dispatch(login());
      return navigate('/todo');
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="email"  placeholder='email'/><input type="password" placeholder='password' />
            <button onClick={authfn}>Login</button>
            
        </div>
    );
};

export default Login;