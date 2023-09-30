import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';


export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon : <AiIcons.AiFillHome/>,
        iconClosed : <RiIcons.RiArrowDownSFill/>,
        iconOpen : <RiIcons.RiArrowUpSFill/>
    },
    {
        title: 'Profile',
        path: '../profile',
        icon : <BiIcons.BiFace/>
    },
    {
        title: 'Notification',
        path: '../Notification',
        icon : <RiIcons.RiNotification4Line/>
    },
    // {
    //     title: 'ActiveJobs',
    //     path: '/ActiveJobs',
    //     icon : <AiIcons.AiFillHome/>
    // },
    {
        title: 'JobOpening',
        path: '/JobOpening',
        icon: <BiIcons.BiBookOpen/>
    },
    {
        title: 'Support',
        path: '/Support',
        icon: <AiIcons.AiFillQuestionCircle/>
    }
]
