import React from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai';
import './Notification.css'
import Sidebar from '../Sidebar/Sidebar';
const details = [
    {
        company_name: "Microsoft",
        job_role: "Software engineer intern",
        job_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        monthly_stipend: "125k",
        job_location: "Banglore",
        skills_needed: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link_to_apply: "bdfbidjfbvdbv",
        applied :true,
    },
    {
        company_name: "google",
        job_role: "Software engineer intern",
        job_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        monthly_stipend: "114k",
        job_location: "Banglore",
        skills_needed: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        link_to_apply: "bdfbidjfbvdbv",
        applied:true,
    },
]

const Notification = () => {
    return (
        <>
            <Sidebar/>
            <div className='notification_cont'>
                <div className='notification_heading'>
                    <div className="notification_icon"> <AiIcons.AiTwotoneBell size={30}/></div>
                    <div className='notification_head_text'>Notifications </div>
                </div>
                {details.map((element) => {
                    return <div className='container-sm w-50 notification_details_cont' key={element.src}>
                        <Notification_items key={element.link_to_apply} applied = {element.applied} skills_needed={element.skills_needed} link_to_apply={element.link_to_apply} monthly_stipend={element.monthly_stipend} company_name={element.company_name} job_role={element.job_role} job_description={element.job_description} job_location={element.job_location} />
                    </div>
                })}
            </div>


        </>
    )
}

function Notification_items(props) {
    let { company_name, job_role, job_description, monthly_stipend, job_location, skills_needed, link_to_apply ,applied} = props;
    const capitalizeWords = (str) => {
        return str
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };
    return (
        <>

            <div className='notification_detail_text row'>
                <p className='col-3 text-right notification_headline'>Company-Name :</p>
                <p className='col-9'>{capitalizeWords(company_name)}</p>
            </div>
            <div className='notification_detail_text row'>
                <p className='col-3 text-right notification_headline'>Job-Role : </p>
                <p className='col-9'>{job_role}</p>
            </div>
            <div className='notification_detail_text row'>
                <p className='col-3 text-right notification_headline'>Job-location : </p>
                <p className='col-9'>{job_location}</p>
            </div>
            <div className='notification_detail_text row'>
                <p className='col-3 text-right notification_headline'>Monthly-stipend :</p>
                <p className='col-9'>{monthly_stipend}</p>
            </div>
            <div className='notification_detail_text row'>
                <p className='col-3 text-right notification_headline'>Skills-needed :</p>
                <p className='col-9'>{skills_needed}</p>

            </div>
            <div className='notification_detail_text row'>
                <p className='col-3 text-right notification_headline'>Job-Description :</p>
                <p className='col-9'>{job_description}</p>

            </div>

            <div className='notification_detail_text apply_button_cont'>
                <Link className="btn btn-primary btn-sm apply_button" to={link_to_apply} role="button">Apply</Link>
            </div>

        </>
    );
}

export default Notification
