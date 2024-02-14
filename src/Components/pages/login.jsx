import React, { useState } from 'react';
import './LoginSignup/LoginSignup.css';
import { FaLock , FaUser} from "react-icons/fa";
import { json, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UseSelector } from 'react-redux';
import {loginSuccess} from  '../../redux/apiCalls/authApiCall'

export const Login = () => {
    const { user } = useSelector(state=> state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formSubmitHandler = (e) => { 
        e.preventDefault();
        if (email.trim() === "") {
            setErrorMessage("Email is required");
            return;
        }
        if (password.trim() === "") {
            setErrorMessage("Password is required");
            return;
        }
        dispatch(loginSuccess({email,password}));
    };

    const collectData = async () => {
        console.warn(email, password);
        let result = await fetch("https://virtual-surgery.onrender.com/api/auth/login", {
            method: 'POST',
            body: JSON.stringify({ Email:email, Password:password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(JSON.stringify(result));
        navigate('/');
    };

    return (
        <div className='login'>
            <div className='container'>
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={formSubmitHandler}>
                    <div className="inputs">
                        <div className="input">
                            <input type="text" id="username" autoComplete="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                            <FaUser className='icon' />
                        </div>
                        <div className="input">
                            <input type="password" id="email" autoComplete="current-password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                            <FaLock className='icon' />
                        </div>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="forgot-password">
                            <label>
                                <input type="checkbox" name='rememberme' id='rememberme' />Remember me
                            </label>
                            <a href="ForgotPassword">Forgot Password?</a>
                        </div>
                        <div className="submit-container">
                            <center><button type='submit' className='submit' onClick={collectData}> Login </button></center>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
