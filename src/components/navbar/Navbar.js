import React from 'react'
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';
const Navbar = () => {
  return (
    <div className='main_class'>
        <div >
        <Sidebar/>

        </div>
        
        <div className='navbar_head'>
        <i class="fa-solid fa-book"></i> CareerCompass
        </div>

    </div>
    
  )
}

export default Navbar
