import React from 'react'
import {useState} from 'react';
import { Redirect } from 'react-router';
import './login.css';
const Login= (props)=> {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[loggedin,setLoggedin]=useState(localStorage.getItem('token')===null?false:true);

   

    const nameChangeHandler=(e)=>{
        setUsername(e.target.value);
    }
    const passwordChangeHandler=(e)=>{
        setPassword(e.target.value);
    }

    const formSubmitHandler=(e)=>{
        e.preventDefault();
        if(username==='ganesh' && password==='ganesh')
        { 
            localStorage.setItem('token',"hggwwhbdbaksd1ygqh");
            setLoggedin(true);
        }
       
    }
    
    
    return (
      
        <div className='container'>
          {loggedin && <Redirect to='/private' />}
            <h1>LogIn</h1>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='username'>Username:</label>
                <input id='username' type='text' value={username} onChange={nameChangeHandler}/>
                <label htmlFor='password'>Password:</label>
                <input id='password' type='text' value={password} onChange={passwordChangeHandler}/>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Login;