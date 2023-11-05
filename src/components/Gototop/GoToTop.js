import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import * as AiIcons from 'react-icons/ai';
const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
.top-btn {
font-size: 2.4rem;
 width: 3rem;
height: 3rem;
color:#fff;
background-color: #4070F4;
box-shadow: white;
border-radius: 50%; position: fixed;
bottom: 5rem;
right: 5rem; z-index: 999;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

&--icon {
animation: gototop 1.25 linear infinite alternate-reverse;
}
@keyframes gototop {
0% {
transform: translate(-0.5rem);
}
100% {
transform: translate(1rem);
}
}
}
`



const GoToTop = () => {
    const [visible, setvisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    }
    const listenToScroll =()=>{
        let heightToScroll = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (windowScroll > heightToScroll){
            setvisible(true);
        }
        else{
            setvisible(false);
        }
    }
    useEffect(() => {
      window.addEventListener("scroll",listenToScroll)
      return ()=>window.removeEventListener("scroll",listenToScroll) ;
    }, [])
    
    return (
        <>
        <Wrapper>
            {visible &&  <div className='top-btn' onClick={goToBtn}>
            {/* <i class="fa-solid fa-arrow-up"></i>
             */}
             <AiIcons.AiOutlineArrowUp className='hello top-btn--icon'/>
             {/* <FaIcons className="top-btn--icon"/> */}
            </div>}
           

        </Wrapper>

        </>
    )
}

export default GoToTop
