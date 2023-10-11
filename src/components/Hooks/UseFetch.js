import { useEffect, useState } from "react";
import axios from "axios";
 
const useFetch = (url)=>{
    const [data, setdata] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(false);

    // in useeffect hook we mentioned url as the dependency so when ever we change url it fetch the data again and again 
    useEffect(()=>{
        // setLoading(true);
        const fetchData = async ()=>{
            
            try {
                const res = (await axios.get(url)).data;
                setdata(res);
            } catch (error) {
                setError(error)
            }
            setLoading(false);
        };
        fetchData();
    },[url])

    const reFetch = async ()=>{
        setLoading(true);
        try {
            const res = (await axios.get(url)).data;
            setdata(res);
        } catch (error) {
            setError(error)
        }
        setLoading(false);
    };
    // reFetch();  

    return {data,loading,error,reFetch};

}
export default useFetch;