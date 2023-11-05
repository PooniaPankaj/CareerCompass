import React,{useState} from 'react'
import axios from "axios";

const AddJob = (props) => {
    const [companyInfo, setcompanyInfo] = useState(
        {
            name:undefined,
            role:undefined,
            skills:undefined,
            stipend:undefined,
            jobDescription:undefined,
            jobLocation:undefined,
            linkToApply:undefined,
            batch:undefined,
            branch:undefined,
            lastdatetoapply:undefined
        }
    )

    const [Error, setError] = useState("");
    const handleChange = (e) => {
        setcompanyInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleArray = (e) =>{
        const array = e.target.value.split(",");
        setcompanyInfo(prev =>({...prev,[e.target.name]:array}))
    }

    const handleClick = async (e)=>{
        // to prevent page from refreshing
        e.preventDefault();

        try {
            console.log(companyInfo);
            const {data} = await axios.post("/company/addcompany",companyInfo)
            console.log(data.message);
            // navigate("/login");
            
        } catch (error) {
            setError(error);
        }

    }

  return (
    <div className='modal_'>
      <div className="mcontainer">
      <i className="fa-solid fa-circle-xmark rclose" onClick={() => props.setopen(false)}></i>
      <div className="mitems">
      <input type="text" placeholder="Company Name " id="name" name="name" onChange={handleChange} className="lInput"></input>
      <input type="text" placeholder="Job Role" id="role" name="role" onChange={handleChange} className="lInput"></input>
      <input type="text" placeholder="Skills required" id="skills" name="skills" onChange={handleChange} className="lInput"></input>
      <input type="text" placeholder="Stipend" id="stipend" name="stipend" onChange={handleChange} className="lInput"></input>
      <input type="text" placeholder="Job Description" id="jobDescription" name="jobDescription" onChange={handleChange} className="lInput"></input>
      <input type="text" placeholder="Job Locations" id="jobLocation" name="jobLocation" onChange={handleChange} className="lInput"></input>
      <input type="text" placeholder="Link To Apply" id="linkToApply" name="linkToApply" onChange={handleChange} className="lInput"></input>
      <input type="number" placeholder="Batch" id="batch" name="batch" onChange={handleChange} className="lInput"></input>
      <input type="text" placeholder="Branch(eg:- CSE,EE)" id="branch" name="branch" onChange={handleArray} className="lInput"></input>
      <input type="text" placeholder="DeadLine" id="lastdatetoapply" name="lastdatetoapply" onChange={handleChange} className="lInput"></input>
      <button type="button" onClick={handleClick} className="navButton btn btn-outline-primary">Add</button>
      {Error && <span className="errormsg">{Error.message}</span>}
      </div>
        </div>
    </div>
  )
}

export default AddJob
