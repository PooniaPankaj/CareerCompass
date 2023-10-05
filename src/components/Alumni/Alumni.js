// import React, { useState, useEffect } from "react";
// import "./Alumni.css";
// import Data from './Data.js';

// const Slider = () => {
//   const [people] = useState(Data);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0);
//     }
//   }, [index, people]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 5000);
//     return () => {
//       clearInterval(slider);
//     };
//   }, [index]);

//   return (
//     <section className="Alumni-section">
//       <div className="Alumni-title">
//         <h2>top leader</h2>
//       </div>
//       <div className="Alumni-section-center">
//         {people.map((item, indexPeople) => {
//           const { id, image, name, title, quote } = item;
//           let position = "Alumni-nextSlide";
//           if (indexPeople === index) {
//             position = "Alumni-activeSlide";
//           }
//           if (
//             indexPeople === index - 1 ||
//             (index === 0 && indexPeople === people.length - 1)
//           ) {
//             position = "Alumni-lastSlide";
//           }
//           return (
//             <article className={position} key={id}>
//               <img src={image} alt={name} className="Alumni-person-img" />
//               <h4>{name}</h4>
//               <p className="Alumni-title">{title}</p>
//               <p className="Alumni-text">{quote}</p>
//             </article>
//           );
//         })}
//         <button className="Alumni-prev" onClick={() => setIndex(index - 1)}>
//           <i className="fas fa-arrow-left" />
//         </button>
//         <button className="Alumni-next" onClick={() => setIndex(index + 1)}>
//           <i className="fas fa-arrow-right" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Slider;
import React, { useState, useEffect } from "react";
import "./Alumni.css";
import data from "./Data.js";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>top leader</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
