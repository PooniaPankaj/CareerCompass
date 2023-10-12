import React from 'react'
import { useContext, useState } from "react"
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

import * as FaIcons from 'react-icons/fa';
import "./Login.css"
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleClick = async (e) => {
    // to prevent page from refreshing
    e.preventDefault();
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post("/auth/login", credentials)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data })
    }

  }
  return (
    <div>
      <div className="bg-image"></div>
      <div className="login">

        <div className="lContainer">
          <div className="heading"><FaIcons.FaMountain size={30} />CareerCompass</div>
          <input type="text" placeholder="Enter Email " id="email" name="email" onChange={handleChange}  className="lInput"></input>
          <input type="password" placeholder="Enter Password " id="password" name="password" onChange={handleChange}  className="lInput"></input>
          <button type="button" onClick={handleClick}  className="btn btn-outline-light">Login</button>

            <div className=''>or</div>
            <Link   to='/register'>Sign-Up </Link>
          {error && <span className="errormsg">{error.message}</span>}
        </div>

      </div>

    </div>
  )
}

export default Login
