import { React, useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './Submenu';
import { IconContext } from 'react-icons/lib';
import Profile from '../Profile/Profile.js'
import './Sidebar.css'

const Nav = styled.div`
  background: rgb(129, 129, 215);
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width:100%;
`;


const NavIcon = styled(Link)`
    color:white;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 10%;
  flex-grow:0;
`;

const SidebarNav = styled.nav`
  background: rgb(129, 129, 215);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setsidebar] = useState(false);
    const showSidebar = () => setsidebar(!sidebar);

    return (
        <>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>

                
                <div className='navtext'>
                <i><FaIcons.FaMountain size={30}/></i> CareerCompass
                </div>
                <div className='profile'>
                    <Profile/>
            </div>

                
            </Nav>
            

            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#'>
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </NavIcon>

                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}

                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default Sidebar
