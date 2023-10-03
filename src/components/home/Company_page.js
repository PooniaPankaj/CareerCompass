import React from 'react'
import "./Main_page.css"
import "./swiper-bundle.min.css";
import './Main_page';
// import "./swiper-bundle.min.js";
const photos = [
    {
        src: "https://st1.latestly.com/wp-content/uploads/2021/02/08-7-380x214.jpg",
        title: "Microsoft"
    },
    {
        src: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw",
        title: "Google"
    },
    {

        src: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_e04e4aaf59fc62bd4dc642ca5765f978/sprinklr-service.png",
        title: "Sprinklr"
    },
    {
        src: "https://www.freeiconspng.com/uploads/walmart-logo-png-5.png",
        title: "Walmart"
    },
    {
        src: "https://logowik.com/content/uploads/images/uber-technologies-new-20218114.jpg",
        title: "Uber"
    },
    {
        src: "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/s1cihnpc1cnekihotv0e",
        title: "Apple"
    },
];


const Company_page = () => {
    return (
        <div className='companies_cont'>
            <div className="slide-container swiper">
                <div className="slide-content">
                    <div className="card_-wrapper swiper-wrapper">
                        <div className="card_ swipper-slide">
                            <div className="image-content">
                                <span className="overlay">

                                </span>
                                <div className="card_-image">
                                    <img src={photos[0].src} alt='' className='card_-img' />
                                </div>
                            </div>
                            <div className="card_-content">
                                <h2 className='company_name'>{photos[0].title}</h2>
                                <p className='company_desc'>lorem epsum text jhfbsjhdv </p>
                                <button className="company_button">
                                    View More
                                </button>
                            </div>
                        </div>
                        {/* {photos.map((element) => {
                            return <div className='col-md-4 h-100 ' key={element.src}>
                                <CompanyItem key={element.src} title={element.title} imageurl={element.src} newsurl={element.url} />
                            </div>
                        })} */}
                    </div>
                </div>
                <div className='swiper-button-next'></div>
                <div className='swiper-button-prev'></div>
                <div className='swiper-pagination'></div>

            </div>
        </div>
    )
}
// function CompanyItem(props) {
//     let { title, imageurl } = props;
//     return (
//         <div className="card_ swipper-slide">
//             <div className="image-content">
//                 <span className="overlay">

//                 </span>
//                 <div className="card_-image">
//                     <img src={imageurl} alt='' className='card_-img' />
//                 </div>
//             </div>
//             <div className="card_-content">
//                 <h2 className='company_name'>{title}</h2>
//                 <p className='company_desc'>lorem epsum text jhfbsjhdvbjhsvjnbc  udgb  gisughsbv  ygiuhvichjs </p>
//                 <button className="company_button">
//                     View More
//                 </button>
//             </div>
//         </div>
//     );
// }

export default Company_page
