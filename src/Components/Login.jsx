import React from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from '../Features/user';
import ChangeColor from './ChangeColor';

function Login() {

    const dispatch = useDispatch()


  return (
    <div>
        <button onClick={()=> {dispatch(login({name:"Hyefur Jonathan", age: 21, email:"jonathanhyefur@gmail.com"}) ) }}>Login</button>
    

        <button onClick={()=> {
            dispatch(logout());
        }}>Logout</button>

        <ChangeColor />
    
    </div>
  )
}

export default Login