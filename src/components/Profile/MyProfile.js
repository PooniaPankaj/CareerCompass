import React, { useContext, useEffect, useState } from 'react'
import "./Profile.css";
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import useFetch from '../Hooks/UseFetch';
import { AuthContext } from '../Context/AuthContext';
const personalInfo = {
  firstname: "Pankaj",
  lastname: "Poonia",
  phoneNumber: "",
  collegeName: "IIT Mandi",
  gender: "Male",
  image: "https://image.emojisky.com/862/5891862-middle.png",
  email: "xyz@gmail.com",
  companyApplied: ["google", "Microsoft", "Sprinklr", "intuit"],
  companySelected: ["None"],
  batch: 2025,
  branch: "CSE",
  admin: 1,
}

const MyProfile = () => {
  const [person, setperson] = useState(
    personalInfo
  );
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setperson(user);
  }, [user]);
  
  console.log(user);


  return (
    <>
      <Sidebar />
      <div className="myprofilewholecont">

        <div className="profile_photo_cont  ">
          <img src={person.image} alt={person.firstname} className="person-img" />
        </div>

        <div className="first_name_last_name">
          <div className="first_name_cont glass_effect">
            <h6>First Name</h6>
            <h3>{person.firstname}</h3>

          </div>
          <div className="first_name_cont glass_effect">
            <h6>Last Name</h6>
            <h3>{person.lastname}</h3>
          </div>

        </div>

        <div className="college_cont glass_effect">


          <h6>College Name</h6>
          <h3>{person.collegeName}</h3>


        </div>

        <div className="first_name_last_name">
          <div className="inside_cont glass_effect">
            <h6>Gender</h6>
            <h3>{person.gender}</h3>
          </div>
          <div className="inside_cont glass_effect">
            <h6>Batch</h6>
            <h3>{person.batch}</h3>
          </div>
          <div className="inside_cont glass_effect">
            <h6>Branch</h6>
            <h3>{person.branch}</h3>
          </div>

        </div>
        <div className="first_name_last_name">
          <div className="inside_cont2 glass_effect">
            <h6>Email</h6>
            <h3>{person.email}</h3>
          </div>
        </div>

        <div className="first_name_last_name">
          {person.companyApplied.map((element) => {
            return <div className='inside_cont glass_effect' key={element.src}>
              <h6>Company</h6>
              <h3>{element}</h3>
            </div>
          })}
        </div>
        <div className="first_name_last_name">
          {person.companySelected.map((element) => {
            return <div className='inside_cont glass_effect' key={element.src}>
              <h6>Working at</h6>
              <h3>{element}</h3>
            </div>
          })}
        </div>

        <div className="edit_profile_button">
          <Link className={`btn btn-primary btn   ${person.admin ? "active" : "disabled"}`} to='#' role="button">Edit Info</Link>
        </div>

      </div>
    </>
  )
}

export default MyProfile
