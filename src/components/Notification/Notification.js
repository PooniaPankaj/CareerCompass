import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar.js"
import NoNotifications from './NoNotifications.js';
import useFetch from '../Hooks/UseFetch.js';
import { AuthContext } from '../Context/AuthContext.js';
import AddNotification from './AddNotification.js';
import './Notification.css';
import axios from 'axios';

const Notification = () => {
  const host = "http://localhost:8800/api/"
  const [admin, setadmin] = useState(false);
  const [open, setopen] = useState(false);
  const user = useContext(AuthContext);
  const [Error, setError] = useState("")
  const [msg, setmsg] = useState([]);
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(`/notification/getNotification`)
  if (user.user ===null){
    navigate("/login");
  }
  console.log("notification user",user);
  useEffect(() => {
    setmsg(data)
    if (user.user!=null)
    setadmin(user.user.admin);
  }, [])


  const deleteNote  = async(id)=>{
    console.log(id);
    try {
      const {data} = await axios.delete(`/notification/deleteNotification/${id}`)
    } catch (error) {
      setError(error);
    }
    const newNotes = msg.filter((msg) => { return msg._id !== id })
    // console.log(newNotes);
    setmsg(newNotes);
  }


  return (
    <>
      <Sidebar />
      {msg.length == 0 ? <NoNotifications /> :
        <div className='notification_cont'>
          <div className='notification_heading'>
            {/* <div className="notification_icon"> <AiIcons.AiTwotoneBell size={30} /></div> */}
            <div className='notification_head_text'>Notifications </div>
          </div>
          {msg.map((element) => {
            return <div className='container-sm w-50 notification_details_cont1' key={element.src}>
              <Notification_items key={element._id} message={element.msg} admin={admin} id={element._id} deleteNote={deleteNote} />
            </div>
          })}
        </div>
      }

      {admin &&
        <div className='addNewNotif'>
          <div className='btn btn-primary btn-sm addnotif ' onClick={() => setopen(true)}>
            + New Notification
          </div>

        </div>

      }

      {open && <AddNotification setopen={setopen} setmsg={setmsg} msg={msg}/>}
    </>
  )
}

function Notification_items(props) {
  let { message,admin,id ,deleteNote} = props;
  
  return (
    <div className='notifcont'>
      <div className='notification_detail_text1 row'>
        <p className='col-12 text_align'>{message}</p>
      </div>
      {admin && <i className="fa-solid fa-trash-can trash_can" onClick={()=>{(deleteNote(id))}}></i>
      }
      

    </div>
  );
}

export default Notification
