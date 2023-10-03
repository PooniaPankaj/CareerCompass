import React from 'react'
import { useContext, useState } from "react"

import * as FaIcons from 'react-icons/fa';
import "./Login.css"

const Login = () => {
  return (
    <div>
        <div className="bg-image"></div>
        <div className="login">
            
            <div className="lContainer">
                <div className="heading"><FaIcons.FaMountain size={30}/>CareerCompass</div>
                <input type="text" placeholder="UserName " id="username" name="username"  className="lInput"></input>
                <input type="password" placeholder="Enter Password " id="password" name="password"  className="lInput"></input>
                <button type="button" className="btn btn-outline-light">Login</button>
            </div>

        </div>
      
    </div>
  )
}

export default Login
