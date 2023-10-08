import React,{useEffect} from 'react'
import "./Main_page.css"
import "./swiper-bundle.min.css";
import './Main_page';
import {Link} from 'react-router-dom';
// import "./swiper-bundle.min.js";
const photos = [
    {
        src: "https://st1.latestly.com/wp-content/uploads/2021/02/08-7-380x214.jpg",
        
        title: "Microsoft",
        details:"",
        src_link : ""
    },
    {
        src: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw",
        title: "Google",
        details:"",
        src_link : ""
    },
    {

        src: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e04e4aaf59fc62bd4dc642ca5765f978/sprinklr-service.png",
        title: "Sprinklr",
        details:"",
        src_link : ""
    },
    {
        src: "https://www.freeiconspng.com/uploads/walmart-logo-png-5.png",
        title: "Walmart",
        details:"",
        src_link : ""
    },
    {
        src: "https://logowik.com/content/uploads/images/uber-technologies-new-20218114.jpg",
        title: "Uber",
        details:"",
        src_link : ""
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/s1cihnpc1cnekihotv0e",
        title: "Apple",
        details:"",
        src_link : ""
    },
    
];


const Company_page = () => {
    useEffect(() => {
      window.addEventListener('scroll',companyreveal);
      function companyreveal(){
        var reveal = document.querySelectorAll('.companyreveal');
        for(var i = 0;i<reveal.length;i++){
            var windowheight = window.innerHeight;
            var revealTop = reveal[i].getBoundingClientRect().top;
            var revealPoint = 150;
            if (revealTop <windowheight - revealPoint){
                reveal[i].classList.add('companyActive');
            }
            else{
                reveal[i].classList.remove('companyActive');
            }
        }
      }
    
      return () => {
        window.removeEventListener('scroll',companyreveal);
      }
    });
    
    return (
        <div className='companies_cont '>
            <div className="companies_heading">
                Top Recruiter!
            </div>
            <div className="slide-container ">
                <div className="slide-content container ">
                    <div className="row companyreveal">
                        
                        {photos.map((element) => {
                            return <div className='col-md-4 h-100  ' key={element.src}>
                                <CompanyItem key={element.src} details={element.details} src_link = {element.src_link} title={element.title} imageurl={element.src}  />
                            </div>
                        })}
                    </div>
                </div>
                

            </div>
        </div>
    )
}
function CompanyItem(props) {
    let { title, imageurl ,src_link , details} = props;
    return (
        <div className="card_ ">
            <div className="image-content">
                <span className="overlay">

                </span>
                <div className="card_-image">
                    <img src={imageurl} alt='' className='card_-img' />
                </div>
            </div>
            <div className="card_-content">
                <h2 className='company_name'>{title}</h2>
                <p className='company_desc'>{details}</p>
                <Link to={src_link} className="company_button">
                    View More
                </Link>
            </div>
        </div>
    );
}

export default Company_page
