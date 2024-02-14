import React from 'react';
import {useState} from 'react' ;
import './LoginSignup/LoginSignup.css';
import { BiMessageRoundedDetail,BiMessageSquareDots  } from "react-icons/bi";
import { FaUser,FaLock,FaTransgender  } from "react-icons/fa";
import { MdEmail,MdSubtitles } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { UseDispatch } from 'react-redux';

import axios from 'axios';

export const Signup=()=>{
    
    const[fname,setFName]=useState("");
    const[lname,setLName]=useState("");
    const[uname,setUName]=useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[title,setTitle]=useState("");
    const[specialist,setSpecialist]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const collectData=async()=>{
        console.warn(fname,lname,uname,email,age,gender,title,specialist,password);
        const response = await axios.post(
         "https://virtual-surgery.onrender.com/api/auth/register",
         {
          FirstName: fname,
          LastName: lname,
          UserName: uname,
          Email: email,
          Age: age,
          Gender: gender,
          Title: title,
          Specialist: specialist,
          Password: password,
         },
         {
          headers: {
           "Content-Type": "application/json",
          },
         }
        );

        console.warn(response.data);
        navigate("/");
    }

    return (
        <div className="signup">
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='First Name' value={fname} onChange={(e)=>setFName(e.target.value)}  />
                    <FaUser className='icon' />
                </div>

                <div className="input">
                    <input type="text" placeholder='Last Name' value={lname} onChange={(e)=>setLName(e.target.value)}  />
                    <FaUser className='icon' />
                </div>

                <div className="input">
                    <input type="text" placeholder='User Name' value={uname} onChange={(e)=>setUName(e.target.value)}  />
                    <FaUser className='icon' />
                </div>

                <div className="input">
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    <MdEmail className='icon' />
                </div>

                <div className="input">
                    <input type="text" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}  />
                    <BiMessageRoundedDetail className='icon' />
                </div>

                <div className="input">
                    <input type="text" placeholder='Gender' value={gender} onChange={(e)=>setGender(e.target.value)}  />
                    <FaTransgender className='icon' />
                </div>

                <div className="input">
                    <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}  />
                    <MdSubtitles className='icon' />
                </div>

                <div className="input">
                    <input type="text" placeholder='Specialist' value={specialist} onChange={(e)=>setSpecialist(e.target.value)}  />
                    <BiMessageSquareDots  className='icon' />
                </div>

                <div className="input">
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
                    <FaLock className='icon' />
                </div>
               
                <div className="submit-container">
                   <center> <button type='button' className='submit' onClick={collectData} > Sign  Up</button></center>
                </div>
            </div>
           </div>
        </div>
    );
}


