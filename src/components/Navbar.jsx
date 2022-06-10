import React from 'react';
import { Link,Navigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../Redux/auth/auth.action';
const Navbar = () => {
    const dispatch=useDispatch();
    const {isLoggedin}=useSelector(state=>state.auth);
    const authfn=()=>{
        isLoggedin?dispatch(logout()):<Navigate to='/login'/>
    }
    return (
        <div style={{width:'100px', display:'flex' , justifyContent:'space-between',margin:'auto'}}>
<Link to='/todo' >Todo</Link>
<Link to='/login' onClick={authfn}>{isLoggedin?"Logout":'Login'}</Link>            
            
        </div>
    );
};

export default Navbar;