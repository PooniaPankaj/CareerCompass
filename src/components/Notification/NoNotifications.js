import React from 'react'
import * as IoIcons from 'react-icons/io5';
const NoNotifications = () => {
  return (
    <>
        <div className='notification_cont_no_job'>
        <IoIcons.IoNotificationsOutline size={80}/>
        <div className='no_job_text'>
            No New Notifications
        </div>
    </div>
        
    </>
  )
}

export default NoNotifications
