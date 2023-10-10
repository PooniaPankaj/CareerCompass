import React from 'react'
import { useContext, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as FaIcons from 'react-icons/fa';
import "./Register.css"


const Register = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [credentials, setCredentials] = useState({
        firstname: undefined,
        lastname:undefined,
        email:undefined,
        phoneNumber:undefined,
        batch:undefined,
        branch:undefined,
        token:undefined,

        password: undefined
    });
    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async (e)=>{
        // to prevent page from refreshing
        e.preventDefault();

        try {
            setLoading(true);
            const res = await axios.post("/auth/register",credentials)
            setLoading(false);
            navigate("/login");
            
        } catch (error) {
            setError(error);
        }

    }

  return (
    
    <div>
        <div className="bg-image"></div>
        <div className="register_cont">
            
            <div className="lContainer">
                <div className="heading"><FaIcons.FaMountain size={30}/>CareerCompass</div>
                <input type="text" placeholder="First Name " id="firstname" name="firstname" onChange={handleChange} className="lInput"></input>
                <input type="text" placeholder="Last Name " id="lastname" name="lastname" onChange={handleChange}  className="lInput"></input>
                <input type="text" placeholder="Educational Email ID " id="email" name="email" onChange={handleChange} className="lInput"></input>
                <input type="text" placeholder="Phone Number " id="phoneNumber" name="phoneNumber" onChange={handleChange} className="lInput"></input>
                <input type="number" placeholder="Batch" id="batch" name="batch" onChange={handleChange} className="lInput"></input>
                <input type="text" placeholder="Branch" id="branch" name="branch" onChange={handleChange} className="lInput"></input>
                <input type="number" placeholder="Enter Token (optional)" id="token" name="token" onChange={handleChange} className="lInput"></input>
                
                <input type="password" placeholder="Enter Password " id="password" name="password" onChange={handleChange} className="lInput"></input>
                <button type="button" onClick={handleClick} className="btn btn-outline-light">Register</button>
                {error && <span className="errormsg">{error.message}</span>}
            </div>

        </div>
      
    </div>
  )
}

export default Register



