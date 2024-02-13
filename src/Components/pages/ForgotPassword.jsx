import React, { useState } from 'react';
import './LoginSignup/LoginSignup.css';
import { FaUser } from 'react-icons/fa';

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const formSubmitHandler = (e) => { 
        e.preventDefault();
        if (email.trim() === "") {
            setErrorMessage("Email is required!");
            return;
        }
        console.log({ email });
    };

    return (
        <div className='login'>
            <div className='container'>
                <div className="header">
                    <div className="text">Forgot Password</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={formSubmitHandler}>
                    <div className="inputs">
                        <div className="input">
                            <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                            <FaUser className='icon' />
                        </div>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="submit-container">
                            <center> <button type='submit' className='submit'> Submit</button></center>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;

