import React from 'react'
import Navbar from '../navbar/Navbar.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Profile from '../Profile/Profile.js';
import Main_page from './Main_page.js';
import Alumni from '../Alumni/Alumni.js';
import Footer from '../Footer/Footer.js';

const home = () => {
  return (
    <div>
        <Sidebar/>
        <Main_page/>
        <Alumni/>
        <Footer/>
    </div>
  )
}

export default home
