import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;

  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  font-family:'Lato', sans-serif;
  transition: all 0.2s ease-in;
  &:hover {
    background: white;
    border-left: 4px solid #4070F4;
    cursor: pointer;
    color:#4070F4
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  font-weight: 600;
`;



const SubMenu = ({ item }) => {
  

  return (
    <>
      <SidebarLink to={item.path} >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        
      </SidebarLink>
    </>
  );
};

export default SubMenu;