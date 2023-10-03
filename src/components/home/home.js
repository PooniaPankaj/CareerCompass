import React from 'react'
import Navbar from '../navbar/Navbar.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Profile from '../Profile/Profile.js';
import Main_page from './Main_page.js';

const home = () => {
  return (
    <div>
        <Sidebar/>
        <Main_page/>
    </div>
  )
}

export default home
