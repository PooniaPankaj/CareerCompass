import React from 'react'
import './Main_page.css';
import Company_page from './Company_page';
const Main_page = () => {
  return (
    <div className="main_page_container">
        <div className='placement_container'>
            <div className='placement_photo'>
             </div>
            <div className='placement_records'>
                <h1>Students Placed</h1>
                <div className='placed_data'>99%</div>
                <h1>Average Salary</h1>
                <div className='avg_salary'>30Lac</div>
                <h1>Median Salary</h1>
                <div className='Median_salary'>25Lac</div>
            </div>
        </div>
        <Company_page/>
    </div>
  )
}

export default Main_page
