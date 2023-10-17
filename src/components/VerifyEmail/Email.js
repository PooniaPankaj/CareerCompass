import React,{useState,useEffect} from 'react'
import { useParams ,Link} from 'react-router-dom';
import "./Email.css"
import axios from "axios";
const Email = () => {
    const params = useParams();
    const [validUrl, setvalidUrl] = useState(1);
    useEffect(() => {
        const verifyEmailUrl = async()=>{
            try {
                console.log(params);

                const url = `http://localhost:8800/api/user/${params.id}/verify/${params.token}`;
                const {data} = await axios.get(url);
                console.log(data);
                setvalidUrl(true);
            } catch (error) {
                console.log(error);
                setvalidUrl(false);
            }
        }
        verifyEmailUrl();
    }, [params])
    
  return (
    <>

    {validUrl?(
        <div className='verify_mail'>
            <div className='verified_image'>

            </div>
            <div className="verified_text">
            verified
            </div>
            
            <Link  to="/login">
                <button type='button'  className="btn btn-outline-success" >Login</button>
            </Link>
        </div>
    ):
    (
        <h1>Not found</h1>
    )
    }

    </>
  )
}

export default Email
