import React, { useState } from 'react';
import './LoginSignup/LoginSignup.css';
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const ResetPassword = () => {

    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const formSubmitHandler = (e) => { 
        e.preventDefault();
        if (password.trim() === "") {
            setErrorMessage("Password is required");
            return;
        }
        console.log({ password });
    };

    const collectData = async () => {
        console.warn( password);
        let result = await fetch("http://localhost:8000/api/auth/register", {
            method: 'POST',
            body: JSON.stringify({ password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/');
    };

    return (
        <div className='login'>
            <div className='container'>
                <div className="header">
                    <div className="text">Reset Password</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={formSubmitHandler}>
                    <div className="inputs">
                        <div className="input">
                            <input type="password" placeholder='New Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                            <FaLock className='icon' />
                        </div>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="submit-container">
                            <center><button type='submit' className='submit' onClick={collectData}> Submit </button></center>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
