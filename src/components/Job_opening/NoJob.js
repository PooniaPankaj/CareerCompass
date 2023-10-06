import React from 'react'
import * as GiIcons from 'react-icons/gi';

const NoJob = () => {
  return (
    <div className='notification_cont_no_job'>
        <GiIcons.GiEmptyHourglass size={80}/>
        <div className='no_job_text'>
            No Job Opportunities Right Now !
        </div>
    </div>
  )
}

export default NoJob
