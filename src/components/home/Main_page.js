import React from 'react'
import './Main_page.css';
import Company_page from './Company_page';

const datas = [
  {
    data: "280+",
    title: "Students Placed"
  },
  {
    data: "100+",
    title: "Companies Visited"
  },
  {
    data: "30Lac",
    title: "Average Package"
  }
]

const Main_page = () => {
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
                <Details_items key={element.data} data={element.data} title={element.title} />
              </div>
            })}

            {/* <div className="students_placed">{datas[0].data}</div>
                  <div className="companies_visited">100+</div>
                  <div className="avg_salary">30Lac</div> */}

          </div>
          <button type="button" className="btn btn-outline-light register_button">Register Today!</button>
        </div>
      </div>
      <Company_page />
    </>
  )
}
function Details_items(props) {
  let { data, title } = props;
  return (
    <>
      <div className="data_cont">
        {data}
      </div>
      <div className="title_cont">
        {title}
      </div>
    </>
  )

}

export default Main_page
