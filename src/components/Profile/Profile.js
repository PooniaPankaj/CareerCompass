


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import user from './img/user.png';

import './Profile.css';
const Profile = () => {

 

  return (
    <div className="App">
      <div className='menu-container' >
        <Link to = "/myprofile" className='menu-trigger' >
          <img src={user}></img>
        </Link>

        
      </div>
    </div>
  )
}

export default Profile
