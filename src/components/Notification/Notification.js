import React,{useEffect, useState} from 'react'
import Sidebar from "../Sidebar/Sidebar.js"
import NoNotifications from './NoNotifications.js';
import useFetch from '../Hooks/UseFetch.js';

const Notification = () => {
  const [msg, setmsg] = useState([]);

  const {data,loading,error} = useFetch(`/notification/getNotification`)
  console.log(data);
  useEffect(()=>{
    setmsg(data)
  },[data])
  return (
    <>
    <Sidebar/>
    {msg.length == 0 ? <NoNotifications/> :
                 <div className='notification_cont'>
                 <div className='notification_heading'>
                     {/* <div className="notification_icon"> <AiIcons.AiTwotoneBell size={30} /></div> */}
                     <div className='notification_head_text'>Notifications </div>
                 </div>
                 {msg.map((element) => {
                     return <div className='container-sm w-50 notification_details_cont1' key={element.src}>
                         <Notification_items key={element.msg}  message = {element.msg} />
                     </div>
                 })}
             </div>
            }
    </>
  )
}

function Notification_items(props){
  let { message } = props;
    
    return (
        <>
            <div className='notification_detail_text1 row'>
                <p className='col-12 text_align'>{message}</p>
            </div>

        </>
    );
}

export default Notification
