import React,{useEffect} from 'react'
import './Main_page.css';
import Company_page from './Company_page';
import { Link } from 'react-router-dom';

const datas = [
  {
    data: "280",
    data1:"+",
    title: "Students Placed"
  },
  {
    data: "100",
    data1:"+",
    title: "Companies Visited"
  },
  {
    data: "30",
    data1:"Lac",
    title: "Average Package"
  }
]

const Main_page = () => {

  useEffect(() => {
    let valueDisplays = document.querySelectorAll(".data_cont");
    let intervals = 1000;
    valueDisplays.forEach((valueDisplay)=>{
      let startVal = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(intervals/endValue);
      let data1 = valueDisplay.getAttribute("data1-val");
      let counter = setInterval(function(){
        startVal +=1;
        valueDisplay.textContent = startVal + data1;
        if (startVal === endValue){
          clearInterval(counter);
        }
      },duration)
    })
  }, [])
  

  return (
    <>
      <div className="main_page_container ">
        <div className="main_page_content">
          <div className="website_name_heading">
            <h1>Career Compass</h1>
          </div>
          <div className="website_placed_data">
            {datas.map((element) => {
              return <div className='website_imp_data' key={element.data}>
                <Details_items key={element.data} data={element.data} data1 = {element.data1} title={element.title} />
              </div>
            })}

            {/* <div className="students_placed">{datas[0].data}</div>
                  <div className="companies_visited">100+</div>
                  <div className="avg_salary">30Lac</div> */}

          </div>
          <Link to="/register" type="button" className="btn btn-outline-light register_button">Register Today!</Link>
        </div>
      </div>
      <Company_page />
    </>
  )
}
function Details_items(props) {
  let { data,data1, title } = props;
  return (
    <>
      <div className="data_cont" data-val={data} data1-val = {data1}>
        0
      </div>
      <div className="title_cont">
        {title}
      </div>
    </>
  )

}

export default Main_page
