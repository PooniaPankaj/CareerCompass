import React, { useContext,useState,useEffect } from 'react'

import { Link ,useNavigate} from 'react-router-dom'
import * as AiIcons from 'react-icons/ai';
import './JobOpening.css'
import Sidebar from '../Sidebar/Sidebar';
import NoJob from './NoJob';
import { AuthContext } from '../Context/AuthContext';
import useFetch from '../Hooks/UseFetch';
const details= [
    {
        name: "Microsoft",
        role: "Software engineer intern",
        jobDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        stipend: "125k",
        jobLocation: "Banglore",
        skills: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        linkToApply: "bdfbidjfbvdbv",

    },
    {
        name: "Microsoft",
        role: "Software engineer intern",
        jobDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        stipend: "125k",
        jobLocation: "Banglore",
        skills: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        linkToApply: "bdfbidjfbvdbv",

    },
    {
        name: "Microsoft",
        role: "Software engineer intern",
        jobDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        stipend: "125k",
        jobLocation: "Banglore",
        skills: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        linkToApply: "bdfbidjfbvdbv",

    },
]


const Notification = () => {
    const navigate = useNavigate();
    const user = useContext(AuthContext);
    console.log(user);
    if (user.user ===null){
        navigate("/login");
    }
    const {data,loading,error,reFetch} = useFetch(`/company/getcompany`);
    console.log(data);
    const [Details, setDetails] = useState(details);
    useEffect(() => {
      setDetails(data);
    }, [data])
    
    return (
        <>
            <Sidebar />
            {Details.length == 0 ? <NoJob/> :
                <div className='notification_cont'>
                    <div className='notification_heading'>
                        <div className="notification_icon"> <AiIcons.AiTwotoneBell size={30} /></div>
                        <div className='notification_head_text'>Job-Opportunities </div>
                    </div>
                    {Details.map((element) => {
                        return <div className='container-sm w-50 notification_details_cont' key={element.src}>
                            <Notification_items key={element.linkToApply}  skills_needed={element.skills} link_to_apply={element.linkToApply} monthly_stipend={element.stipend} company_name={element.name} job_role={element.role} job_description={element.jobDescription} job_location={element.jobLocation} />
                        </div>
                    })}
                </div>
            }



        </>
    )
}

function Notification_items(props) {
    let { company_name, job_role, job_description, monthly_stipend, job_location, skills_needed, link_to_apply } = props;
    console.log(props);
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
                <Link className={`btn btn-primary btn-sm apply_button `} to={link_to_apply} role="button">Apply</Link>
            </div>

        </>
    );
}

export default Notification
