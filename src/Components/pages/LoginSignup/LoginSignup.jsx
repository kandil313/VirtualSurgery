import React from 'react';
import {useState} from 'react' ;
import './LoginSignup.css';
import { FaUser,FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const LoginSignup=()=>{

    const [action,setAction] = useState("Sign Up");

    return(
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
                    <input type="text" placeholder='Name' required/>
                    <FaUser className='icon'/>
                </div>}
               
                <div className="input">
                    <input type="email" placeholder='Email' id='username'  required/>
                    <MdEmail className='icon'/>
                </div>
                <div className="input">
                    <input type="password" placeholder='Password' id='userpass' required/>
                    <FaLock className='icon'/>
                </div>
            {action==="Sign Up"?<div></div>:
            <div className="forgot-password"><label>
                <input type="checkbox" name='rememberme' id='rememberme'  />Remember me </label> 
                <a href="#">Forgot Password?</a>
            </div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>    
            </div>

        </div>
        );
    };
export default LoginSignup
