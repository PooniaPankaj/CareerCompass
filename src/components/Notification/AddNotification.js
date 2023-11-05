import React,{useState} from 'react'
import axios from "axios";
import useFetch from '../Hooks/UseFetch.js';
const AddNotification = (props) => {
    const [companyInfo, setcompanyInfo] = useState(
        {
            batch:undefined,
            msg:undefined,
        }
    )

    const [Error, setError] = useState("");
    const handleChange = (e) => {
        setcompanyInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
   
    const handleClick = async (e)=>{
        // to prevent page from refreshing
        e.preventDefault();

        try {
            console.log(companyInfo);
            const {data} = await axios.post("/notification/addNotification",companyInfo)
            props.setmsg(props.msg.concat(data));
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
      <input type="text" placeholder="Message" id="msg" name="msg" onChange={handleChange} className="lInput"></input>
      <input type="number" placeholder="Batch" id="batch" name="batch" onChange={handleChange} className="lInput"></input>
      <button type="button" onClick={handleClick} className="navButton btn btn-outline-primary">Add</button>
      {Error && <span className="errormsg">{Error.message}</span>}
      </div>
        </div>
    </div>
  )
}

export default AddNotification
